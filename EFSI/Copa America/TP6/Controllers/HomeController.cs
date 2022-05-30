using System;
using System.IO;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TP6.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace TP6.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            ViewBag.images = Directory.GetFiles(@"wwwroot/img/gallery/exposition");
            return View();
        }

        public IActionResult Sedes()
        {
            return View();
        }
        public IActionResult UltimosCampeones()
        {

            WinnerInfo[] WinnersInfo = JsonConvert.DeserializeObject<WinnerInfo[]>(System.IO.File.ReadAllText(@"winners.json", System.Text.Encoding.UTF8));
            ViewBag.WinnersInfo = WinnersInfo;
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
