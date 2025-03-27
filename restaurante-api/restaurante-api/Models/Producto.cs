using Newtonsoft.Json;

namespace restaurante_api.Models
{
    public class Producto
    {
        [JsonProperty("_id", NullValueHandling = NullValueHandling.Ignore)]
        public string Id;

        [JsonProperty("producto_id", NullValueHandling = NullValueHandling.Ignore)]
        public string ProductoId;

        [JsonProperty("cantidad", NullValueHandling = NullValueHandling.Ignore)]
        public string Cantidad;

        [JsonProperty("precio_unitario", NullValueHandling = NullValueHandling.Ignore)]
        public string PrecioUnitario;

        [JsonProperty("nombre", NullValueHandling = NullValueHandling.Ignore)]
        public string Nombre;

        [JsonProperty("tipo", NullValueHandling = NullValueHandling.Ignore)]
        public string Tipo;

        [JsonProperty("precio", NullValueHandling = NullValueHandling.Ignore)]
        public string Precio;

        [JsonProperty("stock", NullValueHandling = NullValueHandling.Ignore)]
        public string Stock;

        [JsonProperty("detalles", NullValueHandling = NullValueHandling.Ignore)]
        public Detalles Detalles;
    }
}
