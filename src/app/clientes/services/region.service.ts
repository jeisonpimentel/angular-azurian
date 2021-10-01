import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Region } from '../interfaces/region.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  endPointBase: string = 'http://localhost:8081/azurian';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Region[]> {
    const endPoint: string = 'listado-regiones';
    return this.http.get<Region[]>(`${this.endPointBase}/${endPoint}`);
  }
}
