using Newtonsoft.Json;

namespace restaurante_api.Models
{
    public class Inventario
    {
        //[JsonProperty("_id", NullValueHandling = NullValueHandling.Ignore)]
        public string? _id { get; set; }

        //[JsonProperty("categoria", NullValueHandling = NullValueHandling.Ignore)]
        public string Categoria { get; set; }

        //[JsonProperty("nombre", NullValueHandling = NullValueHandling.Ignore)]
        public string Nombre { get; set; }

        //[JsonProperty("stock", NullValueHandling = NullValueHandling.Ignore)]
        public string Stock { get; set; }

        //[JsonProperty("unidad_medida", NullValueHandling = NullValueHandling.Ignore)]
        public string UnidadMedida { get; set; }

        //[JsonProperty("costo_unitario", NullValueHandling = NullValueHandling.Ignore)]
        public string CostoUnitario { get; set; }

    }
}
