import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { PacienteModel } from '../Models/Paciente.Model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private url: string = 'https://localhost:44354/api/Paciente/';
  private headers = new HttpHeaders({
    'Content-type': 'application/json'
  });

  constructor(private http:HttpClient){ }
  crear(paciente:PacienteModel):Observable<any>{
    return this.http.post(this.url + 'Crear' , JSON.stringify(paciente),{headers: this.headers});
  }

  obtenerTodos():Observable<any>{
    return this.http.get(this.url + 'ObtenerTodos');
  }

  obtenerPorId(id:string):Observable<any>{
    return this.http.get(this.url + 'ObtenerPorId?Id=' + id);
  }

  actualizar(paciente:PacienteModel):Observable<any>{
    return this.http.put(this.url + 'Actualizar',JSON.stringify(paciente),{headers: this.headers});
  }

  eliminar(id:string):Observable<any>{
    return this.http.delete(this.url + 'Eliminar?Id=' + id)
  }

}
