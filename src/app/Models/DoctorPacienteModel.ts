import { PacienteModel } from 'src/app/Models/Paciente.Model';
import { DoctorModel } from 'src/app/Models/Doctor.Model';

interface IDoctorPaciente {
    pacienteId : string;
    paciente:PacienteModel;
    doctorId : string;
    doctor : DoctorModel;
}

export class DoctorPaciente implements IDoctorPaciente{
    pacienteId : string;
    paciente:PacienteModel;
    doctorId : string;
    doctor : DoctorModel;
}