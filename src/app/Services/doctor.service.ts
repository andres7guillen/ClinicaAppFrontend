import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoctorModel } from '../Models/Doctor.Model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private url: string = 'https://localhost:44354/api/Doctor/';
  private headers = new HttpHeaders({
    'Content-type': 'application/json'
  });

  constructor(private http:HttpClient) { }

  crear(doctor:DoctorModel):Observable<any>{
    return this.http.post(this.url + 'Crear' , JSON.stringify(doctor),{headers: this.headers});
  }

  obtenerTodos():Observable<any>{
    return this.http.get(this.url + 'ObtenerTodos');
  }

  obtenerPorId(id:string):Observable<any>{
    return this.http.get(this.url + 'ObtenerPorId?Id=' + id);
  }

  actualizar(doctor:DoctorModel):Observable<any>{
    return this.http.put(this.url + 'Actualizar',JSON.stringify(doctor),{headers: this.headers});
  }

  eliminar(id:string):Observable<any>{
    return this.http.delete(this.url + 'Eliminar?Id=' + id)
  }




}
