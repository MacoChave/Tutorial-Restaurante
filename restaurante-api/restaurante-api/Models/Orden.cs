namespace restaurante_api.Models
{
    public class Orden
    {
        public required string Plato { get; set; }
        public List<string>? Extras { get; set; }
    }
}
