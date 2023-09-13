import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesComponent } from './Componentes/estudiantes/estudiantes.component';
import { ProfesoresComponent } from './Componentes/profesores/profesores.component';
import { TutoriaComponent } from './Componentes/tutoria/tutoria.component';
import { PersonaComponent } from './Componentes/persona/persona.component';
import { CalendarioComponent } from './Componentes/calendario/calendario.component';
import { LoginComponent } from './Componentes/login/login.component';
import { TipoUsuarioComponent } from './Componentes/tipo-usuario/tipo-usuario.component';
import { MateriaComponent } from './Componentes/materia/materia.component';
import { FormaPagoComponent } from './Componentes/forma-pago/forma-pago.component';

const routes: Routes = [
  {path:"Estudiantes", component:EstudiantesComponent},
  {path:"Profesores", component:ProfesoresComponent},
  {path:"Tutoria", component:TutoriaComponent},
  {path:"Personas", component:PersonaComponent},
  {path:"Calendario", component:CalendarioComponent},
  {path:"Login", component:LoginComponent},
  {path:"Tipo_Usuario", component:TipoUsuarioComponent},
  {path:"Materias", component:MateriaComponent},
  {path:"FormaPago", component:FormaPagoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
