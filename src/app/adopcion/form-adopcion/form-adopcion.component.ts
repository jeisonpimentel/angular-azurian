import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-adopcion',
  templateUrl: './form-adopcion.component.html'
})
export class FormAdopcionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  crearAdopcion() : void {
    Swal.fire('Hemos recibido tu solicitud, pronto nos comunicaremos contigo!');
        
  }
}
