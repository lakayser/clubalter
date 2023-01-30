import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Inscritos } from '../interfaces/inscritos.interface';
import { Participantes } from '../interfaces/participantes.interface';

@Injectable({
  providedIn: 'root'
})
export class InscritosService {

  private url = 'https://botmila-api.herokuapp.com/botmilaAPI/torneos';

  constructor(private http: HttpClient) { }

  listarInscritos(id:string): Observable<Inscritos[]> {
    const url = `${ this.url }/listar-inscripciones/${ id }`;
    return this.http.get<Inscritos[]>(url);
  }

  listarInscritosTodos(): Observable<Inscritos[]> {
    const url = `${ this.url }/listar-inscripciones`;
    return this.http.get<Inscritos[]>(url);
  }

  resultadosSets(id:string, sets:FormGroup): Observable<Participantes> {
    return this.http.put<Participantes>(
      `${ this.url }/agregar-setPrimRonda/${ id }`,
      sets
    );
  }

  setsGanados(id:string, sets:number): Observable<Participantes> {
    return this.http.put<Participantes>(
      `${ this.url }/ganar-set/${ id }/ ${ sets }`,
      {}
    );
  }

}
