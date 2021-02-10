import { PersonaService } from './../persona-service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Persona } from '../persona.model';

/**
 *  Componente que se va a encargar de desplegar el listado de personas y del crud
 *  apoyandose del componente formulario
 */
@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styles: []
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  // en TypeScript el constructor define los atributos de la clase
  constructor(private personaService: PersonaService,
              private router: Router, // para poder cambiar al formulario
              private route: ActivatedRoute) { }

  // las llamadas son asíncronas, así que una vez que se llama el ngOnInit se inicializa el arreglo de personas
  ngOnInit(): void { // inicializar el arreglo de personas
    this.personaService.obtenerPersonas().subscribe( // como en el dataService no hay
      // un subscriber se necesita crear para suscribirse hasta el momento en que se
      // necesite recuperar el arreglo de personas
      (personasObtenidas: Persona[]) => {
        // cargar los datos de personas obtenidos en el arreglo local
        this.personas = personasObtenidas; // copia del arreglo que se ha inicializado
        this.personaService.setPersonas(this.personas);
        console.log('Personas obtenidas del subscriber: ' + this.personas);
      });
  }

  irAgregar() {
    console.log('ir a agregar persona');
    this.router.navigate(['./personas/agregar']);
  }

}
