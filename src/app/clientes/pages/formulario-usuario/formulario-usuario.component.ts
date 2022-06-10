import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../../interfaces/cliente.interface';
import { ClienteService } from '../../services/cliente.service';
import { ComunaService } from '../../services/comuna.service';
import { Comuna } from '../../interfaces/comuna.interface';
import { RegionService } from '../../services/region.service';
import { Region } from '../../interfaces/region.interface';
import swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
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
export class FormularioComponent implements OnInit {

  cliente: Cliente = {};
  regiones!: Region[];
  comunas!: Comuna[];
  regionSeleccionada: Region = {
    id: 0,
    nombre: ''
  }

  /*
  @Input() cliente: Cliente = {}
  comunas!: Comuna[];
  regiones!: Region[];

  regionSeleccionada: Region = {
    id: 0,
    nombre: ''
  }
  */

  constructor(
              /*
              private clienteService: ClienteService,
              private regionService: RegionService,
              private comunaService: ComunaService,
              private router: Router,
              private activatedRoute: ActivatedRoute
              */) { }

  ngOnInit(): void {
    /*
    this.buscarCliente()
    this.findAllRegiones();
    */
  }

  crearUsuario(): void {    
    
    this.cliente = {};
  }  

  /*
  buscarCliente(): void {
    this.activatedRoute.params
    .subscribe( params => {
      let id = params['id'];
      
      if(id){
        this.clienteService.findById(id)
          .subscribe( cliente => {
            this.cliente = cliente;
            this.regionSeleccionada = this.cliente?.comuna?.region!;
          } );
      }
    })
  }

  crearCliente(): void {
    this.clienteService.create(this.cliente)
        .subscribe(resp => {
          console.log(resp);
          swal.fire('Exito!', `Cliente ${resp.cliente.nombre} ha sido creado correctamente`, 'success');
          this.router.navigate(['/listado-clientes']);
        })
  }

  updateClient(): void {

    this.clienteService.updateClient( this.cliente )
      .subscribe( response => {
        this.router.navigate(['/listado-clientes']);
        swal.fire('Acción realizada correctamente', `${response.mensaje}`, 'success');
      })
  }
  
  findAllRegiones(): void {
    this.regionService.findAll()
        .subscribe(resp => {
          this.regiones = resp;
        })
  }

  compararRegion(obj1:Region, obj2:Region){
    return obj1 == null || obj2 == null? false: 
           obj1.id === obj2.id;
  }

  onSelect(region: Region) : void {
    this.comunaService.getComunasPorRegion(region.id!)
      .subscribe(resp => {
        this.comunas = resp.comunas;
        console.log(this.comunas);
      })
  }
    */ 

  
}
