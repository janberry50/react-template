using Microsoft.AspNetCore.Mvc;

namespace ReactTemplate.Controllers
{
    public class HomeController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
    }
}
