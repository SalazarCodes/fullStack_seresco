import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProfesoresComponent } from './components/listar-profesores/listar-profesores.component';
import { AddProfesoresComponent } from './components/add-profesores/add-profesores.component';
import { EditProfesoresComponent } from './components/edit-profesores/edit-profesores.component';
import { AddEstudiantesComponent } from './components/add-estudiantes/add-estudiantes.component';
import { ListarEstudiantesComponent } from './components/listar-estudiantes/listar-estudiantes.component';
import { EditEstudiantesComponent } from './components/edit-estudiantes/edit-estudiantes.component';

const routes: Routes = [
  { path: 'profesores', component: ListarProfesoresComponent },
  { path: 'addProfesor', component: AddProfesoresComponent },
  { path: 'editProfesor/:id', component: EditProfesoresComponent },
  { path: 'addEstudiante/:id', component: AddEstudiantesComponent },
  { path: 'estudiantes', component: ListarEstudiantesComponent },
  { path: 'editEstudiante/:id', component: EditEstudiantesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
