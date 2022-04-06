import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const baseUrlProfesor = 'http://localhost:8080/api/profesores';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrlProfesor);
  }

  getProfesorById(id): Observable<any> {
    return this.http.get(`${baseUrlProfesor}/${id}`);
  }

  createProfesor(data): Observable<any> {
    return this.http.post(baseUrlProfesor, data);
  }

  deleteProfesor(id): Observable<any> {
    return this.http.delete(`${baseUrlProfesor}/${id}`);
  }

  editProfesor(id, data): Observable<any> {
    return this.http.put(`${baseUrlProfesor}/${id}`, data);
  }
}
