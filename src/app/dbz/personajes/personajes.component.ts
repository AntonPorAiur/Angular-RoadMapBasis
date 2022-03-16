import { Component, Input } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.sass']
})
export class PersonajesComponent {

  constructor( private dbzService: DbzService) {}
  // @Input('data') personajes: Personaje[] = [];

  get personajes() {
    return this.dbzService.personajes;
  }


}
