import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../interfaces/cliente.interface';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';
import { Mascota } from '../../interfaces/mascota.interface';
import { Customer } from '../../interfaces/customer.interface';
import { CustomerService } from '../../services/customerservice';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
})
export class ListadoClientesComponent implements OnInit {
  // clientes!: Cliente[];
  totalRegistros: number = 0;
  paginaActual  : number = 0;
  totalPorPagina: number = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100]
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  customers!: Customer[];
  mascotas: Mascota[] = [];

  constructor(
    /*private clienteService: ClienteService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private primengConfig: PrimeNGConfig,
              private router: Router
              */
              private customerService: CustomerService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    // this.primengConfig.ripple = true;
    // this.listadoClientes();
    this.listadoMascotas();
    this.customerService.getCustomersLarge().then(customers => this.customers = customers);

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

  editarMascota( customer : Customer ) : void {
    
  }

  desactivarMascota( id: number, event: Event) : void {
    this.confirmationService.confirm({
      target: event.target!,
      message: '¿Está seguro que desea desactivar a la mascota?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.desactiva(id);
      },
      reject: () => {
          this.messageService.add({severity:'error', summary:'Información', detail:'Operación cancelada'});
      }
    });
  }

  desactiva( id: number ): void {

    let customer: Customer | undefined = this.customers.find( custo => custo.id == id );

    let custo : Customer = {
      id: customer?.id,
      nombre: customer?.nombre,
      apodo: customer?.apodo,
      sexo: customer?.sexo,
      raza: customer?.raza,
      fechaNacimiento: customer?.fechaNacimiento,
      lugarNacimiento: customer?.lugarNacimiento,
      estado: 'Desactivada',
      severity: 'danger'
    }

    this.customers = this.customers.filter(( item) => item.id !== customer?.id );
    this.customers.push( custo ); 
  }

  activarMascota( id: number, event: Event ): void {
    this.confirmationService.confirm({
      target: event.target!,
      message: '¿Está seguro que desea activar a la mascota?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.activa(id);
      },
      reject: () => {
          this.messageService.add({severity:'error', summary:'Información', detail:'Operación cancelada'});
      }
    });
  }

  activa( id: number ){
    let customer: Customer | undefined = this.customers.find( custo => custo.id == id );

    let custo : Customer = {
      id: customer?.id,
      nombre: customer?.nombre,
      apodo: customer?.apodo,
      sexo: customer?.sexo,
      raza: customer?.raza,
      fechaNacimiento: customer?.fechaNacimiento,
      lugarNacimiento: customer?.lugarNacimiento,
      estado: 'Activa',
      severity: 'success'
    }

    this.customers = this.customers.filter(( item) => item.id !== customer?.id );
    this.customers.push( custo ); 
  }

}
