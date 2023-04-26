import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit{
  ngOnInit(): void {
  
     this.peliculasEnCines  = [{
       titulo : 'Spider-Man',
       fechaEstreno : new Date(),
       precioBoleto : 15.99,
       poster: 'https://lumiere-a.akamaihd.net/v1/images/marvelspidermanseries-emeagrid_45274dc0.jpeg?region=240,0,480,480'
     },
     {
      titulo : 'Minions',
       fechaEstreno : new Date('12-11-23'),
       precioBoleto : 80,
       poster: 'https://m.media-amazon.com/images/I/71IH5WQD5wL._AC_SY445_.jpg'
     }]
   }
   
   title = 'AL VALOR QUE YO QUIERA'; 
 
   peliculasEnCines;
 
   peliculasProximosEstrenos = [{
    titulo : 'Sin Limite',
     fechaEstreno : new Date(),
     precioBoleto : 12.66,
     poster: "https://m.media-amazon.com/images/I/7170GPXbWKL._AC_SY445_.jpg"
   },
   {
    titulo : 'Jurassic World',
     fechaEstreno : new Date('10-01-23'),
     precioBoleto : 120,
     poster: 'https://m.media-amazon.com/images/I/51vvY5E-1wL._SX421_BO1,204,203,200_.jpg'
   },
   {
    titulo : 'No respires',
     fechaEstreno : new Date('10-01-23'),
     precioBoleto : 120,
     poster: 'https://es.web.img2.acsta.net/c_310_420/pictures/21/08/18/13/34/2412029.jpg'
   }]
 

}
