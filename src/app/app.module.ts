import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PrimeraseccionComponent } from './primeraseccion/primeraseccion.component';
import { SegundaseccionComponent } from './segundaseccion/segundaseccion.component';
import { SeccionnosotrosComponent } from './seccionnosotros/seccionnosotros.component';
import { SeccionobjetivoppalComponent } from './seccionobjetivoppal/seccionobjetivoppal.component';
import { SecciontestimoniosComponent } from './secciontestimonios/secciontestimonios.component';
import { SeccioninscripcionComponent } from './seccioninscripcion/seccioninscripcion.component';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PrimeraseccionComponent,
    SegundaseccionComponent,
    SeccionnosotrosComponent,
    SeccionobjetivoppalComponent,
    SecciontestimoniosComponent,
    SeccioninscripcionComponent,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
