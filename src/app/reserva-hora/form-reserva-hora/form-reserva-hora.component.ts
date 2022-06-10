import { Component, OnInit } from '@angular/core';
import { Sexo } from '../../clientes/interfaces/sexo.interface';
import { Raza } from '../../clientes/interfaces/raza.interface';
import { Region } from '../../clientes/interfaces/region.interface';
import { Comuna } from '../../clientes/interfaces/comuna.interface';
import { Mascota } from 'src/app/clientes/interfaces/mascota.interface';
import { ReservaHora } from '../../clientes/interfaces/reservaHora.interface';
import { ConfirmationService, MessageService } from 'primeng/api';
import Swal from 'sweetalert2';

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
        fechaNacimientoC: this.mascota.cliente?.fechaNacimiento,
        motivoConsulta: '',
        veterinario: '',
        fechaConsulta: '',
        region: '',
        sucursal: ''
      }
    } else {

      Swal.fire({
        title: 'Error!',
        text: 'Debe seleccionar una mascota para continuar...',
        icon: 'error',
        confirmButtonText: 'Oook!'
      });

    }
  }

  crearRegistroHora() : void {

    console.log( this.reservaHora );

    if( this.reservaHora.nombre?.length           == 0 || this.reservaHora.apellidoCliente?.length == 0 ||
        this.reservaHora.comuna?.length           == 0 || this.reservaHora.emailCliente?.length    == 0 ||
        this.reservaHora.fechaConsulta?.length    == 0 || this.reservaHora.fechaNacimiento?.length == 0 ||
        this.reservaHora.fechaNacimientoC?.length == 0 || this.reservaHora.motivoConsulta?.length  == 0 ||
        this.reservaHora.nombreCliente?.length    == 0 || this.reservaHora.raza?.length            == 0 ||
        this.reservaHora.region?.length           == 0 || this.reservaHora.sexo?.length            == 0 || 
        this.reservaHora.sucursal?.length         == 0 || this.reservaHora.veterinario?.length     == 0  ) {

          Swal.fire({
            title: 'Error!',
            text: 'Debe completar todos los campos que son obligatorios!',
            icon: 'error',
            confirmButtonText: 'Oook!'
          });

        } else {

          Swal.fire('Hora reservada para la mascota "' + 
                    this.reservaHora.nombre + '" En la sucursal "' + 
                    this.reservaHora.sucursal + '" con el veterinario "' + 
                    this.reservaHora.veterinario + '" con fecha "' + 
                    this.reservaHora.fechaConsulta + '"' );
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
    this.mascotas = [
      {
        id:  new Date().getTime(),
        nombreMascota: 'Cachupin',
        apodoMascota: 'Cachu',
        sexo: {
          nombre: 'Varón'
        },
        raza: {
          nombre: 'Labrador Retriever	'
        }, 
        fechaNacimiento: '22/09/2021',
        lugarNacimiento: 'Santiago de Chile',
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
            nombre: 'Santiago Centro'
          }, 
          region: {
            id: 1,
            nombre: 'Región Metropolitana'
          }
        }
      },
      {
        id:  new Date().getTime(),
        nombreMascota: 'Bingo',
        apodoMascota: 'BinBin',
        sexo: {
          nombre: 'Varón'
        },
        raza: {
          nombre: 'Cocker Spaniel'
        }, 
        fechaNacimiento: '25/07/2021',
        lugarNacimiento: 'Santiago de Chile',
        cliente: {
          id: 1,
          nombre: 'Virginia',
          segundo: 'Del Carmen',
          apellidoPaterno: 'Casique',
          apellidoMaterno: 'Casique',
          fechaNacimiento: '07/03/1991',
          email: 'virginia@gmail.com',
          comuna: {
            id: 1,
            nombre: 'Ñuñoa'
          }, 
          region: {
            id: 1,
            nombre: 'Región Metropolitana'
          }
        }
      },
      {
        id:  new Date().getTime(),
        nombreMascota: 'Thor',
        apodoMascota: 'Thor',
        sexo: {
          nombre: 'Varón'
        },
        raza: {
          nombre: 'Maltés'
        }, 
        fechaNacimiento: '21/03/2021',
        lugarNacimiento: 'Santiago de Chile',
        cliente: {
          id: 1,
          nombre: 'Leonardo',
          segundo: 'Jesus',
          apellidoPaterno: 'Pérez',
          apellidoMaterno: 'Guzman',
          fechaNacimiento: '09/09/1993',
          email: 'leoguzman@gmail.com',
          comuna: {
            id: 1,
            nombre: 'Las Condes'
          }, 
          region: {
            id: 1,
            nombre: 'Región Metropolitana'
          }
        }
      },
      {
        id:  new Date().getTime(),
        nombreMascota: 'Simba',
        apodoMascota: 'SimSimba',
        sexo: {
          nombre: 'Hembra'
        },
        raza: {
          nombre: 'Setter Irlandés'
        }, 
        fechaNacimiento: '12/05/2021',
        lugarNacimiento: 'Santiago de Chile',
        cliente: {
          id: 1,
          nombre: 'Leonardo',
          segundo: 'Jesus',
          apellidoPaterno: 'Pérez',
          apellidoMaterno: 'Guzman',
          fechaNacimiento: '09/09/1993',
          email: 'leoguzman@gmail.com',
          comuna: {
            id: 1,
            nombre: 'Las Condes'
          }, 
          region: {
            id: 1,
            nombre: 'Región Metropolitana'
          }
        }
      },
      {
        id:  new Date().getTime(),
        nombreMascota: 'Rocky',
        apodoMascota: 'Roc',
        sexo: {
          nombre: 'Varón'
        },
        raza: {
          nombre: 'Golden Retriever'
        }, 
        fechaNacimiento: '22/09/2021',
        lugarNacimiento: 'Santiago de Chile',
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
            nombre: 'Santiago Centro'
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
