// EXTRAER DE LA BASE DE DATOS LOS DATOS DEL ACTOR Y LA FOTO SE EXTRAE LA URL
export interface actorDTO{
    nombre : string;
    fechaNacimiento : Date;
    foto : string;
}

export interface actorCreacionDTO{
    nombre : string;
    fechaNacimiento : Date;
    foto : File;
}