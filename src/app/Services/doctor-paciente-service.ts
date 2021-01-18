import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorPacienteService {

  private url: string = 'https://localhost:44354/api/DoctorPaciente/';
  private headers = new HttpHeaders({
    'Content-type': 'application/json'
  });

  constructor(private http:HttpClient) { }
  
  crear(dp:any):Observable<any>{
    return this.http.post(this.url + 'Crear' , JSON.stringify(dp),{headers: this.headers});
  }

}
