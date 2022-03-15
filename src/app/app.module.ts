import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';


// El uso de modulos ayuda con la carga perezosa
// Que sean cargados bajo demanda

@NgModule({
  // usualmente van componentes
  declarations: [
    AppComponent,  
  ],
  // usualmente van otros modulos
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContadorModule,
    HeroesModule,
    DbzModule
  ],
  // servicios especificos
  providers: [],
  // es un modulo principal
  bootstrap: [AppComponent]
})
export class AppModule { }
