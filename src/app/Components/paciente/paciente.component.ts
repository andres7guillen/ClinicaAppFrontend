import { Component, OnInit } from '@angular/core';
import { PacienteModel } from 'src/app/Models/Paciente.Model';
import { PacienteService } from 'src/app/Services/paciente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styles: []
})
export class PacienteComponent implements OnInit {
  listado: PacienteModel[];

  constructor(private service:PacienteService) { }

  ngOnInit() {
    this.obtenerTodos();
  }

  

  

  borrarPaciente(paciente:PacienteModel, index:number){
    Swal.fire({
      title: 'Esta seguro?',
      text: 'Esta seguro que desea eliminar a: ' + paciente.nombreCompleto + '?',
      showCancelButton:true,
      showConfirmButton: true,
      allowOutsideClick: false
    }).then(resp => {
      if(resp.value){
        this.service.eliminar(paciente.id).subscribe(data => {
          if(data != undefined){
            this.service.obtenerTodos().subscribe((data)=>{
              if(data !== null || data !== undefined){
                this.listado = data;
              }
            },(error) => {
              Swal.fire({
                title:'Info',
                text: error.error,
                allowOutsideClick: false
              })
            })

            Swal.fire({
              title: 'Correcto',
              text: 'Paciente:  ' + paciente.nombreCompleto + ' borrado correctamente',
              allowOutsideClick: false
            });
            
          }
        },(error) => {
          
        })
      }
    })
  }

  obtenerTodos(){
    this.service.obtenerTodos().subscribe((data) => {
      if(data != null || data != undefined){
        this.listado = data;
      }
    },(error) => {
      Swal.fire({title:'Info',
      text: error.error})
    })
  }

}
