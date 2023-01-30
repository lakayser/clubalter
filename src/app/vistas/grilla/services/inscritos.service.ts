import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inscritos } from '../interface/inscritos';

@Injectable({
  providedIn: 'root'
})
export class InscritosService {
  private apiUrl: string = 'https://botmila-api.herokuapp.com/botmilaAPI/torneos';

  constructor( private http: HttpClient ) { }

  getInscritos(): Observable<Inscritos[]> {
    const url = `${ this.apiUrl }/listar-inscripciones`;
    return this.http.get<Inscritos[]>( url );
  }
  eliminarInsctiro(id:string){
    return this.http.delete(`${this.apiUrl}/eliminar-pareja/${id}`)
  }
}
