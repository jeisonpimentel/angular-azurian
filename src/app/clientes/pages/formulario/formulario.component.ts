import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../../interfaces/cliente.interface';
import { Comuna } from '../../interfaces/comuna.interface';
import { Region } from '../../interfaces/region.interface';
import { Mascota } from '../../interfaces/mascota.interface';
import { Sexo } from '../../interfaces/sexo.interface';
import { Raza } from '../../interfaces/raza.interface';
import { Tipo } from '../../interfaces/tipo.interface';

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

  mascotas: Mascota[] = [];
  mascota: Mascota = {};
  cliente: Cliente = {};
  sexos!: Sexo[];
  razas!: Raza[];
  tipos!: Tipo[];
  regiones!: Region[];
  comunas!: Comuna[];
  regionSeleccionada: Region = {
    id: 0,
    nombre: ''
  }
  vacunas:      any[] = [];
  poseeChip:    any[] = [];
  operaciones:  any[] = [];
  enfermedad:   any[] = [];

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

    this.sexoMascota();
    this.tipoMascota();
    this.regionesChile();
    this.comunasChile();
    this.crearRestante();
    
  }

  crearMascota(): void {
    
    this.mascota.cliente = this.cliente;
    console.log('Mascota', this.mascota);
    this.mascotas.push( this.mascota );
    this.mascota = {};
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

  sexoMascota(): void {
    this.sexos = [
     {
       id: 1,
       nombre: 'Macho'
     },
     {
      id: 2,
      nombre: 'Hembra'
     } 
    ]  
  }

  tipoMascota() : void {
    this.tipos = [
      {
        id: 1,
        nombre: 'Perro'
      },
      {
        id: 2,
        nombre: 'Gato'
      },      
      {
        id: 3,
        nombre: 'Mascota exótica'
      },
      {
        id: 4,
        nombre: 'Otro'
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
        nombre: 'Magallanes y Antártica Chilena'
      },
      {
        id: 5,
        nombre: 'Antofagasta'
      },
    ]
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
        nombre: 'Las condes'
      },
      {
        id: 4,
        nombre: 'Vitacura'
      },
      {
        id: 5,
        nombre: 'Ñuñoa'
      },
    ]
  }

  crearRestante(): void {

    this.vacunas = [
      {
        id: 1,
        nombre: 'Si, posee vacunas'
      },
      {
        id: 1,
        nombre: 'No, no tiene vacunas'
      }
    ]

    this.poseeChip = [
      {
        id: 1,
        nombre: 'Si, posee micro-chip'
      },
      {
        id: 1,
        nombre: 'No, no tiene micro-chip'
      }
    ]

    this.enfermedad = [
      {
        id: 1,
        nombre: 'Si, tiene enfermedad'
      },
      {
        id: 1,
        nombre: 'No, no tiene enfermedad'
      }
    ]

    this.operaciones = [
      {
        id: 1,
        nombre: 'Si, tiene operaciones'
      },
      {
        id: 1,
        nombre: 'No, no tiene operaciones'
      }
    ]

  }

  
}
