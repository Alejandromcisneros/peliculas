import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit{
  constructor(private router: Router ){  }

  modelo: generoCreacionDTO = {nombrecito: 'Drama'}

  ngOnInit(): void {
  
  }

  guardarCambios(genero:generoCreacionDTO){
    //GUARDAR LOS CAMBIOS

      //REDIRIGE A LA HOJA GENEROS
      console.log(genero)
    this.router.navigate(['/generos']);
  }


}
