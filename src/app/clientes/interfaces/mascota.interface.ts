import { Sexo } from './sexo.interface';
import { Raza } from './raza.interface';
import { Tipo } from './tipo.interface';
import { Cliente } from './cliente.interface';

export interface Mascota {
    id?:              number;
    nombreMascota  ?: string;
    apodoMascota   ?: string;
    sexo           ?: Sexo ;
    raza           ?: Raza ;
    tipo           ?: Tipo ;
    fechaNacimiento?: string;
    lugarNacimiento?: string;
    cliente        ?: Cliente;
}