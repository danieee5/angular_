import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importar HttpClient para hacer peticiones HTTP

@Injectable({
  providedIn: 'root'
})

export class RecursosService {

  constructor(private http: HttpClient) { } //llamarlo en el constructor

  //Crear un método, en este caso, para obtener los datos de la API, en este caso de Firebase.
  obtenerDatos() {
    return this.http.get('https://dawm-fiec-espol-default-rtdb.firebaseio.com/photos.json')
  }
}
