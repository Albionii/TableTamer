using Microsoft.AspNetCore.Mvc;

namespace TableTamer.Controllers
{
    public class HomeController1 : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
