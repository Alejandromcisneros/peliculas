    using PeliculasAPI.Entidades;

namespace PeliculasAPI.Repositorio
{
    public class RepositorioEnMemoria : IRepositorio
    {
        private List<Genero> _generos;
        public RepositorioEnMemoria(ILogger<RepositorioEnMemoria> logger)
        {
            _generos = new List<Genero>()
                {
                    new Genero() {Id = 1, Nombre = "Comedia"},
                    new Genero() {Id = 2, Nombre = "Accion"},
                    new Genero() {Id = 3, Nombre = "Drama"}
                };

            _guid = Guid.NewGuid(); // ES UN STRING CCFC-3123-dcdcd-e32e23

        }
        public Guid _guid;

        public List<Genero> obtenerTodosLosGeneros() 
        {
            return _generos;
        }

        public async Task<Genero> ObtenerPorId (int Id)
        { 
            await Task.Delay(1);
                return _generos.FirstOrDefault(x => x.Id == Id);

        }

        public Guid obtenerGUID()       
        {
         return _guid;
       }

    }
}
