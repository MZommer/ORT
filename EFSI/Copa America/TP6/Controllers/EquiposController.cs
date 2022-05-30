using System;
using System.IO;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using TP6.Models;

namespace TP6.Controllers
{
    public class EquiposController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public EquiposController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult VerEquipos()
        {
            string[] Paises = {"Venezuela", "Uruguay", "Peru", "Paraguay", "Ecuador", "Colombia", "Chile", "Brasil", "Bolivia", "Argentina"};
            ViewBag.Paises = Paises;
            return View();
        }

        public IActionResult VerJugadoresEquipo(string Equipo)
        {
            Teams Equipos = JsonConvert.DeserializeObject<Teams>(System.IO.File.ReadAllText(@"teams.json", System.Text.Encoding.UTF8));
            ViewBag.Team = typeof(Teams).GetProperty(Equipo).GetValue(Equipos);//Consigue el pais
            ViewBag.Country = Equipo;
            ViewBag.images = Directory.GetFiles($"wwwroot/img/{Equipo}/gallery");
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
