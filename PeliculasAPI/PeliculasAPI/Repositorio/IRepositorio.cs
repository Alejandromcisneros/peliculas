using PeliculasAPI.Entidades;

namespace PeliculasAPI.Repositorio
{
    public interface IRepositorio
    {
        Task<Genero> ObtenerPorId(int Id);
        List<Genero> obtenerTodosLosGeneros();
    }
}
