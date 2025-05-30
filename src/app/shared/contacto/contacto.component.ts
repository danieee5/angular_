import { Component } from '@angular/core';


@Component({
  selector: 'app-contacto',
  standalone: true,
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  titulo: string = 'Contacto';

  medios: any[] = [
    { texto: "En Twitter" },
    { texto: "En Facebook" },
    { texto: "Por correo electrónico" }
  ];
}
