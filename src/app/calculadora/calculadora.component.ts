import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  readonly TAMANHO_MAXIMO_VISOR : number = 16;

  ligado : boolean = false;
  listaOperacoes : string[] = [];
  limparVisor : boolean = false;

  valorVisor : string | null;

  constructor() {
    this.valorVisor = null;
   }

  StatusCalculadora(evento : any){
    if (evento.ligada) {
      this.LigarCalc();
    }else{
      this.DesligarCalc();
    }
  }

  LigarCalc(){
    this.ligado = true;
    this.valorVisor = "0";
  }

  DesligarCalc(){
    this.ligado = false;
    this.listaOperacoes = [];
    this.valorVisor = null;
  }

  DigitouTecla(evento : any){

    if(!this.ligado) { return; }

    if (evento.tipo == "numero") {
      this.RecebendoNumero(evento.valorDigitado);

    }else if (evento.tipo == "operador") {
      this.RecebendoOperador(evento.valorDigitado);

    }else if (evento.tipo == "ponto") {
      this.RecebendoPonto();
      
    }else if (evento.tipo == "igual") {
      this.RecebendoIgual();     
    }
  }

  RecebendoNumero(numeroDigitado : string){

    this.valorVisor = this.valorVisor??"0";
    
    if(this.valorVisor.length >= this.TAMANHO_MAXIMO_VISOR){ return; }

    if (this.limparVisor) {
      this.valorVisor = numeroDigitado;
      this.limparVisor = false;
    }else{
      this.valorVisor += numeroDigitado;
    }
    this.valorVisor = this.valorVisor??"0";
    this.valorVisor = this.RemoverZerosEsquerda(this.valorVisor.replace(',','.')).replace('.',',');
  }

  RemoverZerosEsquerda(valorAtualVisor : string){
    let valorNumericoVisor = parseFloat(valorAtualVisor);
    return valorNumericoVisor.toString();
  }

  RecebendoOperador(operadorDigitado : string){

    this.valorVisor = this.valorVisor??"0";

    this.listaOperacoes.push(this.valorVisor.replace(',','.'));
    this.listaOperacoes.push(operadorDigitado);
    this.limparVisor = true; 
  }

  RecebendoPonto(){

    this.valorVisor = this.valorVisor??"0";

    if(this.valorVisor.length >= this.TAMANHO_MAXIMO_VISOR){ return; }
    this.valorVisor += ",";
  }

  RecebendoIgual(){

    this.valorVisor = this.valorVisor??"0";

    this.listaOperacoes.push(this.valorVisor.replace(',','.'));

    let primeiroOperando : number | null = null;
    let Operador : string = "";
    let segundoOperando : number | null = null;
    for (let i = 0; i < this.listaOperacoes.length; i++) {
        if (i%2==0) {
            if (primeiroOperando === null) {
                primeiroOperando = parseFloat(this.listaOperacoes[i]);  
            }else{
                segundoOperando = parseFloat(this.listaOperacoes[i]); 
            }
        }else{
            Operador = this.listaOperacoes[i];
        }

        if (primeiroOperando !== null && segundoOperando !== null) {
            switch (Operador) {
                case '+':
                    primeiroOperando = primeiroOperando + segundoOperando;
                    segundoOperando = null;
                    break;
                case '-':
                    primeiroOperando = primeiroOperando - segundoOperando;
                    segundoOperando = null;
                    break;
                case '*':
                    primeiroOperando = primeiroOperando * segundoOperando;
                    segundoOperando = null;
                    break;
                case '/':
                    primeiroOperando = primeiroOperando / segundoOperando;
                    segundoOperando = null;
                    break;
                default:
                    break;
            }
        }
    }

    primeiroOperando = primeiroOperando??0;

    this.valorVisor = primeiroOperando.toString().replace('.',',');
    this.listaOperacoes = [];
  }

}
