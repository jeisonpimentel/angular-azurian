import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-form-veterinario',
  templateUrl: './form-veterinario.component.html',
})
export class FormVeterinarioComponent implements OnInit{ 
  
  ngOnInit() {
  
  }

  crearVeterinario() : void {
    Swal.fire('Veterinario Creado');

  }
}