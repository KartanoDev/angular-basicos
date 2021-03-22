import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironmam', 'Thor', 'Hulk'];

  heroeBorrado: string = '';
  borrarHeroe() {
    //console.log('Borrando...');
    this.heroeBorrado = this.heroes.shift() || '';

  }
}
