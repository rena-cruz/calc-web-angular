import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-operador',
  templateUrl: './operador.component.html',
  styleUrls: ['./operador.component.css']
})
export class OperadorComponent {
  
  @Input() valorTecla : string = "";

  @Output() digitou = new EventEmitter();

  Digitar(){
    this.digitou.emit({ tecla : this.valorTecla });
  }
}
