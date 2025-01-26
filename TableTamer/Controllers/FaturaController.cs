using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using TableTamer.Data;
using TableTamer.Models;

namespace TableTamer.Controllers
{
    public class FaturaController : Controller
    {
        private readonly ApplicationDbContext _context;

        public FaturaController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: Fatura
        public async Task<IActionResult> Index()
        {
            return View(await _context.Tables.ToListAsync());
        }

        // GET: Fatura/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var fatura = await _context.Tables
                .FirstOrDefaultAsync(m => m.Id == id);
            if (fatura == null)
            {
                return NotFound();
            }

            return View(fatura);
        }

        // GET: Fatura/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Fatura/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,UserId,OrderDateTime,FinishDateTime,Status")] Fatura fatura)
        {
            if (ModelState.IsValid)
            {
                _context.Add(fatura);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(fatura);
        }

        // GET: Fatura/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var fatura = await _context.Tables.FindAsync(id);
            if (fatura == null)
            {
                return NotFound();
            }
            return View(fatura);
        }

        // POST: Fatura/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,UserId,OrderDateTime,FinishDateTime,Status")] Fatura fatura)
        {
            if (id != fatura.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(fatura);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!FaturaExists(fatura.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(fatura);
        }

        // GET: Fatura/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var fatura = await _context.Tables
                .FirstOrDefaultAsync(m => m.Id == id);
            if (fatura == null)
            {
                return NotFound();
            }

            return View(fatura);
        }

        // POST: Fatura/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var fatura = await _context.Tables.FindAsync(id);
            if (fatura != null)
            {
                _context.Tables.Remove(fatura);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool FaturaExists(int id)
        {
            return _context.Tables.Any(e => e.Id == id);
        }
    }
}
