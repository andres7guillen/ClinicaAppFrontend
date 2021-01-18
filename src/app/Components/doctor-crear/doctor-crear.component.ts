import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorService } from 'src/app/Services/doctor.service';
import { DoctorModel } from 'src/app/Models/Doctor.Model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-doctor-crear',
  templateUrl: './doctor-crear.component.html',
  styles: []
})
export class DoctorCrearComponent implements OnInit {
  doctor:DoctorModel = new DoctorModel();

  constructor(private service:DoctorService, private route:Router) { }

  ngOnInit() {
  }

  guardar(f:NgForm){debugger
    Swal.fire({
      title:'Cargando',
      text: 'Guardando información',
      // type: 'info',
      allowOutsideClick: false
    });

    Swal.showLoading();
    if(f.valid){
        this.service.crear(this.doctor).subscribe((data) => {
            if(data !== undefined || data !== null){
              Swal.close();
              this.route.navigateByUrl('/Doctores');
            }
        },(error) => {          
          Swal.fire({
        title:'Info',
        text: 'Ocurrio un error creando el doctor',
        allowOutsideClick: false
      })
        })
    }
  }

}
