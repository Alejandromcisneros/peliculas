import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css']
})
export class AutocompleteActoresComponent implements OnInit{
  constructor(){}
 

  // MANEJAR UN CAMPO DE MANERA INDIVIDUAL FormControl
  control: FormControl = new FormControl();

  // ARREGLO CON LAS OPCIONES DE ACTORES BASE DE DATOS
  actores = [
    {nombre: "Adam Sandler", personaje: '', foto: "https://media.revistavanityfair.es/photos/60e839c629af8ce08356ce95/master/w_1600%2Cc_limit/197322.jpg"},
    {nombre: "Dwayne Jhonson", personaje: '', foto: "https://cbtelevision.com.mx/wp-content/uploads/2018/04/070.jpg"},
    {nombre: "Will Smith", personaje: '', foto: "https://depor.com/resizer/7FhOhQPr49u7VcmPt87WfKuZpFk=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/EPP5PFNHZZE5BBORWVFW4BV2RI.jpg"},
    {nombre: "Will Byers", personaje: '', foto: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2022/07/stranger-things-will-byers-2750639.jpg?itok=zi2NxGdK"}
  ]

  actoresOriginal = this.actores;

  actoresSeleccionados = [];

  columnasAMostrar = ['imagen', 'nombre', 'personaje', 'acciones'];

  @ViewChild(MatTable) table: MatTable<any>;

 ngOnInit(): void {
    this.control.valueChanges.subscribe(valor => {
      this.actores = this.actoresOriginal;
      this.actores = this.actores.filter(actor => actor.nombre.indexOf(valor) !== -1);
    });
  }

  optionSelected(event: MatAutocompleteSelectedEvent){
    console.log(event.option.value);
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('');
      if (this.table !== undefined){
        this.table.renderRows();
      }
  }


  eliminar(actor){
    const indice = this.actoresSeleccionados.findIndex(a => a.nombre === actor.nombre);
    this.actoresSeleccionados.splice(indice, 1);
    this.table.renderRows();
    }

    finalizaArrastre(event: CdkDragDrop<any[]>){
        const indicePrevio = this.actoresSeleccionados.findIndex(
          actor => actor === event.item.data
        )
        moveItemInArray(this.actoresSeleccionados, indicePrevio, event.currentIndex);
        this.table.renderRows();
    }
  }

