import { Component } from '@angular/core';
import { ListadoComponent } from '../../heroes/listado/listado.component';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent {

  constructor( private dbzService: DbzService) {
    // Aqui se genera la inyección de dependencias
    // this.personajes = this.dbzService.personajes;
  }

  // get personajes():Personaje[] {
  //   return this.dbzService.personajes;
  // }

  // personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 100,
  }

  // agregarNuevoPersonaje( argumento:Personaje ) {
  //   console.log(`on main page...`);
  //   // this.personajes.push(argumento);
  // }
  
  cambiarNombre( event: any) {
    console.log(event.target.value);
    // console.log(this.nuevo);
  }

}
