import { DoctorModel } from './Doctor.Model';
import { DoctorPaciente } from './DoctorPacienteModel';

interface IPaciente {
    id: string;
    nombreCompleto: string;
    numeroSeguroSocial: string;
    codigoPostal: string;
    telefonoContacto: string;
    doctoresPacientes: DoctorPaciente[];
}

export class PacienteModel implements IPaciente {
    id: string;
    nombreCompleto: string;
    numeroSeguroSocial: string;
    codigoPostal: string;
    telefonoContacto: string;
    doctoresPacientes: DoctorPaciente[];
}
