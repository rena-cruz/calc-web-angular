import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.css']
})
export class TecladoComponent {

  @Output() digitou = new EventEmitter();

  Digitar(tipoTecla : string, tecla : string = ""){
    this.digitou.emit({
      tipo : tipoTecla, 
      valorDigitado : tecla
    });
  }

  NumeroClicado(evento : any){
    this.Digitar("numero", evento.tecla)
  }

  OperadorClicado(evento : any){
    if (evento.tecla == "=") {
      this.Digitar("igual");     
    }else if (evento.tecla == ",") {
      this.Digitar("ponto");
    }else{
      this.Digitar("operador", evento.tecla);
    }   
  }
}
