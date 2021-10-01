import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { Cliente } from '../interfaces/cliente.interface';
import { formatDate, registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es-CL';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  endPointBase: string = 'http://localhost:8081/azurian';
  httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient,
              private router: Router) { }

  findAllCliente(): Observable<Cliente[]> {
    const endPoint: string = 'listado-clientes';
    return this.http.get<Cliente[]>(`${this.endPointBase}/${endPoint}`);
  }

  findAllClientePaginator(page: number): Observable<any> {
    const endPoint: string = 'listado-clientes/page';
    return this.http.get<any>(`${this.endPointBase}/${endPoint}/${page}`)
    .pipe(
      map( (response: any) => {
        (response.content as Cliente[]).map( cliente => {
          registerLocaleData(localeES, 'es');
          cliente.fechaNacimiento = formatDate(cliente.fechaNacimiento!, 'EEEE dd, MMMM yyyy', 'es');
          return cliente;
        });
        return response;
      })
    );
  }

  create(cliente: Cliente): Observable<any> {
    const endPoint: string = 'crear-cliente';

    return this.http.post<any>(`${ this.endPointBase }/${ endPoint}`, cliente, {headers: this.httpHeaders} ).pipe(
      catchError( e => {

        if(e.status == 500 || e.status == 403 || e.status == 401){
          swal.fire('Error al insertar', 'Ha ocurrido un error al crear el cliente, por favor intentarlo nuevamente...', 'error');
        }
        return throwError(e);
      })
    );
  }

  updateClient(cliente: Cliente) : Observable<any> {
    const parametro: string = 'crear-cliente';
    return this.http.put<any>(`${ this.endPointBase }/${ parametro}/${cliente.id}`, cliente,  {headers: this.httpHeaders}).pipe(
      catchError( e => {

        if(e.status == 500 || e.status == 403 || e.status == 401){
          swal.fire('Error al editar', 'Ha ocurrido un error al editar el cliente, por favor intentarlo nuevamente...', 'error');
        }
        return throwError(e);
      })
    );;
  }

  findById(id: number): Observable<Cliente> {
    const parametro: string = 'cliente';
    return this.http.get<Cliente>(`${ this.endPointBase }/${ parametro}/${id}`).pipe(
      catchError( e => {

        if(e.status == 500 || e.status == 403 || e.status == 401 || e.status == 404){
          swal.fire('Error al buscar cliente', 'Ha ocurrido un problema al buscar al cliente seleccionado, por favor intentarlo nuevamente...', 'error');
          this.router.navigate(['/listado-clientes']);
        }
        
        return throwError(e);
      })
    )
  }

  
  deleteById(id: number): Observable<any> {
    const endPoint: string = 'eliminar/cliente';
    return this.http.delete<any>(`${this.endPointBase}/${endPoint}/${id}`);
  }

  filtrarProductos(term: string) : Observable<Cliente[]> {
    const parametro : string = 'clientes/filtrar';
    return this.http.get<Cliente[]>(`${this.endPointBase}/${parametro}/${term}`);
  }

}