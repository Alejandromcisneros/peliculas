    using PeliculasAPI.Entidades;

namespace PeliculasAPI.Repositorio
{
    public class RepositorioEnMemoria: IRepositorio
    {
        private List<Genero> _generos;
        public RepositorioEnMemoria()
            {
                _generos = new List<Genero>()
                {
                    new Genero() {Id = 1, Nombre = "Comedia"},
                    new Genero() {Id = 2, Nombre = "Accion"},
                    new Genero() {Id = 3, Nombre = "Drama"}
                };

            }

        public List<Genero> obtenerTodosLosGeneros() 
        {
            return _generos;
        }

        public async Task<Genero> ObtenerPorId (int Id)
        { 
            await Task.Delay(1);
                return _generos.FirstOrDefault(x => x.Id == Id);

        }

    }
}
