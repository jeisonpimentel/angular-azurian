import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form-reserva-hora',
  templateUrl: './form-reserva-hora.component.html',
  styles: [`
  :host ::ng-deep .p-datatable .p-datatable-thead > tr > th {
      position: -webkit-sticky;
      position: sticky;
      top: 0px;
  }

  @media screen and (max-width: 64em) {
      :host ::ng-deep .p-datatable .p-datatable-thead > tr > th {
          top: 0px;
      }
  }
`]
})
export class FormReservaHoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
