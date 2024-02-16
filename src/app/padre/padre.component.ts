import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  title = 'Este es el titutlo de Componente Padre';
  contador: number = 0

  sumar(){
    this.contador++
  }

  restar(){
    this.contador--
  }
}
