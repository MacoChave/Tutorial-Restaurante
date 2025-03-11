using System.Security.Principal;

namespace restaurante_api.Models
{
    public class Ventas
    {
        [JsonProperty("_id", NullValueHandling = NullValueHandling.Ignore)]
        public string Id;

        [JsonProperty("fecha", NullValueHandling = NullValueHandling.Ignore)]
        public string Fecha;

        [JsonProperty("productos", NullValueHandling = NullValueHandling.Ignore)]
        public List<Producto> Productos;

        [JsonProperty("total", NullValueHandling = NullValueHandling.Ignore)]
        public string Total;

        [JsonProperty("cliente", NullValueHandling = NullValueHandling.Ignore)]
        public Cliente Cliente;
    }
}
