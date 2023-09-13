import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudiantesComponent } from './Componentes/estudiantes/estudiantes.component';
import { ProfesoresComponent } from './Componentes/profesores/profesores.component';
import { TutoriaComponent } from './Componentes/tutoria/tutoria.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './Componentes/menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CalendarioComponent } from './Componentes/calendario/calendario.component';
import { FormaPagoComponent } from './Componentes/forma-pago/forma-pago.component';
import { LoginComponent } from './Componentes/login/login.component';
import { MateriaComponent } from './Componentes/materia/materia.component';
import { PersonaComponent } from './Componentes/persona/persona.component';
import { TipoUsuarioComponent } from './Componentes/tipo-usuario/tipo-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    ProfesoresComponent,
    TutoriaComponent,
    MenuComponent,
    CalendarioComponent,
    FormaPagoComponent,
    LoginComponent,
    MateriaComponent,
    PersonaComponent,
    TipoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
