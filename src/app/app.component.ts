import { Component } from '@angular/core';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { TablaComponent } from './shared/tabla/tabla.component';
//import { CommonModule } from '@angular/common';


import  {RecursosService} from './servicios/recursos.service'; //importar el servicio en app
import {HttpClientModule} from '@angular/common/http'; //importar el módulo HttpClientModule para poder hacer peticiones HTTP
import {Foto} from './interfaz/foto'; //importar para ahor si usar el servicio

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactoComponent, TablaComponent, HttpClientModule], 
  providers: [RecursosService], //no se importa el servicio en imports, si no en providers
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'clienteAngular';
  fotos: Foto [] = []; //Declarar un array de tipo Foto para almacenar las fotos obtenidas del servicio 

  //Inyección de dependencias: se inyecta el servicio RecursosService en el componente AppComponent, en su constructor.
  constructor(private recursosService: RecursosService) {
    this.recursosService.obtenerDatos().subscribe((respuesta => {
      this.fotos = respuesta as Array<Foto>; 
    }));

  }
}
