import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmparejadosTorneo } from '../interfaces/emparejados.interface';
import { InscritosTorneo } from '../interfaces/inscritos.interface';

@Injectable({
  providedIn: 'root'
})
export class InscritosService {

  private url = `https://botmila-api.herokuapp.com/botmilaAPI/torneos`;

  constructor(private http:HttpClient) { }

  getEmparejados(idTorneo:string): Observable<InscritosTorneo[]> {
    return this.http.get<InscritosTorneo[]>(`
      ${ this.url }/listar-inscripciones/${ idTorneo }
    `);
  }

  resultadosSetsPrimeraRonda(id:string, sets:FormGroup): Observable<EmparejadosTorneo> {
    return this.http.put<EmparejadosTorneo>(
      `${ this.url }/agregar-setPrimRonda/${ id }`,
      sets
    );
  }

  setsGanados(id:string, sets:number): Observable<EmparejadosTorneo> {
    return this.http.put<EmparejadosTorneo>(
      `${ this.url }/ganar-set/${ id }/ ${ sets }`,
      {}
    );
  }
}
