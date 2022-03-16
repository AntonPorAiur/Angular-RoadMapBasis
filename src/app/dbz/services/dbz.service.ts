import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

// El manejo y modificacion de la data deberia moverse a capa de servicio
@Injectable()
export class DbzService {
  
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 16000
    },
    {
      nombre: 'Vegeta',
      poder: 8000
    }
  ];

  get personajes():Personaje[] {
    return [...this._personajes]; // retorna una copia del array
  }

  agregarPersonaje( argumento:Personaje ) {
    console.log(`on main page...`);
    this._personajes.push(argumento);
  }

  constructor() {}

}