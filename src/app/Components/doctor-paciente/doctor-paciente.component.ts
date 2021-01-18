import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorModel } from '../../Models/Doctor.Model';
import { PacienteModel } from '../../Models/Paciente.Model';
import { DoctorService } from '../../Services/doctor.service';
import { PacienteService } from '../../Services/paciente.service';
import Swal from 'sweetalert2';
import { DoctorPaciente } from '../../Models/DoctorPacienteModel';
import { DoctorPacienteService } from '../../Services/doctor-paciente-service';

@Component({
  selector: 'app-doctor-paciente',
  templateUrl: './doctor-paciente.component.html',
  styles: []
})
export class DoctorPacienteComponent implements OnInit {

  listadoDoctores: DoctorModel[] = [];
  listadoPacientes: PacienteModel[];
  doctorPaciente: DoctorPaciente = new DoctorPaciente();
  doctorSeleccionado:DoctorModel = new DoctorModel();
  pacienteSeleccionado: PacienteModel = new PacienteModel();

  constructor(private router: Router,
    private _service:DoctorPacienteService,
    private _doctorService: DoctorService,
    private _pacienteService: PacienteService) { }

  ngOnInit() {
    this.obtenerDoctores();
    this.obtenerPacientes();
  }

  obtenerPacientes(){
    this._pacienteService.obtenerTodos().subscribe((data) => {
      if(data != null || data != undefined){
        this.listadoPacientes = data;
      }
    },(error) => {
      Swal.fire({title:'Info',
      text: error.error})
    })
  }

  obtenerDoctores() {
    this._doctorService.obtenerTodos().subscribe((data) => { 

      if (data !== null && data != undefined) {
        this.listadoDoctores = data;
      }
    })
  }

  seleccionDoctor(doctor: DoctorModel){
    this.doctorPaciente.doctorId = doctor.id;
    this.doctorPaciente.doctor = doctor;
  }

  seleccionPaciente(paciente:PacienteModel){
    this.doctorPaciente.pacienteId = paciente.id;
    this.doctorPaciente.paciente = paciente;
  }

  asociar(){debugger
    this._service.crear(this.doctorPaciente).subscribe((data)=>{
      if(data != undefined){
        Swal.fire({
          title: 'Ok',
          text: 'Asociación correcta',
          allowOutsideClick: false
        });
      }
    },(error)=>{  
      alert('ocurrio un error');
    })
  }

}
