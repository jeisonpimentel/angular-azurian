import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Customer } from '../customer';
import { CustomerService } from '../customerservice';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-horas-reservadas',
  templateUrl: './list-horas-reservadas.component.html',
  styles: [`
  :host ::ng-deep .p-datatable .p-datatable-thead > tr > th {
      position: -webkit-sticky;
      position: sticky;
      top: 0px;
  }

  @media screen and (max-width: 64em) {
      :host ::ng-deep .p-datatable .p-datatable-thead > tr > th {
          top: 0px;
      }
  }
`]
})
export class ListHorasReservadasComponent implements OnInit {

  customers!: Customer[];
  totalRegistros: number = 0;
  paginaActual  : number = 0;
  totalPorPagina: number = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100]
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor( private customerService: CustomerService,
               private confirmationService: ConfirmationService,
               private messageService: MessageService, ) { }

  ngOnInit() {
    this.customerService.getCustomersLarge().then(customers => this.customers = customers);
} 

  editar( id: number ): void {
    let customer: Customer | undefined = this.customers.find( custo => custo.id == id );
  }

  eliminar( id: number ): void {
    let customer: Customer | undefined = this.customers.find( custo => custo.id == id );

    let custo : Customer = {
      id: customer?.id,
      mascota: customer?.mascota,
      sucursal: customer?.sucursal,
      fechaConsulta: customer?.fechaConsulta,
      veterinario: customer?.veterinario,
      src: customer?.src,
      estado: {
        nombre: "Cancelada",
        code: "AB",
        severity: "warning"
      }
    }
    this.customers = this.customers.filter(( item) => item.id !== customer?.id );
    this.customers.push( custo ); 
  }

  confirm(id: number, event: Event) {
    this.confirmationService.confirm({
        target: event.target!,
        message: '¿Está seguro que desea cancelar la hora agendada?',
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
