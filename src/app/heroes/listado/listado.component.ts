import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.sass']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Hulk', 'Capitan América'];
  heroeBorrado: string = '';

  borrarHeroe(index: number) {
    // this.heroes.
    // const indexChange = this.heroes.indexOf(key, 0);


    if (index > -1) {
      this.heroeBorrado = this.heroes[index] || '';
      this.heroes.splice(index, 1);
      }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
