import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Sucursales } from '../../clientes/interfaces/sucursales.interface';
import { CustomerServiceSucursales } from '../customerservicessucursales';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-lista-sucursal',
  templateUrl: './lista-sucursal.component.html',
})
export class ListaSucursalComponent implements OnInit {

  customers!: Sucursales[];
  totalRegistros: number = 0;
  paginaActual  : number = 0;
  totalPorPagina: number = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100]

  constructor( private customerService: CustomerServiceSucursales,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.customerService.getCustomersLarge().then(customers => this.customers = customers);
  }

  paginar(event: PageEvent): void{
    this.paginaActual = event.pageIndex;
    this.totalPorPagina = event.pageSize;
  }

  editarMascota( customer : Sucursales ) : void {
    
  }

  desactivarMascota( id: number, event: Event) : void {
    this.confirmationService.confirm({
      target: event.target!,
      message: '¿Está seguro que desea desactivar la sucursal?',
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

    let customer: Sucursales | undefined = this.customers.find( custo => custo.id == id );

    let custo : Sucursales = {
      id: customer?.id,
      nombre: customer?.nombre,
      encargado: customer?.encargado,
      email: customer?.email,
      telefono: customer?.telefono,
      direccion: customer?.direccion,
      region: customer?.region,
      comuna: customer?.comuna,
      estado: 'Desactivada',
      severity: 'danger'
    }

    this.customers = this.customers.filter(( item) => item.id !== customer?.id );
    this.customers.push( custo ); 
  }

  activarMascota( id: number, event: Event ): void {
    this.confirmationService.confirm({
      target: event.target!,
      message: '¿Está seguro que desea activar la sucursal?',
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
    let customer: Sucursales | undefined = this.customers.find( custo => custo.id == id );

    let custo : Sucursales = {
      id: customer?.id,
      nombre: customer?.nombre,
      encargado: customer?.encargado,
      email: customer?.email,
      telefono: customer?.telefono,
      direccion: customer?.direccion,
      region: customer?.region,
      comuna: customer?.comuna,
      estado: 'Activa',
      severity: 'success'
    }

    this.customers = this.customers.filter(( item) => item.id !== customer?.id );
    this.customers.push( custo ); 
  }

}
