import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CustomerServiceConsulta } from '../../../services/costumerserviceconsulta';
import { Customer } from '../../../interfaces/customer.interface';
import { CustomerConsulta } from '../../../interfaces/customer.consulta.mascota';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-consulta-veterinaria',
  templateUrl: './listado-consulta-veterinaria.component.html'
})
export class ListadoConsultaVeterinariaComponent implements OnInit {

  customers!: CustomerConsulta[];
  totalRegistros: number = 0;
  paginaActual  : number = 0;
  totalPorPagina: number = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100]
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor( private customerService: CustomerServiceConsulta,
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

  reasignar( id: number ): void {

    let customer: CustomerConsulta | undefined = this.customers.find( custo => custo.id == id );

    let custo : CustomerConsulta = {

      id              : customer?.id,
      mascota         : customer?.mascota,
      vacunasAlDia    : customer?.vacunasAlDia,
      motivoConsulta  : customer?.motivoConsulta,
      isEmergencia    : customer?.isEmergencia,
      veterinario     : "Liah Pimentel"
    }

    this.customers = this.customers.filter(( item) => item.id !== customer?.id );
    this.customers.push( custo ); 

    Swal.fire('Ha sido re-asignada la consulta de forma aleatoria');
  }

  eliminar( id: number ): void {
    let customer: Customer | undefined = this.customers.find( custo => custo.id == id );

    /*
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
    */
  }

  confirm(id: number, event: Event) {
    this.confirmationService.confirm({
        target: event.target!,
        message: '¿Está seguro que desea reasignar la consulta?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.reasignar(id);
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
