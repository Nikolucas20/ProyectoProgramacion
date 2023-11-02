import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
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
import { AvatarModule } from 'ngx-avatars';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTreeModule } from '@angular/material/tree';
import { FormAlumnosComponent } from './Componentes/Forms/form-alumnos/form-alumnos.component';
import { FormCalendarioComponent } from './Componentes/Forms/form-calendario/form-calendario.component';
import { FormFormaPagoComponent } from './Componentes/Forms/form-forma-pago/form-forma-pago.component';
import { FormLoginComponent } from './Componentes/Forms/form-login/form-login.component';
import { FormMateriaComponent } from './Componentes/Forms/form-materia/form-materia.component';
import { FormPersonaComponent } from './Componentes/Forms/form-persona/form-persona.component';
import { FormProfesoresComponent } from './Componentes/Forms/form-profesores/form-profesores.component';
import { FormTipoUsuarioComponent } from './Componentes/Forms/form-tipo-usuario/form-tipo-usuario.component';
import { FormTutoriaComponent } from './Componentes/Forms/form-tutoria/form-tutoria.component';

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
    TipoUsuarioComponent,
    FormAlumnosComponent,
    FormCalendarioComponent,
    FormFormaPagoComponent,
    FormLoginComponent,
    FormMateriaComponent,
    FormPersonaComponent,
    FormProfesoresComponent,
    FormTipoUsuarioComponent,
    FormTutoriaComponent
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    HttpClientModule,
    AvatarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
