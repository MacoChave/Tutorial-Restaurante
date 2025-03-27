using MongoDB.Bson;
using MongoDB.Driver;
using restaurante_api.Models;

namespace restaurante_api.Services
{
    interface IInventarioService
    {
        List<Inventario> GetAll();
        Inventario Get(string id);
        Inventario Create(Inventario inventario);
        void Update(string id, Inventario inventarioIn);
        void Remove(string id);
    }

    public class InventarioService : IInventarioService
    {
        private readonly IMongoCollection<Inventario> _inventario;

        public InventarioService(IConfiguration configuration)
        {
            var client = new MongoClient(configuration.GetConnectionString("DefaultConnection"));
            var database = client.GetDatabase("RestauranteDb");

            _inventario = database.GetCollection<Inventario>("Inventario");
        }

        public List<Inventario> GetAll() =>
            _inventario.Find(inventario => true).ToList();

        public Inventario Get(string id) =>
            _inventario.Find<Inventario>(inventario => inventario._id == id).FirstOrDefault();

        public Inventario Create(Inventario inventario)
        {
            inventario._id = ObjectId.GenerateNewId().ToString();
            _inventario.InsertOne(inventario);
            return inventario;
        }

        public void Update(string id, Inventario inventarioIn)
        {
            inventarioIn._id = id;
            _inventario.ReplaceOne(inventario => inventario._id == id, inventarioIn);
        }

        public void Remove(string id) =>
            _inventario.DeleteOne(inventario => inventario._id == id);   
    }
}
