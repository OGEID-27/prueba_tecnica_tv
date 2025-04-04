import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CellphoneService {

  private apiUrl: string = 'https://api.restful-api.dev/objects';

  constructor(private http: HttpClient) { }

  // TODOS LOS CELULARES
  getcellphone(): Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }

  // SOLO UN CELULAR
  getcell(id: number | undefined): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${id}`)
  }
 
  // ELIMINAR
  deletecell(id: number): Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${id}`)
  }

  // AGREGAR
  agregarcell(cell: object): Observable<any>{
    return this.http.post<any>(this.apiUrl, cell)
  }

  // EDITAR
  updatecell(id: number, cell: object): Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/${id}`, cell)
  }
}
