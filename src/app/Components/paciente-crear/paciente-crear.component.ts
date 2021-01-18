import { Component, OnInit } from '@angular/core';
import { PacienteModel } from 'src/app/Models/Paciente.Model';
import { NgForm } from '@angular/forms';
import { DoctorModel } from 'src/app/Models/Doctor.Model';
import { DoctorService } from 'src/app/Services/doctor.service';
import { PacienteService } from 'src/app/Services/paciente.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DoctorPaciente } from 'src/app/Models/DoctorPacienteModel';

@Component({
  selector: 'app-paciente-crear',
  templateUrl: './paciente-crear.component.html'
})
export class PacienteCrearComponent implements OnInit {
  paciente: PacienteModel = new PacienteModel;
  doctorSeleccionado: DoctorModel = new DoctorModel();

  listadoDoctores: DoctorModel[];

  constructor(private doctorService: DoctorService,
    private pacienteService: PacienteService,
    private router: Router) { }

  ngOnInit() {
    this.listadoDoctores = [];
    this.paciente.doctoresPacientes = [];
    this.obtenerDoctores();
  }

  obtenerDoctores() {
    this.doctorService.obtenerTodos().subscribe((data) => { 

      if (data !== null && data != undefined) {
        this.listadoDoctores = data;
      }
    })
  }

  adicionarDoctor(doctor: DoctorModel) {

    let doctorPaciente: DoctorPaciente = new DoctorPaciente();
    doctorPaciente.doctorId = doctor.id;
    doctorPaciente.doctor = doctor;
    this.paciente.doctoresPacientes.push(doctorPaciente);
  }

  guardar(f: NgForm) {
    Swal.fire({
      title: 'Cargando',
      text: 'Guardando información',
      allowOutsideClick: false
    });

    Swal.showLoading();

    if (f.valid) {
      this.pacienteService.crear(this.paciente).subscribe((data) => {
        if (data !== undefined || data !== null) {
          Swal.close();
          this.router.navigateByUrl('/Pacientes')
        }
      })
    }
  }

}
