import { Component } from '@angular/core';
import { ListadoComponent } from '../../heroes/listado/listado.component';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 100,
  }

  personajes: Personaje[] = [
    {nombre: 'Goku',
    poder: 16000},
    {
      nombre: 'Vegeta',
      poder: 8000
    }
  ];

  agregarNuevoPersonaje( argumento:Personaje ) {
    console.log(`on main page...`);
    this.personajes.push(argumento);
  }
  
  cambiarNombre( event: any) {
    console.log(event.target.value);
    // console.log(this.nuevo);
  }

}
