using PeliculasAPI.Entidades;

namespace PeliculasAPI.Repositorio
{
    public interface IRepositorio
    {
        Guid obtenerGUID();
        Task<Genero> ObtenerPorId(int Id);
        List<Genero> obtenerTodosLosGeneros();
    }
}
