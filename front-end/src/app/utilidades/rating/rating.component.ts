import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input()
  maximoRating = 5;

  @Input()
  ratingSeleccionado = 0;

  @Output()
  rated: EventEmitter<number> = new EventEmitter<number>(); 

  maximoRatingArreglo = [];
  votado = false;
  raitingAnterior;


  constructor() {}

  ngOnInit(): void {
    this.maximoRatingArreglo = Array(this.maximoRating).fill(0);

  }
  manejarMouseEnter(index: number): void {
    this.ratingSeleccionado = index + 1;

  }
  manejarMouseLeave(){
     if(this.raitingAnterior !== 0 ){
      this.ratingSeleccionado = this.raitingAnterior;
     }else{
      this.ratingSeleccionado = 0;
     }
  }

  rate(index: number): void {
    this.ratingSeleccionado = index + 1;
    this.votado = true;
    this.raitingAnterior = this.ratingSeleccionado;
    this.rated.emit(this.ratingSeleccionado);
    }

}
