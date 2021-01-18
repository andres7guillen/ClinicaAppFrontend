import { Component, OnInit } from '@angular/core';
import { DoctorModel } from 'src/app/Models/Doctor.Model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { DoctorService } from 'src/app/Services/doctor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-editar',
  templateUrl: './doctor-editar.component.html',
  styles: []
})
export class DoctorEditarComponent implements OnInit {
  doctor:DoctorModel = new DoctorModel();
  id:string;
  constructor(private service:DoctorService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.obtenerPorId();
  }

  obtenerPorId(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.obtenerPorId(this.id).subscribe((data)=> {
      if(data !== undefined || data !== null){
        this.doctor = data;
      }
    })
  }

  guardar(f:NgForm){
    Swal.fire({
      title:'Cargando',
      text: 'Guardando información',
      // type: 'info',
      allowOutsideClick: false
    });

    Swal.showLoading();
    if(f.valid){
        this.service.actualizar(this.doctor).subscribe((data) => {
            if(data !== undefined || data !== null){
              Swal.close();
              this.router.navigateByUrl('/Doctores');
            }
        })
    }
  }

}
