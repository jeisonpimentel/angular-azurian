import { Comuna } from './comuna.interface';

export interface Cliente {
    id             ?: number;
    nombre         ?: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string; 
    fechaNacimiento?: string;
    email          ?: string;
    comuna         ?: Comuna;
}