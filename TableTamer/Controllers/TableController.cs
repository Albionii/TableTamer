﻿using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TableTamer.Data;
using TableTamer.Models;

namespace TableTamer.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TableController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TableController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Table
        [HttpGet]
        public async Task<IActionResult> GetTables()
        {
            var tables = await _context.Table.ToListAsync();
            return Ok(tables); // Return tables as JSON
        }
        [HttpGet("/getTableById/{id}")]
        public async Task<IActionResult> getTableByPositionId(int id) {
            var table = await _context.Tables.FirstOrDefaultAsync(t => t.Position == id);

            if (table == null)
            {
                return NotFound(new { message = "Table not found with the given position ID." });
            }
            return Ok(table);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTable(int id)
        {
            var table = await _context.Tables.FirstOrDefaultAsync(t => t.Position == id);

            if (table == null)
            {
                return NotFound(); 
            }

            return Ok(table);
        }

        

        // POST: api/Table
        [HttpPost]
        public async Task<IActionResult> CreateTable([FromBody] Table table)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState); // Return validation errors
            }

            _context.Add(table);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTable), new { id = table.Id }, table); // Return the created table with 201 status
        }

        // PUT: api/Table/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTable(int id, [FromBody] Table table)
        {
            if (id != table.Id)
            {
                return BadRequest("ID mismatch"); // Return 400 if IDs don't match
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState); // Return validation errors
            }

            try
            {
                _context.Update(table);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TableExists(id))
                {
                    return NotFound(); // Return 404 if table doesn't exist
                }
                throw;
            }

            return NoContent(); // Return 204 for successful update with no content
        }

        // DELETE: api/Table/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTable(int id)
        {
            var table = await _context.Table.FindAsync(id);
            if (table == null)
            {
                return NotFound(); // Return 404 if table not found
            }

            _context.Table.Remove(table);
            await _context.SaveChangesAsync();

            return NoContent(); // Return 204 for successful delete
        }


        [HttpDelete("DeleteByPosition/{pos}")]
        private async Task<IActionResult> DeleteTableByPosition(int pos)
        {
            var table = await _context.Table.Where(table => table.Position == pos).FirstOrDefaultAsync();
            if (table == null)
            {
                return NotFound("Table Not Found");
            }
            _context.Table.Remove(table);
            await _context.SaveChangesAsync();
            return Ok(table);
        }
        private bool TableExists(int id)
        {
            return _context.Table.Any(e => e.Id == id);
        }


    }
}
