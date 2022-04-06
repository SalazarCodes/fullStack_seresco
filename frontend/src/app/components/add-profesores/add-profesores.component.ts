import { Component, OnInit } from '@angular/core';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-add-profesores',
  templateUrl: './add-profesores.component.html',
  styleUrls: ['./add-profesores.component.css']
})
export class AddProfesoresComponent implements OnInit {

  profesor = {
    nombre: '',
    apellido: '',
    curso: ''
  }
  enviado: boolean = false;

  constructor(private profesorService: ProfesorService) { }

  ngOnInit(): void {
  }

  saveProfesor(): void {
    const data = {
      nombre: this.profesor.nombre,
      apellido: this.profesor.apellido,
      curso: this.profesor.curso
    };
    this.profesorService.createProfesor(data)
      .subscribe(
        response => {
          console.log(response);
          this.enviado = true;
        },
        error => {
          console.log(error);
        });
  }

  nuevoProfesor(): void {
    this.enviado = false;
    this.profesor = {
      nombre: '',
      apellido: '',
      curso: ''
    };
  }

}
