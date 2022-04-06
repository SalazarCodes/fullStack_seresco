import { Component, OnInit } from '@angular/core';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { ProfesorService } from 'src/app/services/profesor.service';
import { Profesor } from 'src/app/models/Profesor';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-estudiantes',
  templateUrl: './add-estudiantes.component.html',
  styleUrls: ['./add-estudiantes.component.css']
})
export class AddEstudiantesComponent implements OnInit {

  estudiante = {
    nombre: '',
    apellido: ''
  }
  enviado: boolean = false;


  constructor(private estudianteService: EstudianteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  addEstudiante(): void {
    console.log(this.estudiante);
    this.estudianteService.createEstudiante(this.route.snapshot.params['id'], this.estudiante)
      .subscribe(data => {
        this.enviado = true;
        this.estudiante.nombre = '';
        this.estudiante.apellido = '';
      })
  }

}
