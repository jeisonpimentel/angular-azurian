import { Comuna } from './comuna.interface';
import { Region } from './region.interface';

export interface Cliente {
    id             ?: number;
    nombre         ?: string;
    segundo        ?: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string; 
    fechaNacimiento?: string;
    email          ?: string;
    comuna         ?: Comuna;
    region         ?: Region;
}