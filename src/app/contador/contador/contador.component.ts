import { SelectorContext } from '@angular/compiler';
import { Component } from '@angular/core';


@Component({
  selector: 'app-contador',
  template: `
    <h3> {{ tittle }}</h3>

    <p>La base es: <span>{{base}}</span></p>

    <button (click)="acumular(base)">+ 1</button>

    <span>{{ numero }}</span>

    <button (click)="acumular(-base)">- 1</button>
  `,

})
export class ContadorComponent {

  tittle: string = 'Contador App';

  numero: number = 10;

  base: number = 5;

  acumular( valor: number) { // Ela rgumento no hace una transformacion
    this.numero += valor;
  }

  sumOne() {
    this.numero += 1;
  }

  restOne() {
    this.numero -= 1;
  }
}