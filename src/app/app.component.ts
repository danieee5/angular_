import { Component } from '@angular/core';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { TablaComponent } from './shared/tabla/tabla.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactoComponent, TablaComponent], // Asegúrate de incluir TablaComponent
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clienteAngular';
}