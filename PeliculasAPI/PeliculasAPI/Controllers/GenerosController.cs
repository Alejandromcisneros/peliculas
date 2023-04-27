using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using PeliculasAPI.Entidades;
using PeliculasAPI.Repositorio;
using System.Security.Cryptography.X509Certificates;

namespace PeliculasAPI.Controllers
{
    
    [Route("api/generos")]
    [ApiController]
    public class GenerosController : ControllerBase
    {
        
        private readonly IRepositorio repositorio;
        private readonly WeatherForecastController weatherForecastController;

        public GenerosController(IRepositorio repositorio, WeatherForecastController weatherForecastController) 
        {
            this.repositorio = repositorio;
            this.weatherForecastController = weatherForecastController;
        }

        [HttpGet]//     api/generos
        [HttpGet ("listado")] //     api/generos/listado

        [HttpGet("/listadoGeneros")] //     listadoGeneros
        public ActionResult<List<Genero>> Get() 
        {
            return repositorio.obtenerTodosLosGeneros();
        }

        [HttpGet("guid")] //  api/generos/guid
        public ActionResult<Guid> GetGUID()
        {

            return repositorio.obtenerGUID();
           // return Ok(new
           // {
             //   GUID_GenerosController = repositorio.obtenerGUID(),
           //     GUID_WeatherForecastController = weatherForecastController.obtenerGUIDWeatherForecastController()
           // });
        }

        //[HttpGet("{id}")] //     api/generos/3 
        // [HttpGet("{id}/{AJMC}")] //     api/generos/AJMC


        // public Genero Get(int id)    AQUI SOLO HAY 1 PARAMETRO QUE ES INT


        // PARAMETROS DEFINIDOS
        //[HttpGet("{id}/{nombre}")]//     api/generos/Jair


        // SOLAMENTE QUE SENA DE TIPO ENTERO EL ID
        //[HttpGet("{id:int}/{nombre=Ale}")]//     api/generos/1/Ale

        //[HttpGet("{id}/{nombre=Ale}")]//     api/generos/1/Ale

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Genero>> Get(int id, [FromHeader] string nombre)
        {
           var genero = await repositorio.ObtenerPorId(id);

            if (genero == null)
            {
                return NotFound();
            }

            return genero;
        }

        [HttpPost]
        public ActionResult Post([FromBody] Genero genero)
        {
            return NoContent();
        }


        [HttpPut]
       public ActionResult Put([FromBody] Genero genero) 
        {
            return NoContent();
        }


        [HttpDelete]
        public ActionResult Delete() 
        {
            return NoContent();
        }

        }
    }
