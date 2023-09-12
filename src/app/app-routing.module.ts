import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesComponent } from './Componentes/estudiantes/estudiantes.component';
import { ProfesoresComponent } from './Componentes/profesores/profesores.component';
import { TutoriaComponent } from './Componentes/tutoria/tutoria.component';

const routes: Routes = [
  {path:"Estudiantes", component:EstudiantesComponent},
  {path:"Profesores", component:ProfesoresComponent},
  {path:"Tutoria", component:TutoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
