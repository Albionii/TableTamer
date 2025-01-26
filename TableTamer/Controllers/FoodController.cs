using Microsoft.AspNetCore.Mvc;
using TableTamer.Data;
using TableTamer.Models;

namespace TableTamer.Controllers
{
    public class FoodController : Controller
    {
        private readonly ApplicationDbContext _context;

        public FoodController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult CreateReq(Food food)
        {
            if (ModelState.IsValid)
            {
                _context.Foods.Add(food);   
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(food);
        }

        public IActionResult Delete(int id)
        {
            var food = _context.Foods.FirstOrDefault(x => x.Id == id);
            return View(food);
        }


        [HttpPost]
        public IActionResult DeleteReq(int id)
        {
            var food = _context.Foods.Find(id);
            if (food == null)
            {
                 return NotFound();
            }
            _context.Foods.Remove(food);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }

        public IActionResult Index()
        {
            var foods = _context.Foods.ToList();
            return View(foods);
        }

        public IActionResult Create()
        {
            return View();
        }
    }
}
