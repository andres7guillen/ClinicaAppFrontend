interface IDoctor{
    id:string; 
    nombreCompleto: string;
    especialidad: string;
    numeroCredencial: string;
    hospitalTrabajo: string;
}

export class DoctorModel implements IDoctor{
    id:string; 
    nombreCompleto: string;
    especialidad: string;
    numeroCredencial: string;
    hospitalTrabajo: string;
}