import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent {

  @Input() personajes: Personaje[] = [
    {
      nombre: 'Goku', 
      poder: 15000
    }, 
    {
      nombre: 'Vegeta', 
      poder: 7500
    }, 
  ];

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  agregarNuevoPersonaje( argumento: Personaje ){
    this.personajes.push(argumento);
  }

}
