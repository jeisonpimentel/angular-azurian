import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../interfaces/cliente.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-cliente',
  templateUrl: './buscar-cliente.component.html',
  styles: [
    `
      img{
        width: 50%;
        height: 100%;
        border-radius: 5px;
      }
    `
  ]
})
export class BuscarClienteComponent implements OnInit {

  termino:          string      = "";
  clientes :        Cliente[]   = [];
  clienteSeleccionado: Cliente | undefined;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  buscando(){
    this.clienteService.filtrarProductos( this.termino.trim() )
      .subscribe(resp => this.clientes = resp);
  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent){

    if(!event.option.value){
      console.log('No se encontro nada con el termino indicado');
      this.clienteSeleccionado = undefined;
      return;
    }
    
    const cliente: Cliente = event.option.value;
    this.termino = cliente.nombre!;

    this.clienteService.findById( cliente.id! )
        .subscribe( resp => {
          this.clienteSeleccionado = resp;
        })
  }

}
