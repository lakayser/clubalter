import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoTorneo } from '../modelos/tipoTorneo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipostorneoService {

  URL: string = 'https://botmila-api.herokuapp.com/botmilaAPI/torneos/';

  selectedtipoT: TipoTorneo ={
    _id: '',
    name: ''
  };


  tipoTor: TipoTorneo[];

private httpheaders = new HttpHeaders({'Content-Type' : 'aplication/json'});

  constructor(private http:HttpClient) { }

  gettipoT() : Observable<TipoTorneo[]> {
    return this.http.get<TipoTorneo[]>(`${this.URL}listar-tipo-torneo`);
  }
  createtipoT(tipoT:TipoTorneo){
    return this.http.post(`${this.URL}crear-tipo-torneo`, tipoT);
  }
  puttipoT(tipoT:TipoTorneo){
    return this.http.put(`${this.URL}editar-tipo-torneo/${tipoT._id}`, tipoT);
  }
  deletetipoT(id:string){
    return this.http.delete(`${this.URL}eliminar-tipo-torneo/${id}`);
  }

}