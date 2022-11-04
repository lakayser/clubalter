import { Injectable } from '@angular/core';
import { TorneoCrear } from '../modelos/TorneoCrear';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  putTorneo(Torne: TorneoCrear) {
    return this.http.put(`${this.URL}editar-torneo/${Torne._id}`, Torne);
  }
  deleteTorneo(id: string) {
    return this.http.delete(`${this.URL}eliminar-torneo/${id}`);
  }

}
