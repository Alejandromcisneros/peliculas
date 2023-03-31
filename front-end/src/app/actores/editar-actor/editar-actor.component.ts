import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit{

  constructor(private activateRoute: ActivatedRoute) { }

  modelo: actorDTO = {nombre: 'AJMC', fechaNacimiento : new Date(), foto: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/15/29/showbiz-adam-copeland.jpg'}


  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      //LA ALERTA SE MUESTRA PARA SABER EL ID QUE SE ESTA PONIENDO EN LA URL
      //alert(params.id);
    })
  }

  guardarCambios(actor : actorCreacionDTO){
    console.log(actor);
  }

}
