namespace restaurante_api.Models
{
    public class Detalles
    {
        [JsonProperty("carne", NullValueHandling = NullValueHandling.Ignore)]
        public string Carne;

        [JsonProperty("termino", NullValueHandling = NullValueHandling.Ignore)]
        public string Termino;

        [JsonProperty("guarniciones", NullValueHandling = NullValueHandling.Ignore)]
        public List<string> Guarniciones;

        [JsonProperty("porciones_extra", NullValueHandling = NullValueHandling.Ignore)]
        public string PorcionesExtra;

        [JsonProperty("capacidad", NullValueHandling = NullValueHandling.Ignore)]
        public string Capacidad;
    }
}
