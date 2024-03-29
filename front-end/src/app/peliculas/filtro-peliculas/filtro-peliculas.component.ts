import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit{

    constructor(private formBuilder: FormBuilder,
                private location : Location,
                private activatedRoute: ActivatedRoute){}

form: FormGroup

  generos = [
    {id: 1, nombre: 'Amor'},
    {id: 2, nombre: 'Drama'},
    {id: 3, nombre: 'Accion'},
    {id: 4, nombre: 'Infantil'},
  ];

  peliculas = [
    {titulo: 'Spider-man', enCines: false, proximosEstrenos: true, generos:[1,3], poster : 'https://m.media-amazon.com/images/M/MV5BN2MyZjc3ODAtODhmYy00YzI5LTgyZTQtMWM1NzQ0MGVjMzFhXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_FMjpg_UX1000_.jpg'},
    {titulo: 'Moana', enCines: true, proximosEstrenos: false, generos:[3,4], poster : 'https://m.media-amazon.com/images/I/91R8UTUu7FL.jpg'},
    {titulo: 'Minions', enCines: false, proximosEstrenos: true, generos:[4], poster : 'https://m.media-amazon.com/images/I/71IH5WQD5wL._AC_SY679_.jpg'},
    {titulo: 'El precio del Mañana', enCines: true, proximosEstrenos: false, generos:[2,4], poster : 'http://www.lacajadeandy.com/wp-content/uploads/2021/03/in-time.jpg'}

  ]

  peliculasOriginal = this.peliculas;

  formularioOriginal = {
    titulo : '',
    generoId : 0,
    proximosEstrenos : false,
    enCines : false
  };

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioOriginal);
    this.leerValoresURL();
    this.buscarPeliculas(this.form.value);

    this.form.valueChanges
    .subscribe(valores => {
      this.peliculas = this.peliculasOriginal;
      this.buscarPeliculas(valores);
      this.escribirParametrosBusquedaenURL();
    })
  }

    private leerValoresURL(){
      this.activatedRoute.queryParams.subscribe((params) =>{
        var objeto : any = {};

          if (params.titulo){
              objeto.titulo = params.titulo;
          }
          if (params.generoId){
            objeto.generoId = Number(params.generoId);
          }
          if (params.proximosEstrenos){
            objeto.proximosEstrenos = params.proximosEstrenos;
          }
          if (params.enCines){
            objeto.enCines = params.enCines;
          }
          this.form.patchValue(objeto);

      });
    }

    private escribirParametrosBusquedaenURL(){
      var queryStrings =[];

      var valoresFormulario = this.form.value;
      

        if (valoresFormulario.titulo){   
          queryStrings.push(`titulo=${valoresFormulario.titulo}`);
        }

        if(valoresFormulario.generoId !='0'){
          queryStrings.push(`generoId=${valoresFormulario.generoId}`);
        }
        
        if(valoresFormulario.proximosEstrenos){
          queryStrings.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`);
        }

        if(valoresFormulario.enCines){
          queryStrings.push(`enCines=${valoresFormulario.enCines}`);
        }

        this.location.replaceState('peliculas/buscar', queryStrings.join('&'));

    }


  buscarPeliculas(valores: any){
      if (valores.titulo){
        this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !==-1);
      }

      if (valores.generoId !== 0){
        this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !==-1);
      }
      if (valores.proximosEstrenos){
        this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos);
      }
      if (valores.enCines){
        this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines);
      }

  }

  limpiar(){
    this.form.patchValue(this.formularioOriginal);
  }

}
