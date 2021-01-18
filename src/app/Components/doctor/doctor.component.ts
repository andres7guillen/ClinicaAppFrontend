import { Component, OnInit } from '@angular/core';
import { DoctorModel } from 'src/app/Models/Doctor.Model';
import { DoctorService } from 'src/app/Services/doctor.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styles: []
})
export class DoctorComponent implements OnInit {
  listado: DoctorModel[];

  constructor(private service:DoctorService,private router:Router) { }

  ngOnInit() {
    this.obtenerTodos();
  }

  obtenerTodos(){
    this.service.obtenerTodos().subscribe((data)=>{
      if(data !== null || data !== undefined){
        this.listado = data;
      }
    },(error) => {
      Swal.fire({
        title:'Info',
        text: 'Ocurrio un error consultando los doctores',
        allowOutsideClick: false
      })
    })
  }

  borrarDoctor(doctor:DoctorModel,index:number){
    Swal.fire({
      title: 'Esta seguro?',
      text: 'Esta seguro que desea eliminar a: ' + doctor.nombreCompleto + '?',
      showCancelButton:true,
      showConfirmButton: true,
      allowOutsideClick: false
    }).then(resp => {
      if(resp.value){
        this.service.eliminar(doctor.id).subscribe(data => {
          if(data != undefined){
            this.obtenerTodos();            
          }
        },(error) => {
          
        })
      }
    })
  }

}
