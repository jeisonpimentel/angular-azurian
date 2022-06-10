import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/clientes/interfaces/cliente.interface';
import { Region } from '../../clientes/interfaces/region.interface';
import { Comuna } from '../../clientes/interfaces/comuna.interface';
import { ReservaHora } from '../../clientes/interfaces/reservaHora.interface';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Sucursal } from 'src/app/reserva-hora/customer';

@Component({
  selector: 'app-form-sucursal',
  templateUrl: './form-sucursal.component.html',
})
export class FormSucursalComponent implements OnInit {
  sucursal: Sucursal = {};
  cliente: Cliente = {};
  reservaHora: ReservaHora = {};
  regiones!: Region[];
  comunas!: Comuna[];
  regionSeleccionada: Region = {
    id: 0,
    nombre: ''
  }

  constructor() { }

  ngOnInit(): void {
    this.comunasChile();
    this.regionesChile();
  
  }

CrearSucursal(){
  alert('Sucursal Creada')
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
        nombre: 'Las Condes'
      },
      {
        id: 4,
        nombre: 'Vitacura'
      },
      {
        id: 5,
        nombre: 'Ñuñoa'
      },
      {
        id: 6,
        nombre: 'Estacion Central'
      },
      {
        id: 7,
        nombre: 'San Joaquin'
      },
      {
        id: 7,
        nombre: 'Providencia'
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
        nombre: 'Coquimbo'
      },
      {
        id: 5,
        nombre: 'Antofagasta'
      },
      {
        id: 5,
        nombre: 'De Los Lagos'
      },
    ]
  }
}
