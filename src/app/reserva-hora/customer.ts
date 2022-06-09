export interface Sucursal {
    nombre?: string;
    code?: string;
}

export interface Estado {
    nombre?: string;
    code?: string,
    severity:string
}

export interface Customer {
    id?: number;
    mascota?: string;
    sucursal?: Sucursal;
    fechaConsulta?: string;
    veterinario?: string;
    src?: string;
    estado?: Estado;
}