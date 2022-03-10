import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  // Invisible para la aplicación
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  // Que cosas quiero que sean visibles fuera de este módulo
  exports:[
    ListadoComponent
  ],
  imports: [
    // Significa que aqui dentro van modulos
    CommonModule // Importa directivas como ngIf ,ngFor
  ]
})
export class HeroesModule {

}