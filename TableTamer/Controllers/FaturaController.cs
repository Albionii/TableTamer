using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TableTamer.Data;
using TableTamer.Models;

namespace TableTamer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FaturaController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public FaturaController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Fatura
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Fatura>>> GetFaturas()
        {
            return await _context.Fatura.ToListAsync();
        }

        // GET: api/Fatura/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Fatura>> GetFatura(int id)
        {
            var fatura = await _context.Fatura.FindAsync(id);

            if (fatura == null)
            {
                return NotFound();
            }

            return fatura;
        }

        // POST: api/Fatura
        [HttpPost]
        public async Task<ActionResult<Fatura>> PostFatura(Fatura fatura)
        {
            _context.Fatura.Add(fatura);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetFatura), new { id = fatura.Id }, fatura);
        }

        // PUT: api/Fatura/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFatura(int id, Fatura fatura)
        {
            if (id != fatura.Id)
            {
                return BadRequest();
            }

            _context.Entry(fatura).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FaturaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/Fatura/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFatura(int id)
        {
            var fatura = await _context.Tables.FindAsync(id);
            if (fatura == null)
            {
                return NotFound();
            }

            _context.Tables.Remove(fatura);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FaturaExists(int id)
        {
            return _context.Tables.Any(e => e.Id == id);
        }

        [HttpGet("getFaturaByTavolina/{id}")]
        public async Task<IActionResult> GetFaturaByTableID(int id)
        {
            if (id < 0)
            {
            return BadRequest("Invalid Table id");
            }

            var fatura = _context.Fatura.Where(f => (f.Table.Id == id && f.Status == true)).FirstOrDefaultAsync();
            if (fatura == null)
            {
                Fatura f = new Fatura();
                f.Status = true;
                f.FinishDateTime = DateTime.Now;
                f.OrderDateTime = DateTime.Now;
                return Ok(f);
            }

            return Ok(fatura);
        }



    }
}
