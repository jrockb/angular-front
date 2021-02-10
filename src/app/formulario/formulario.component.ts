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
  }

  // metodo que crea un objeto de tipo Persona, llama al personaService para agregarlo
  // y luego navega al path personas
  onGuardarPersona(){
    const personaAGuardar = new Persona(this.idPersona, this.nombreInput); // objeto de tipo Persona
    this.personaService.agregarPersona(personaAGuardar);
    this.router.navigate(['personas']);
  }

}
