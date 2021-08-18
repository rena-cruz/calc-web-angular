import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { VisorComponent } from './visor/visor.component';
import { EnergiaComponent } from './energia/energia.component';
import { TecladoComponent } from './teclado/teclado.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    VisorComponent,
    EnergiaComponent,
    TecladoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
