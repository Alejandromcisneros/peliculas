import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit{
  contenidoMarkDown = '';

  @Input()
  contenidoMardown = '';

  @Input()
  placeHolderTextoArea: string = 'Texto';

  @Output()
  changeMarkdown: EventEmitter<string> = new EventEmitter<string>(); 

  constructor(){}
  
  ngOnInit(): void {
    console.log(this.contenidoMardown);
  }

  // inputTextArea(texto: string){
  //   this.contenidoMarkDown = texto;
  
  //   this.changeMarkdown.emit(texto);
  
  //   // MOSTRAR EN CONSOLA QUE ES LO QUE SE VA ESCRIBIENDO EL EL TXTAREA
  //   // console.log(texto);
  // }
 

}
