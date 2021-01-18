import { Component, OnInit } from '@angular/core';
import { DoctorModel } from 'src/app/Models/Doctor.Model';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/app/Services/doctor.service';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-doctor-detalle',
  templateUrl: './doctor-detalle.component.html',
  styles: []
})
export class DoctorDetalleComponent implements OnInit {
  doctor:DoctorModel = new DoctorModel();
  id:string;

  constructor(private route:ActivatedRoute,
              private service:DoctorService) { }

  ngOnInit() {
    this.obtenerPorId();
  }

  obtenerPorId(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.obtenerPorId(this.id).subscribe((data)=> {
      if(data != undefined){
        this.doctor = data;
      }
    },(error)=>{
      Swal.fire({
        title:'Error',
        text: error.error,
        allowOutsideClick: false
      });
    })
  }

}
