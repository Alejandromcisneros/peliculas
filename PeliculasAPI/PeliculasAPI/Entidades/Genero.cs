using PeliculasAPI.Validaciones;
using System.ComponentModel.DataAnnotations;

namespace PeliculasAPI.Entidades
{
    public class Genero : IValidatableObject
    {
        public int Id { get; set; }
        //Mensaje para que el campo NOMBRE es requerido
        [Required(ErrorMessage = "El campo {0} es requerido")]

        //El campo Nombre debe tener maximo 10 caracteres
        [StringLength(maximumLength:10)]
        //[PrimeraLetraMayuscula]   //REGLA DE VALIDACION CREADA POR ATRIBUTO
        public string Nombre { get; set;}

        //VALIDAR RANGO DE EDAD
        [Range(18, 25)]
        public int edad { get; set;}

        //VALIDAR QUE SEA UNA TARJETA DE CREDIO
        [CreditCard]
        public string tCredito { get; set;}

        [Url] 
        public string Url { get; set;}

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            if (!string.IsNullOrEmpty(Nombre))
            {
                var primeraLetraMayus = Nombre[0].ToString();

                if (primeraLetraMayus != primeraLetraMayus.ToUpper())
                {
                    yield return new ValidationResult("La primer letra debe ser Mayuscula",
                        new string[] {nameof(Nombre)});
                }

            }
           
        }
    }
}
