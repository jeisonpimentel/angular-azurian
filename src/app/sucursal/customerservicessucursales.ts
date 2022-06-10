import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sucursales } from '../clientes/interfaces/sucursales.interface';

@Injectable()
export class CustomerServiceSucursales {
    constructor(private http: HttpClient) { }

    getCustomersLarge() {
        return this.http.get<any>('assets/customers-largeSucursal.json')
            .toPromise()
            .then(res => <Sucursales[]>res.data)
            .then(data => { return data; });
    }
}