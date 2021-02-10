import { FormularioComponent } from './formulario/formulario.component';
import { PersonasComponent } from './personas/personas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: PersonasComponent}, // ruta por defecto que muestra PersonasComponent
  { path: 'personas', component: PersonasComponent, children: [
    { path: 'agregar', component: FormularioComponent} // agrega dentro de personas
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
