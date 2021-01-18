import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacienteModel } from 'src/app/Models/Paciente.Model';
import { PacienteService } from 'src/app/Services/paciente.service';
import Swal from 'sweetalert2';
import { DoctorModel } from 'src/app/Models/Doctor.Model';
import { DoctorService } from 'src/app/Services/doctor.service';

@Component({
  selector: 'app-paciente-detalle',
  templateUrl: './paciente-detalle.component.html',
  styles: []
})
export class PacienteDetalleComponent implements OnInit {
  paciente:PacienteModel = new PacienteModel();
  id:string;  

  constructor(private route:ActivatedRoute,
              private service:PacienteService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.obtenerPorId(this.id).subscribe((data) => {
      if(data != undefined){
        this.paciente = data;
        console.log(data);
      }
    },(error)=>{
      Swal.fire({
        title:'Info',
        text: error.error
      })
    })
  }

}
