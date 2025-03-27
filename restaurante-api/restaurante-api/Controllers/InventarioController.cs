using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using restaurante_api.Models;
using restaurante_api.Services;

namespace restaurante_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventarioController : ControllerBase
    {
        private readonly InventarioService _inventarioService;

        public InventarioController(IConfiguration configuration)
        {
            _inventarioService = new InventarioService(configuration);
        }

        [HttpGet("{id:length(24)}")]
        public ActionResult<Respuesta> Get(string id)
        {
            var inventario = _inventarioService.Get(id);

            if (inventario == null)
            {
                return new Respuesta
                {
                    Dato = inventario,
                    Estado = false,
                    Mensaje = "Inventario no encontrado"
                };
            }

            return new Respuesta
            {
                Dato = inventario,
                Estado = true,
                Mensaje = "Inventario encontrado"
            };
        }

        [HttpGet]
        public ActionResult<List<Inventario>> GetAll()
        {
            return _inventarioService.GetAll();
        }

        [HttpPost]
        public ActionResult<Inventario> Post(Inventario inventario)
        {
            return _inventarioService.Create(inventario);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Put(string id, Inventario inventarioIn)
        {
            var inventario = _inventarioService.Get(id);

            if (inventario == null)
            {
                return NotFound();
            }

            _inventarioService.Update(id, inventarioIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public ActionResult<Respuesta> Delete(string id)
        {
            var inventario = _inventarioService.Get(id);

            if (inventario == null)
            {
                return new Respuesta
                {
                    Dato=null,
                    Estado= true,
                    Mensaje = "Inventario no encontrado"
                };
            }

            _inventarioService.Remove(inventario._id);

            return NoContent();
        }
    }
}
