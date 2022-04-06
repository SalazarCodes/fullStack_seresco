import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profesor } from 'src/app/models/Profesor';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-listar-profesores',
  templateUrl: './listar-profesores.component.html',
  styleUrls: ['./listar-profesores.component.css']
})
export class ListarProfesoresComponent implements OnInit {

  profesores: Profesor[];
  actualProfesor: null;

  constructor(private profesorService: ProfesorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.listarProfesores();
  }

  listarProfesores(): void {
    this.profesorService.getAll()
      .subscribe(
        data => {
          this.profesores = data;
          console.log(data);
        }, error => {
          console.log(error);
        });
  }

  eliminarProfesor(id): void {
    this.profesorService.deleteProfesor(id).
      subscribe(response => {
        console.log(response);
        this.router.navigate(['/profesores']);
        this.listarProfesores();
      }, error => {
        console.log(error);
      });
  }

  getProfesorId(id) {
    this.profesorService.getProfesorById(id)
      .subscribe(data => {
        this.actualProfesor = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

}
