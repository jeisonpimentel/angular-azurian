export interface CartillaMedica {
    id             ?: number;
    nombreRepre    ?: string;
    vivoEn    ?: string;
    telefono    ?: string;
    nombreMascota    ?: string;
    especie ?: string;
    fechaNacimiento ?: string;
    edad ?: string;
    raza ?: string;
    color ?: string;
    peso ?: string;
    motivoConsulta ?: string;
    fechaConsulta ?: string;
    sucursal ?: string;
    diagnostico ?: string;
    medicamento ?: string;
    proximoControl ?: string;
    observaciones?: string;
}


export interface CustomerCartilla {
    id ?: number,
    mascota ?: string;
    fechaConsulta?: string;
    motivoConsulta?: string;
    diagnostico?: string;
    medicamento?: string;
    proximoControl?: string;
}