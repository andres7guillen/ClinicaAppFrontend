import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavComponent } from './Components/nav/nav.component';
import { PacienteComponent } from './Components/paciente/paciente.component';
import { DoctorComponent } from './Components/doctor/doctor.component';
import { PacienteCrearComponent } from './Components/paciente-crear/paciente-crear.component';
import { PacienteEditarComponent } from './Components/paciente-editar/paciente-editar.component';
import { PacienteDetalleComponent } from './Components/paciente-detalle/paciente-detalle.component';
import { DoctorDetalleComponent } from './Components/doctor-detalle/doctor-detalle.component';
import { DoctorCrearComponent } from './Components/doctor-crear/doctor-crear.component';
import { DoctorEditarComponent } from './Components/doctor-editar/doctor-editar.component';
import { DoctorPacienteComponent } from './Components/doctor-paciente/doctor-paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    PacienteComponent,
    DoctorComponent,
    PacienteCrearComponent,
    PacienteEditarComponent,
    PacienteDetalleComponent,
    DoctorDetalleComponent,
    DoctorCrearComponent,
    DoctorEditarComponent,
    DoctorPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
