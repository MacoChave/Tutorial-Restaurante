using Newtonsoft.Json;

namespace restaurante_api.Models
{
    public class Combos
    {
        [JsonProperty("_id", NullValueHandling = NullValueHandling.Ignore)]
        public string Id;

        [JsonProperty("nombre", NullValueHandling = NullValueHandling.Ignore)]
        public string Nombre;

        [JsonProperty("descripcion", NullValueHandling = NullValueHandling.Ignore)]
        public string Descripcion;

        [JsonProperty("productos", NullValueHandling = NullValueHandling.Ignore)]
        public List<Producto> Productos;

        [JsonProperty("precio", NullValueHandling = NullValueHandling.Ignore)]
        public string Precio;
    }
}
