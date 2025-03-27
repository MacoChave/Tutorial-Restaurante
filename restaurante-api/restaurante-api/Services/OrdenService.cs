using Microsoft.Extensions.Options;
using MongoDB.Driver;
using restaurante_api.Models;

namespace restaurante_api.Services
{
    interface IOrdenService
    {
        public dynamic CrearOrden(Ventas pedido);
        public dynamic UpdateOrden(string name);
        public dynamic DeleteOrden(string name);
        public dynamic GetOrden(string name);
        public dynamic CloseOrden(string name);
    }

    /**
     * CHEF
     */
    public class OrdenService : IOrdenService
    {
        private readonly IMongoCollection<Ventas> _pedidoCollection;

        public OrdenService(IConfiguration configuration)
        {
            var client = new MongoClient(configuration.GetConnectionString("RestauranteDb"));
            var database = client.GetDatabase("RestauranteDb");
            _pedidoCollection = database.GetCollection<Ventas>("Pedidos");
        }

        /**
         * Crea una orden nueva para un cliente
         * parametros : Datos de la orden tomada por el mesero
         * return : Respuesta con el mensaje de la orden creada.
         */
        public dynamic CloseOrden(string name)
        {
            return new { Orden = name, Fecha = DateTime.Now };
        }

        public dynamic CrearOrden(Ventas pedido)
        {
            _pedidoCollection.InsertOne(pedido);
            return new { Mensaje = "Orden creada" };
        }

        public dynamic DeleteOrden(string name)
        {
            throw new NotImplementedException();
        }

        public dynamic GetOrden(string name)
        {
            throw new NotImplementedException();
        }

        public dynamic UpdateOrden(string name)
        {
            throw new NotImplementedException();
        }
    }
}
