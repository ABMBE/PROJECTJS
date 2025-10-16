import { Routes } from '@angular/router';
import  {Inicio} from './pages/inicio/inicio'
import {Productos} from './pages/productos/productos'
import {Contacto } from './pages/contacto/contacto'
import { Carrito } from './pages/carrito/carrito'
import { ProducDetall } from './pages/produc-detall/produc-detall'; 


export const routes: Routes = [
    {path: '', component: Inicio},
    {path: 'productos', component: Productos},
    {path: 'produc-detall/:id', component: ProducDetall},
    {path: 'contacto', component: Contacto},
    {path: 'carrito', component: Carrito},
    {path: '**', redirectTo: ' ' }
];

