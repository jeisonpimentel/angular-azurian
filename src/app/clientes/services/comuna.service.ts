import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comuna } from '../interfaces/comuna.interface';

@Injectable({
  providedIn: 'root'
})
export class ComunaService {

  endPointBase: string = 'http://localhost:8081/azurian';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Comuna[]> {
    const endPoint: string = 'listado-comunas';
    return this.http.get<Comuna[]>(`${this.endPointBase}/${endPoint}`);
  }

  findById(id: number){
    const endPoint: string = 'comuna';
    return this.http.get<Comuna[]>(`${this.endPointBase}/${endPoint}/${id}`);
  }

  getComunasPorRegion(id: number): Observable<any> {
    const parametro: string = 'comunas';
    return this.http.get<any>(`${this.endPointBase}/${parametro}/${id}`)}
}
