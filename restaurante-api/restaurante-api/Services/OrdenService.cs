namespace restaurante_api.Services
{
    interface IOrdenService
    {
        public dynamic CrearOrden(string name);
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
        public OrdenService()
        {
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

        public dynamic CrearOrden(string name)
        {
            throw new NotImplementedException();
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
