import { Injectable } from '@angular/core';
import { TorneoCrear } from '../modelos/TorneoCrear';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inscripcion } from '../modelos/Inscripcion';
import { ListaInscrito } from '../modelos/listaInscritos';

@Injectable({
  providedIn: 'root'
})
export class TorneosService {

  URL: string = 'https://botmila-api.herokuapp.com/botmilaAPI/torneos/';

  Tor: TorneoCrear[];


  private httpheaders = new HttpHeaders({ 'Content-Type': 'aplication/json' });

  constructor(private http: HttpClient) { }

  getTorneos(): Observable<TorneoCrear[]> {
    return this.http.get<TorneoCrear[]>(`${this.URL}listar-torneo `);
  }
  getTorneosID(id: string): Observable<TorneoCrear[]>{
    return this.http.get<TorneoCrear[]>(`${this.URL}listar-torneo/${id}`);
  }
  creteTorneo(Torne: TorneoCrear) {
    return this.http.post(`${this.URL}crear-torneo`, Torne);
  }
  putTorneo(Torne: TorneoCrear, id:string) {
    return this.http.put(`${this.URL}editar-torneo/${id}`, Torne);
  }
  deleteTorneo(id: string) {
    return this.http.delete(`${this.URL}eliminar-torneo/${id}`);
  }
  getTorneoDisponible():  Observable<TorneoCrear[]>{
    return this.http.get<TorneoCrear[]>(`${this.URL}listar-torneos-disp`);
  }
  getTorneoPasado(): Observable<TorneoCrear[]>{
    return this.http.get<TorneoCrear[]>(`${this.URL}listar-torneos-pasados`);
  }
  Inscripcion(id: string, inscr:Inscripcion){
    return this.http.post(`${this.URL}crear-inscripcion/${id}`, inscr)
  }
  listaInscritos(id: string): Observable<ListaInscrito[]>{
    return this.http.get<ListaInscrito[]>(`${this.URL}/listar-inscripciones/${id}`)
  }
}
