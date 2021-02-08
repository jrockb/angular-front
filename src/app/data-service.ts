import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Persona } from './persona.model';
/**
 *  clase que va a conectarse a los ws de Java
 */
@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {}

  urlBase = 'http://localhost:8080/persona-backend-java/webservice'; // url del servicio expuesto por Java

  // metodo que hará una llamada GET al ws para traer el listado de personas
  cargarPersonas() {
    return this.httpClient.get(this.urlBase);
  }

  agregarPersonas(persona: Persona) {
    return this.httpClient.post(this.urlBase, persona);
  }

  modificarPersona(idPersona: number, persona: Persona) {
    let url: string;
    url = this.urlBase + '/' + idPersona;
    this.httpClient.put(url, persona)
    .subscribe((response) => { // necesita suscribirse porque va a recibir un objeto
      console.log('resultado modificar persona: ' + response); // caso exitoso
    },
    (error) => {
      console.log('error en modificar persona: ' + error); // caso fallido
    });
  }

  eliminarPersona(idPersona: number) {
    let url: string;
    url = this.urlBase + '/' + idPersona;
    this.httpClient.delete(url)
    .subscribe((response) => {
      console.log('resultado eliminar persona: ' + response);
    },
    (error) => {
      console.log('error en eliminar persona: ' + error);
    });
  }

}
