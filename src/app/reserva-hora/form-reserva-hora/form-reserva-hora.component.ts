import { Component, OnInit } from '@angular/core';
import { Sexo } from '../../clientes/interfaces/sexo.interface';
import { Raza } from '../../clientes/interfaces/raza.interface';
import { Region } from '../../clientes/interfaces/region.interface';
import { Comuna } from '../../clientes/interfaces/comuna.interface';
import { Mascota } from 'src/app/clientes/interfaces/mascota.interface';
import { ReservaHora } from '../../clientes/interfaces/reservaHora.interface';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-form-reserva-hora',
  templateUrl: './form-reserva-hora.component.html',
})
export class FormReservaHoraComponent implements OnInit {

  sexo: string | undefined = '';
  raza: string | undefined = '';
  mascota: Mascota = {};
  reservaHora: ReservaHora = {};
  mascotas: Mascota[] = [];
  sexos!: Sexo[];
  razas!: Raza[];
  regiones!: Region[];
  comunas!: Comuna[];
  regionSeleccionada: Region = {
    id: 0,
    nombre: ''
  }
  motivoConsulta: any[] = [];
  veterinarios: any[] = [];
  sucursales: any[] = [];

  constructor(private confirmationService: ConfirmationService,
              private messageService: MessageService,) { }

  ngOnInit(): void {
    this.comunasChile();
    this.regionesChile();
    this.listadoMascotas();
    this.motivoConsultas();
    this.veterinariosList();
    this.sucursalesList();
  }

  cargarDatoMascota( event: Event ): void {

    if( this.mascota.id != null ){
      this.reservaHora = {
        id: new Date().getTime(),
        nombre: this.mascota.nombreMascota,
        sexo: this.mascota.sexo?.nombre,
        raza: this.mascota.raza?.nombre,
        fechaNacimiento: this.mascota.fechaNacimiento,
        nombreCliente: this.mascota.cliente?.nombre + ' ' + this.mascota.cliente?.segundo,
        apellidoCliente: this.mascota.cliente?.apellidoPaterno + ' ' + this.mascota.cliente?.apellidoMaterno,
        emailCliente: this.mascota.cliente?.email,
        fechaNacimientoC: this.mascota.cliente?.fechaNacimiento
      }
    } else {

    }
  }

  veterinariosList(): void {

    this.veterinarios = [
      {
        id: 1,
        nombre: 'Bernardo Dominic'
      },
      {
        id: 2,
        nombre: 'Virginia Casique'
      },
      {
        id: 3,
        nombre: 'Orlando Meza'
      },
      {
        id: 4,
        nombre: 'Liah Cataleya'
      },
      {
        id: 5,
        nombre: 'Fernando Torres'
      },
      {
        id: 6,
        nombre: 'Fernanda Gúzman'
      },
      {
        id: 7,
        nombre: 'Patricia Fernandez'
      },
    ]
  }

  sucursalesList(): void {

    this.sucursales = [
      {
        id: 1,
        nombre: 'Sede Costanera'
      },
      {
        id: 2,
        nombre: 'Sede La Florida'
      },
      {
        id: 3,
        nombre: 'Sede Maipú'
      },
      {
        id: 4,
        nombre: 'Sede Santiago'
      },
      {
        id: 5,
        nombre: 'Sede Las Condes'
      },
      {
        id: 6,
        nombre: 'Sede Providencia'
      },
      {
        id: 7,
        nombre: 'Sede Ñuñoa'
      },
    ]
  }

  motivoConsultas(): void{
    this.motivoConsulta = [
      {
        id: 1,
        nombre: 'Consulta General'
      }, 
      {
        id: 2,
        nombre: 'Vacuna'
      }, 
      {
        id: 3,
        nombre: 'Control de rutina'
      },
      {
        id: 3,
        nombre: 'Emergencia'
      }, 
    ]
  }


  regionesChile() : void {
    this.regiones = [
      {
        id: 1,
        nombre: 'Metropolitana'
      },
      {
        id: 2,
        nombre: 'Valparaíso'
      },      
      {
        id: 3,
        nombre: 'Tarapacá'
      },
      {
        id: 4,
        nombre: 'Magallanes y Antártica Chilena'
      },
      {
        id: 5,
        nombre: 'Antofagasta'
      },
    ]
  }

  comunasChile() : void {
    this.comunas = [
      {
        id: 1,
        nombre: 'Santiago'
      },
      {
        id: 2,
        nombre: 'La Florida'
      },      
      {
        id: 3,
        nombre: 'Las condes'
      },
      {
        id: 4,
        nombre: 'Vitacura'
      },
      {
        id: 5,
        nombre: 'Ñuñoa'
      },
    ]
  }

  listadoMascotas(): void {
    this.mascotas = [{
      id:  new Date().getTime(),
      nombreMascota: 'Cachupin',
      apodoMascota: 'Cachu',
      sexo: {
        id: 1,
        nombre: 'Varón'
      },
      raza: {
        id: 1,
        nombre: 'Labrador Retriever	'
      }, 
      fechaNacimiento: '22/09/2021',
      lugarNacimiento: 'Santiago',
      cliente: {
        id: 1,
        nombre: 'Jeison',
        segundo: 'Luis',
        apellidoPaterno: 'Pimentel',
        apellidoMaterno: 'Alvis',
        fechaNacimiento: '22/09/1996',
        email: 'jeisonalvis10@gmail.com',
        comuna: {
          id: 1,
          nombre: 'Santiago'
        }, 
        region: {
          id: 1,
          nombre: 'Región Metropolitana'
        }
      }
    }
  ]
  }

}
