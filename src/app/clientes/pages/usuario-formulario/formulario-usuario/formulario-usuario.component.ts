import { Component, OnInit } from '@angular/core';
import { Region } from '../../../interfaces/region.interface';
import { Comuna } from '../../../interfaces/comuna.interface';
import { Usuario } from '../../../interfaces/usuario.interface';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html'
})
export class FormularioUsuarioComponent implements OnInit {

  usuario!: Usuario;
  regiones!: Region[];
  comunas!: Comuna[];

  constructor() { }

  ngOnInit(): void {
    this.inicializarUsuario();
  }

  inicializarUsuario(): void{
    this.usuario = {
      id             : new Date().getTime(),
      nombre         : '',
      segundo        : '',
      apellidoPaterno: '',
      apellidoMaterno: '', 
      fechaNacimiento: '',
      email          : '',
      comuna         : '',
      region         : '',
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

}
