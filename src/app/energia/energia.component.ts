import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-energia',
  templateUrl: './energia.component.html',
  styleUrls: ['./energia.component.css']
})
export class EnergiaComponent {

  @Output() ligada = new EventEmitter();

  constructor() { }

  Ligar(calculadoraLigada : boolean){
    this.ligada.emit({ligada : calculadoraLigada});
  }
}
