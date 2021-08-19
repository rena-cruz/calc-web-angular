import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-numero',
  templateUrl: './numero.component.html',
  styleUrls: ['./numero.component.css']
})
export class NumeroComponent {

  @Input() valorTecla : string = "";

  @Output() digitou = new EventEmitter();

  Digitar(){
    this.digitou.emit({ tecla : this.valorTecla });
  }
}
