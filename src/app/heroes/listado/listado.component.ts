import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string = "";
  listHeroeBorrado: string[] = [];

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    this.listHeroeBorrado.unshift(this.heroeBorrado)
  }

}
