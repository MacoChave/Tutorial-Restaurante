using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using restaurante_api.Models;

namespace restaurante_api.Controllers
{
    /**
     * MESERO
     */
    [Route("api/[controller]")]
    [ApiController]
    public class OrdenController : ControllerBase
    {
        public OrdenController()
        {
        }

        /**
         * Endpoint para crear una orden
         * FromBody | FromHeader | FromQuery : Donde el mesero obtiene lo que pide el cliente.
         * return : Respuesta con el mensaje de la orden creada.
         */
        [HttpPost(Name = "Crear")]
        public ActionResult<Respuesta> CrearOrden([FromHeader] string nombre, [FromBody] Orden fuente)
        {
            return new Respuesta {
                Dato = $"El cliente {nombre} ha creado la orden {fuente.Plato} y extras {fuente.Extras}",
                Estado = true,
                Mensaje = "Se creó la orden"
            };
        }
    }
}
