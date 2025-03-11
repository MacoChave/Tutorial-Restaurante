using Newtonsoft.Json;

namespace restaurante_api.Models
{
    public class Cliente
    {
        [JsonProperty("nombre", NullValueHandling = NullValueHandling.Ignore)]
        public string Nombre;

        [JsonProperty("telefono", NullValueHandling = NullValueHandling.Ignore)]
        public string Telefono;
    }
}
