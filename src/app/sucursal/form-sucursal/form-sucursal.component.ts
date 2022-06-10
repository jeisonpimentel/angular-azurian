import { Component, OnInit } from '@angular/core';
import { Region } from '../../clientes/interfaces/region.interface';
import { Comuna } from '../../clientes/interfaces/comuna.interface';
import { Sucursales } from '../../clientes/interfaces/sucursales.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-sucursal',
  templateUrl: './form-sucursal.component.html',
})
export class FormSucursalComponent implements OnInit {

  sucursal!: Sucursales;
  regiones!: Region[];
  comunas!: Comuna[];

  constructor() { }

  ngOnInit(): void {
    this.inicializarSucursal();
    this.comunasChile();
    this.regionesChile();
  }

  inicializarSucursal(){
    this.sucursal = {
      id: new Date().getTime(),
      nombre: '',
      encargado: '',
      email: '',
      telefono: '',
      direccion: '',
      region: '',
      comuna: '',
    }
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

  crearSucursal(): void {

    if( this.sucursal.nombre?.length == 0 || this.sucursal.encargado?.length == 0 || 
        this.sucursal.encargado?.length == 0 || this.sucursal.email?.length == 0 ||
        this.sucursal.telefono?.length == 0 || this.sucursal.region?.length == 0 ||
        this.sucursal.comuna?.length == 0 || this.sucursal.direccion?.length == 0 ){

          Swal.fire({
            title: 'Error!',
            text: 'Debe completar todos los campos que son obligatorios!',
            icon: 'error',
            confirmButtonText: 'Oook!'
          });

        }
    else {

      Swal.fire('Ha sido creada la sucursal "' + 
      this.sucursal.nombre + '" En la dirección "' + 
      this.sucursal.direccion + '" Región "' + 
      this.sucursal.region + '" Comuna "' + 
      this.sucursal.comuna + '"' );

      this.sucursal = { };
    }
  }
}
