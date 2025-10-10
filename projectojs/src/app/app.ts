import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
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
