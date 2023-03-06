import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit{
  ngOnInit(): void {
  
     this.peliculasEnCines  = [{
       nombre : 'Spider-Man',
       fechaEstreno : new Date(),
       precioBoleto : 15.99,
       poster: 'https://lumiere-a.akamaihd.net/v1/images/marvelspidermanseries-emeagrid_45274dc0.jpeg?region=240,0,480,480'
     },
     {
       nombre : 'Minions',
       fechaEstreno : new Date('12-11-23'),
       precioBoleto : 80,
       poster: 'https://m.media-amazon.com/images/I/71IH5WQD5wL._AC_SY445_.jpg'
     }]
   }
   
   title = 'AL VALOR QUE YO QUIERA'; 
 
   peliculasEnCines;
 
   peliculasProximosEstrenos = [{
     nombre : 'Sin Limite',
     fechaEstreno : new Date(),
     precioBoleto : 12.66
   },
   {
     nombre : 'EL PODER DE LA JUNGLA',
     fechaEstreno : new Date('10-01-23'),
     precioBoleto : 120
   },
   {
     nombre : 'Resurreccion',
     fechaEstreno : new Date('10-01-23'),
     precioBoleto : 120
   }]
 

}
