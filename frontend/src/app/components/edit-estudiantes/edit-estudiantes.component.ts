import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-edit-estudiantes',
  templateUrl: './edit-estudiantes.component.html',
  styleUrls: ['./edit-estudiantes.component.css']
})
export class EditEstudiantesComponent implements OnInit {

  estudiante = {
    nombre: '',
    apellido: ''
  }
  enviado: boolean = false;

  constructor(private estudianteService: EstudianteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.estudianteService.getEstudianteById(this.route.snapshot.params['id'])
      .subscribe(data => {
        console.log(data);
        this.estudiante.nombre = data['nombre'],
          this.estudiante.apellido = data['apellido']
      });
  }

  editEstudiante(): void {
    console.log(this.estudiante);
    this.estudianteService.editEstudiante(this.route.snapshot.params['id'], this.estudiante)
      .subscribe(data => {
        console.log(data);
        this.enviado = true;
      })
  }

  onChange($event: any) {

  }

}
