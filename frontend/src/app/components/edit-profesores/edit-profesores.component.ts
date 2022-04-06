import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-edit-profesores',
  templateUrl: './edit-profesores.component.html',
  styleUrls: ['./edit-profesores.component.css']
})
export class EditProfesoresComponent implements OnInit {

  constructor(private profesorService: ProfesorService,
    private route: ActivatedRoute,
    private router: Router) { }

  profesor = {
    nombre: '',
    apellido: '',
    curso: ''
  }
  enviado: boolean = false;

  ngOnInit(): void {
    //console.log(this.route.snapshot.params['id']);
    this.profesorService.getProfesorById(this.route.snapshot.params['id'])
      .subscribe(data => {
        console.log(data);
        this.profesor.nombre = data['nombre'],
          this.profesor.apellido = data['apellido'],
          this.profesor.curso = data['curso']
      });
  }

  editProfesor(): void {
    console.log(this.profesor);
    this.profesorService.editProfesor(this.route.snapshot.params['id'], this.profesor)
      .subscribe(data => {
        console.log(data);
        this.enviado = true;
      })
  }

}
