import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante, Profesor } from 'src/app/models/Profesor';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { ProfesorService } from 'src/app/services/profesor.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-listar-estudiantes',
  templateUrl: './listar-estudiantes.component.html',
  styleUrls: ['./listar-estudiantes.component.css']
})
export class ListarEstudiantesComponent implements OnInit {

  estudiantes: any;
  profesores: any;
  actualSeleccion: Profesor;
  dataList = [];
  seleccion: number;


  constructor(private estudianteService: EstudianteService,
    private profesorService: ProfesorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.listarEstudiantes();
    this.listarProfesores();
  }

  listarEstudiantes(): void {
    this.estudianteService.getAll()
      .subscribe(
        data => {
          this.estudiantes = data;
          console.log(data);
        }, error => {
          console.log(error);
        });
  }

  listarProfesores(): void {
    this.profesorService.getAll()
      .subscribe(
        data => {
          this.profesores = data;
          this.dataList = data;
          console.log(data);
        }, error => {
          console.log(error);
        });
  }

  eliminarEstudiante(id): void {
    this.estudianteService.deleteEstudiante(id).
      subscribe(response => {
        console.log(response);
        this.listarEstudiantes();
      }, error => {
        console.log(error);
      });
  }

  onSelect() {
    this.dataList = this.profesores.filter(x => x.curso == this.seleccion);
    console.log(this.seleccion);
    console.log(this.dataList);
  }

}
