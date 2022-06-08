import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../interfaces/cliente.interface';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';
import { Mascota } from '../../interfaces/mascota.interface';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
})
export class ListadoClientesComponent implements OnInit {
  // clientes!: Cliente[];
  totalRegistros: number = 0;
  paginaActual  : number = 0;
  totalPorPagina: number = 4;
  pageSizeOptions: number[] = [5, 10, 25, 100]
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  // dataSource = this.clientes;

  mascotas: Mascota[] = [];

  constructor(
    /*private clienteService: ClienteService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private primengConfig: PrimeNGConfig,
              private router: Router
              */) { }

  ngOnInit(): void {
    // this.primengConfig.ripple = true;
    // this.listadoClientes();
    this.listadoMascotas();
  }

  enviarParametros(id: number){
    // console.log(id);
    // this.router.navigate(['/crear-cliente']);
  }

  listadoClientes(){
    // this.clienteService.findAllClientePaginator(this.paginaActual)
    //     .subscribe( resp => {
    //       console.log(resp);
    //       this.clientes = resp.content as Cliente[];
    //       this.totalRegistros = resp.totalElements as number;
    //       this.paginator._intl.itemsPerPageLabel = 'Registros por página:';
    //     });
  }

  paginar(event: PageEvent): void{
    this.paginaActual = event.pageIndex;
    this.totalPorPagina = event.pageSize;
    this.listadoClientes();
  }

  eliminar(cliente: Cliente) : void {
    // this.clienteService.deleteById(cliente.id!)
    //     .subscribe(resp => {
    //       this.clientes = this.clientes.filter(cli => cli !== cliente);
    //       this.listadoClientes();
    //       this.messageService.add({severity:'info', summary:'Confirmación', detail:'Cliente ha sido eliminado con exito!'});
    //     })
  }

  confirm(cliente:Cliente, event: Event) {
    // this.confirmationService.confirm({
    //     target: event.target!,
    //     message: '¿Está seguro que desea eliminar el cliente?',
    //     icon: 'pi pi-exclamation-triangle',
    //     accept: () => {
    //         this.eliminar(cliente);
    //     },
    //     reject: () => {
    //         this.messageService.add({severity:'error', summary:'Información', detail:'Operación cancelada'});
    //     }
    // });
}

  listadoMascotas(): void {
    this.mascotas = [{
      id: 1,
      nombreMascota: 'Cachupin',
      apodoMascota: 'Cachu',
      sexo: {
        id: 1,
        nombre: 'V'
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
    },
    {
      id: 1,
      nombreMascota: 'Cachupin',
      apodoMascota: 'Cachu',
      sexo: {
        id: 1,
        nombre: 'V'
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
    },
    {
      id: 1,
      nombreMascota: 'Cachupin',
      apodoMascota: 'Cachu',
      sexo: {
        id: 1,
        nombre: 'V'
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
    },
    {
      id: 1,
      nombreMascota: 'Cachupin',
      apodoMascota: 'Cachu',
      sexo: {
        id: 1,
        nombre: 'V'
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
    },
    {
      id: 1,
      nombreMascota: 'Cachupin',
      apodoMascota: 'Cachu',
      sexo: {
        id: 1,
        nombre: 'V'
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
    },
    {
      id: 1,
      nombreMascota: 'Cachupin',
      apodoMascota: 'Cachu',
      sexo: {
        id: 1,
        nombre: 'V'
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
    },
    {
      id: 1,
      nombreMascota: 'Cachupin',
      apodoMascota: 'Cachu',
      sexo: {
        id: 1,
        nombre: 'V'
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
    },
    {
      id: 1,
      nombreMascota: 'Cachupin',
      apodoMascota: 'Cachu',
      sexo: {
        id: 1,
        nombre: 'V'
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
    },
    {
      id: 1,
      nombreMascota: 'Cachupin',
      apodoMascota: 'Cachu',
      sexo: {
        id: 1,
        nombre: 'V'
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
    },
    {
      id: 1,
      nombreMascota: 'Cachupin',
      apodoMascota: 'Cachu',
      sexo: {
        id: 1,
        nombre: 'V'
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
    }]
  }
}
