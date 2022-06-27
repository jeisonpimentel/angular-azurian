import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../interfaces/customer.interface';
import { CustomerConsulta } from '../interfaces/customer.consulta.mascota';
import { CustomerCartilla } from '../interfaces/cartilla.interface';

@Injectable()
export class CustomerServiceCartilla {
    constructor(private http: HttpClient) { }

    getCustomersLarge() {
        return this.http.get<any>('assets/customers-largeCartilla.json')
            .toPromise()
            .then(res => <CustomerCartilla[]>res.data)
            .then(data => { return data; });
    }
}