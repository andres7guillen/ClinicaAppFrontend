import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PacienteComponent } from './Components/paciente/paciente.component';
import { DoctorComponent } from './Components/doctor/doctor.component';
import { PacienteDetalleComponent } from './Components/paciente-detalle/paciente-detalle.component';
import { PacienteEditarComponent } from './Components/paciente-editar/paciente-editar.component';
import { DoctorDetalleComponent } from './Components/doctor-detalle/doctor-detalle.component';
import { DoctorEditarComponent } from './Components/doctor-editar/doctor-editar.component';
import { PacienteCrearComponent } from './Components/paciente-crear/paciente-crear.component';
import { DoctorCrearComponent } from './Components/doctor-crear/doctor-crear.component';
import { DoctorPacienteComponent } from './Components/doctor-paciente/doctor-paciente.component';


const routes: Routes = [
{path:'Home', component: HomeComponent},
{path:'Pacientes', component:PacienteComponent},
{ path: 'Doctores', component: DoctorComponent}, 
{ path:'pacienteDetalle/:id', component: PacienteDetalleComponent},
{ path:'pacienteEditar/:id', component: PacienteEditarComponent },
{ path:'pacienteCrear', component: PacienteCrearComponent}, 
{ path:'doctorPaciente', component: DoctorPacienteComponent },

{path:'doctorDetalle/:id', component:DoctorDetalleComponent},
{path:'doctorEditar/:id', component: DoctorEditarComponent},
{path:'doctorCrear', component:DoctorCrearComponent},

{ path: '**', redirectTo: 'Home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
