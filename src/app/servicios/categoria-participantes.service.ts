import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriaParticipante } from '../modelos/categoriaParticipanteTorneo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaParticipantesService {

  URL: string = 'https://botmila-api.herokuapp.com/botmilaAPI/torneos/';
  
  categoP: CategoriaParticipante[];

  private httpheaders = new HttpHeaders({'Content-Type' : 'aplication/json'});

  constructor(private http:HttpClient) { }
  

  getcategoriaP() : Observable<CategoriaParticipante[]> {
    return this.http.get<CategoriaParticipante[]>(`${this.URL}listar-categoria-participantes`);
  }

  createcategoriaP(categoP:CategoriaParticipante){
    return this.http.post(`${this.URL}crear-categoria-participantes`,categoP);
  }

  putcategoriaP(categoP:CategoriaParticipante){
    return this.http.put(`${this.URL}editar-categoria-participantes/${categoP._id}`,categoP);
  }

  deletecategoriaP(id:string){
    return this.http.delete(`${this.URL}eliminar-categoria-participantes/${id}`);
  }
}
