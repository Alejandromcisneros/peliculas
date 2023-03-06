import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent implements OnInit{
  constructor(private router: Router){

  }


  ngOnInit(): void {
  }
  guardarCambios(){
    //GUARDAR LOS CAMBIOS

      //REDIRIGE A LA HOJA GENEROS
    this.router.navigate(['/generos'])
  }

}
