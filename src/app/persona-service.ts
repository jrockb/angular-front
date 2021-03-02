import { DataService } from './data-service';
import { Persona } from './persona.model';
import { Injectable } from '@angular/core';

/**
 * Administrar el arreglo de personas que se va a utilizar para desplegar esta información
 * en la vista de Angular
 */
@Injectable() // esta clase será un servicio
export class PersonaService {

  personas: Persona[] = []; // arreglo inicializado con 0 elementos

  constructor( private dataService: DataService) {} // ya se puede acceder al servicio dataservice

  // se usa para modificar el valor del arreglo debido a la llamada asincrona
  setPersonas(personas: Persona[]) {
    this.personas = personas;
  }

  obtenerPersonas() {
    return this.dataService.cargarPersonas();
  }

  agregarPersona(persona: Persona) {
    console.log('Persona a agregar: ' + persona.nombre );
    this.dataService.agregarPersonas(persona).subscribe(
      (persona: Persona) => { // recuperamos el objeto persona con el id persona recien agregado
        console.log('Se agrega al arreglo la persona recien insertada subscriber: ' + persona.idPersona);
        this.personas.push(persona);
      });
  }

  encontrarPersonas(id: number) {
    const persona: Persona = this.personas.find(persona => persona.idPersona == id);
    console.log('persona encontrada: ' + persona.idPersona + ' ' + persona.nombre );
    return persona;
  }

  modificarPersona(id: number, persona: Persona){
    console.log('persona a modificar: ' + persona.idPersona);
    // se actualiza el objeto de persona del arreglo
    const personaModificadaLocal = this.personas.find( persona => persona.idPersona == id);
    personaModificadaLocal.idPersona = persona.idPersona;
    personaModificadaLocal.nombre = persona.nombre;
    // guardar el arreglo de la persona en la base de datos
    this.dataService.modificarPersona(id, persona);
  }

  eliminarPersona(id: number){
    console.log('eliminar persona con id: ' + id);
    // se necesita eliminar el objeto persona del arreglo y del objeto recibido
    const index = this.personas.findIndex(persona => persona.idPersona == id);
    this.personas.splice(index, 1);
    this.dataService.eliminarPersona(id);
  }

}
