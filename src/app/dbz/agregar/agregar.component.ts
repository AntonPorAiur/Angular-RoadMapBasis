import { Component, Input, Output } from '@angular/core';
// import { EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.sass']
})
export class AgregarComponent {

  @Input('nuevo') nuevo:Personaje = {nombre: '', poder: 0};
  // @Input() personajes: Personaje[] = [];
  // @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter();

  constructor( private dbzService: DbzService){};

  // this.nuevo = {
  //   nombre: '',
  //   poder: 0,
  // }

  // Puede haber ocasiones donde quiere encapsular los componentes
  // Que procesen la info pero emitan la informacion o lo procesado
  // En este caso el nuevo personaje creado, propagar la info a otro componente
  // Al componente padre, quien es quien controla 
  agregar() {
    // console.log(this.nuevo);
    if(this.nuevo.nombre.trim().length === 0) {
      return;
    }

    // this.onNewCharacter.emit( this.nuevo ); 
    // this.personajes.push(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {nombre: '', poder: 0}
  }

}
