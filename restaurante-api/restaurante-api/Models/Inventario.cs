namespace restaurante_api.Models
{
    public class Inventario
    {
        [JsonProperty("_id", NullValueHandling = NullValueHandling.Ignore)]
        public string Id;

        [JsonProperty("categoria", NullValueHandling = NullValueHandling.Ignore)]
        public string Categoria;

        [JsonProperty("nombre", NullValueHandling = NullValueHandling.Ignore)]
        public string Nombre;

        [JsonProperty("stock", NullValueHandling = NullValueHandling.Ignore)]
        public string Stock;

        [JsonProperty("unidad_medida", NullValueHandling = NullValueHandling.Ignore)]
        public string UnidadMedida;

        [JsonProperty("costo_unitario", NullValueHandling = NullValueHandling.Ignore)]
        public string CostoUnitario;
    }
}
