import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../../interfaces/mascota.interface';
import { ConsultaMascota } from '../../../interfaces/consultamascota.interface';

@Component({
  selector: 'app-consulta-veterinaria',
  templateUrl: './consulta-veterinaria.component.html'
})
export class ConsultaVeterinariaComponent implements OnInit {

  consultaMascota: ConsultaMascota = { 
    idMascota: 0
  };
  mascotas: Mascota[] = [];
  vacunas:      any[] = [];
  emergencia:    any[] = [];
  operaciones:  any[] = [];
  enfermedad:   any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.listadoMascotas();
  }

  listadoMascotas(): void {
    this.crearRestante();
    this.mascotas = 
    [
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

  crearRestante(): void {

    this.vacunas = [
      {
        id: 1,
        nombre: 'Si, posee vacunas'
      },
      {
        id: 1,
        nombre: 'No, no tiene vacunas'
      }
    ]

    this.emergencia = [
      {
        id: 1,
        nombre: 'Si, es una emergencia'
      },
      {
        id: 1,
        nombre: 'No, no es una emergencia'
      }
    ]

    this.enfermedad = [
      {
        id: 1,
        nombre: 'Si, tiene enfermedad'
      },
      {
        id: 1,
        nombre: 'No, no tiene enfermedad'
      }
    ]

    this.operaciones = [
      {
        id: 1,
        nombre: 'Si, tiene operaciones'
      },
      {
        id: 1,
        nombre: 'No, no tiene operaciones'
      }
    ]

  }

}
