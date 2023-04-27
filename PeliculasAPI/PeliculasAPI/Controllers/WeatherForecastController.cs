    using Microsoft.AspNetCore.Mvc;
using PeliculasAPI.Repositorio;

namespace PeliculasAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly IRepositorio repositorio;

        public WeatherForecastController(ILogger<WeatherForecastController> logger,
            IRepositorio repositorio)
        {
            _logger = logger;
            this.repositorio = repositorio;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {

            var generos = repositorio.obtenerTodosLosGeneros();
               
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
        
        public Guid obtenerGUIDWeatherForecastController()
        {
            return repositorio.obtenerGUID();
        }
    }
}   