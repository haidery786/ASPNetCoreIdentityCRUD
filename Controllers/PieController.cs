using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using my_new_app.Models;
using my_new_app.ViewModels;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace my_new_app.Controllers
{
     [Route("api/[controller]")]
    public class PieDataController : Controller
    {
          private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };
        private readonly IPieRepository _pieRepository;

        public PieDataController(IPieRepository pieRepository)
        {
            _pieRepository = pieRepository;
        }

         [HttpGet("[action]")]
        public IEnumerable<Pie> GetAllPies()
        {
           var pies = _pieRepository.GetAllPies().OrderBy(p => p.Name);

           return pies;
        }

         [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }

        // GET: /<controller>/
        // public IActionResult Index()
        // {
        //     ViewBag.Title = "Pie Overview";

        //     var pies = _pieRepository.GetAllPies().OrderBy(p => p.Name);

        //     HomeViewModel homeViewModel = new HomeViewModel()
        //     {
        //         Title = "Welcome to Imran's Pie Shop",
        //         Pies = pies.ToList()
        //     };

        //     return View(homeViewModel);
        // }

        // public IActionResult Details(int id)
        // {
        //     var pie = _pieRepository.GetPieById(id);
        //     if (pie == null)
        //     {
        //         return NotFound();
        //     }
        //     else
        //         return View(pie);
        // }
    }
}
