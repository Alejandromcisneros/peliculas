import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.css']
})
export class FormularioGeneroComponent implements OnInit{


  constructor( private formBuilder: FormBuilder){

  }

  form: FormGroup;

  @Input()
  modelo: generoCreacionDTO;

  @Output()
  onSubmit: EventEmitter<generoCreacionDTO> = new EventEmitter<generoCreacionDTO>();


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      //nombre: ''
      //crear el campo de nombre como arreglo
      nombrecito: ['', {
        //EL CAMPO ES REQUERIDO Y TIENE UNA LONGITUD MINIMA DE 1 CARACTER
    validators: [Validators.required, Validators.minLength(1), primeraLetraMayuscula()]
    }]
  });
  if(this.modelo !== undefined){
    this.form.patchValue(this.modelo);
  }
  
  }
  
  guardarCambios(){
    this.onSubmit.emit(this.form.value);
    
  }

  muestraErrorCampoNombre(){
      var campo = this.form.get('nombrecito');
    if(campo.hasError('required')){
      return 'EL CAMPO NOMBRE ES REQUERIDO';
    }
    if(campo.hasError('minLength')){
      return 'LA LONGITUD MINIMA ES DE 1 CARACTER';
    }
    if (campo.hasError('primeraLetraMayuscula')){
      return campo.getError('primeraLetraMayuscula').mensaje;
    }
    return '';
  }

}
