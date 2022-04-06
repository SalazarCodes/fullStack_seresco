import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarProfesoresComponent } from './components/listar-profesores/listar-profesores.component';
import { ProfesorService } from './services/profesor.service';
import { AddProfesoresComponent } from './components/add-profesores/add-profesores.component';
import { RouterModule } from '@angular/router';
import { EditProfesoresComponent } from './components/edit-profesores/edit-profesores.component';
import { AddEstudiantesComponent } from './components/add-estudiantes/add-estudiantes.component';
import { ListarEstudiantesComponent } from './components/listar-estudiantes/listar-estudiantes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { EditEstudiantesComponent } from './components/edit-estudiantes/edit-estudiantes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarProfesoresComponent,
    AddProfesoresComponent,
    EditProfesoresComponent,
    AddEstudiantesComponent,
    ListarEstudiantesComponent,
    EditEstudiantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [ProfesorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
