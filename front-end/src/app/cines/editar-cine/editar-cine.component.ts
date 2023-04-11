import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../formulario-cine/cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit{

  constructor(){}
  modelo: cineDTO = {nombre: "Cinepolis", latitud: 19.95380572540445, longitud : -99.53284978866577};

  ngOnInit(): void {
    
  }

  guardarCambios(cine: cineCreacionDTO){
    console.log(cine);
  }

}
