import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../interfaces/customer.interface';
import { CustomerConsulta } from '../interfaces/customer.consulta.mascota';

@Injectable()
export class CustomerServiceConsulta {
    constructor(private http: HttpClient) { }

    getCustomersLarge() {
        return this.http.get<any>('assets/customers-largeListadoConsulta.json')
            .toPromise()
            .then(res => <CustomerConsulta[]>res.data)
            .then(data => { return data; });
    }
}