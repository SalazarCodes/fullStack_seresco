import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const baseUrlProfesor = 'http://localhost:8080/api/profesores';
const baseUrlEstudiante = 'http://localhost:8080/api/estudiantes';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private http: HttpClient) { }

  createEstudiante(id, data): Observable<any> {
    return this.http.post(`${baseUrlProfesor}/${id}/estudiantes`, data);
  }

  getAll(): Observable<any> {
    return this.http.get(baseUrlEstudiante);
  }

  deleteEstudiante(id): Observable<any> {
    return this.http.delete(`${baseUrlEstudiante}/${id}`);
  }

  getEstudianteById(id): Observable<any> {
    return this.http.get(`${baseUrlEstudiante}/${id}`);
  }

  editEstudiante(id, data): Observable<any> {
    return this.http.put(`${baseUrlEstudiante}/${id}`, data);
  }
}
