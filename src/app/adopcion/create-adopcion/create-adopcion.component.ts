import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-adopcion',
  templateUrl: './create-adopcion.component.html'
})
export class CreateAdopcionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  crearAdopcion() : void {
    Swal.fire('Hemos recibido su aviso, en breve se publicará en la sección "Adopciones"');
        
  }
}
