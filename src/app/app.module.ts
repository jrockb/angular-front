import { DataService } from './data-service';
import { PersonaService } from './persona-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // se debe declarar para inyectar el servicio
    FormsModule
  ],
  providers: [PersonaService, DataService], // definir los servicios para que se puedan usar en otras clases
  bootstrap: [AppComponent]
})
export class AppModule { }
