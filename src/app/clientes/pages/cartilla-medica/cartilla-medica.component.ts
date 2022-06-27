import { Component, OnInit, ViewChild } from '@angular/core';
import { CartillaMedica, CustomerCartilla } from '../../interfaces/cartilla.interface';
import Swal from 'sweetalert2';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CustomerConsulta } from '../../interfaces/customer.consulta.mascota';
import { CustomerServiceCartilla } from '../../services/customerservicecartilla';

@Component({
  selector: 'app-cartilla-medica',
  templateUrl: './cartilla-medica.component.html'
})
export class CartillaMedicaComponent implements OnInit {

  cartilla: CartillaMedica  = {};
  customers!: CustomerCartilla[];
  totalRegistros: number = 0;
  paginaActual  : number = 0;
  totalPorPagina: number = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100]
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor( private customerService: CustomerServiceCartilla,
               private confirmationService: ConfirmationService,
               private messageService: MessageService) { }

  ngOnInit() {
    this.customerService.getCustomersLarge().then(customers => this.customers = customers);
} 

  asignar( id: number ): void {

    let customer: CustomerConsulta | undefined = this.customers.find( custo => custo.id == id );

    let custo : CustomerConsulta = {

      id              : customer?.id,
      mascota         : customer?.mascota,
      vacunasAlDia    : customer?.vacunasAlDia,
      motivoConsulta  : customer?.motivoConsulta,
      isEmergencia    : customer?.isEmergencia,
      veterinario     : "Virginia Casique"
    }

    this.customers = this.customers.filter(( item) => item.id !== customer?.id );
    this.customers.push( custo ); 

    Swal.fire('Ha sido asignada la consulta de forma aleatoria');
  }

  eliminar( id: number ): void {

    let customer: CustomerConsulta | undefined = this.customers.find( custo => custo.id == id );

    this.customers = this.customers.filter(( item) => item.id !== customer?.id );

    Swal.fire('Ha sido eliminada con exito la cartilla...');
  }


  confirm(id: number, event: Event) {
    this.confirmationService.confirm({
        target: event.target!,
        message: '¿Está seguro que desea eliminar la cartilla?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.eliminar(id);
        },
        reject: () => {
            this.messageService.add({severity:'error', summary:'Información', detail:'Operación cancelada'});
        }
    });
  }

  paginar(event: PageEvent): void{
    this.paginaActual = event.pageIndex;
    this.totalPorPagina = event.pageSize;
  }

}
