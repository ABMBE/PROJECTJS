import { Component } from '@angular/core';
//import { NgClass, NgIf } from "../../../../node_modules/@angular/common/common_module.d";
import { NgIf } from '@angular/common';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-inicio',
  imports: [NgIf, RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {

  titulo = "Bienvenidos a COMPUSERVIX!";
  destacado = {nombre: "Mouse Gamer", descripcion: "Mouse Gamer RGB 16000 DPI", precio: 29.99, imagen: "assets/img/mouse.jpg"};
  inicio = {
    nombre: "Los mejores precios",
    descripcion: "Encuentra las mejores ofertas en laptops, componentes y perifericos",
    imagen: "assets/img/inicio.jpg"
  }

  comprar(){
    console.log('Ir a productos');
  }
}
