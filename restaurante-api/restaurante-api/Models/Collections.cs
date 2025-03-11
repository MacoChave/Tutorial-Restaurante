using Newtonsoft.Json;

namespace restaurante_api.Models
{
    public class Collections
    {
        [JsonProperty("productos", NullValueHandling = NullValueHandling.Ignore)]
        public Producto Productos;

        [JsonProperty("combos", NullValueHandling = NullValueHandling.Ignore)]
        public Combos Combos;

        [JsonProperty("inventario", NullValueHandling = NullValueHandling.Ignore)]
        public Inventario Inventario;

        [JsonProperty("ventas", NullValueHandling = NullValueHandling.Ignore)]
        public Ventas Ventas;
    }
}
