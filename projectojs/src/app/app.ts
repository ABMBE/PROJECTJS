import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projectojs');

  nombre = "Sebastian"
  description = 'Proyecto con JS y Angular'
  resultado: string = ''

  cambiarNombre() {
    this.nombre = "Juan"
  }

  contar() {
    this.resultado = ''
    for (let i = 1; i<=10; i++){
      this.resultado += i + ' '
    }  
  }

  
  

}
