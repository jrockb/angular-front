import { PersonaService } from './../persona-service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: []
})
export class FormularioComponent implements OnInit {

  idPersona: number;

  nombreInput: string;

  constructor(private personaService: PersonaService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.idPersona = this.route.snapshot.params.idPersona; // obtener el parametro del componente personasComponent
    console.log('Recuperamos el parametro idPersona: ' + this.idPersona);
    if (this.idPersona != null) {
      const persona = this.personaService.encontrarPersonas(this.idPersona);
      if ( persona != null) {
        this.nombreInput = persona.nombre;
      }
    }
  }

  // metodo que crea un objeto de tipo Persona, llama al personaService para agregarlo
  // y luego navega al path personas
  onGuardarPersona() {
    const personaAGuardar = new Persona(this.idPersona, this.nombreInput); // objeto de tipo Persona
    if (this.idPersona != null){
      this.personaService.modificarPersona(this.idPersona, personaAGuardar);
    } else {
      this.personaService.agregarPersona(personaAGuardar);
    }
    this.router.navigate(['personas']); // Despues de guardar se navega al listado de personas
  }

  onEliminarPersona(){
    if (this.idPersona != null){
      console.log('persona a eliminar: ' + this.idPersona);
      this.personaService.eliminarPersona(this.idPersona);
    }
    this.router.navigate(['personas']);
  }

}
