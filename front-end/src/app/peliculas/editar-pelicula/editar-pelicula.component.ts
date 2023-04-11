import { Component, OnInit } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit{
  constructor(){}

  modelo: PeliculaDTO = {titulo: "La casa de papel", trailer: 'ssabc', enCine: true, resumen: 'cosa',
  fechaLanzamiento: new Date(), poster:'https://media.vogue.mx/photos/62a90a13daa48a642f75b329/master/w_1600%2Cc_limit/la-casa-de-papel-corea-serie-de-netflix.jpg'}

  ngOnInit(): void {
    
  }
  guardarCambios(pelicula: PeliculaCreacionDTO){
    console.log(pelicula);
  }
  
}
