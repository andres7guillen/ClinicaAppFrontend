import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { PacienteService } from 'src/app/Services/paciente.service';
import { PacienteModel } from 'src/app/Models/Paciente.Model';
import { Router, ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/app/Services/doctor.service';
import { DoctorModel } from 'src/app/Models/Doctor.Model';

@Component({
  selector: 'app-paciente-editar',
  templateUrl: './paciente-editar.component.html',
  styles: []
})
export class PacienteEditarComponent implements OnInit {
  paciente:PacienteModel = new PacienteModel();
  id:string;
  listadoDoctores:DoctorModel[];

  constructor(private service:PacienteService,
              private router:Router,
              private route:ActivatedRoute,
              private doctorService:DoctorService) { }

  ngOnInit() {
    this.obtenerDoctores();
    this.obtenerPorId();
  }

  obtenerDoctores(){
    this.doctorService.obtenerTodos().subscribe((data) => {
      if(data !== null && data != undefined){
        this.listadoDoctores = data;
      }
    })
  }

  obtenerPorId(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.obtenerPorId(this.id).subscribe((data) => {
      if(data != undefined || data != null){
        this.paciente = data;
      }
    })
  }

  guardar(f:NgForm){
    Swal.fire({
      title:'Cargando',
      text: 'Guardando información',
      allowOutsideClick: false
    });

    Swal.showLoading();

    if(f.valid){
      //this.paciente.doctorPreferido.id = this.paciente.doctorId;
      this.service.actualizar(this.paciente).subscribe((data)=> {
        if(data !== undefined || data !== null){
          Swal.close();
          this.router.navigateByUrl('/Pacientes')
        }
      })
    }
  }

}
