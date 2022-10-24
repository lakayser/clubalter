import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriaTorneo } from '../modelos/categoriaTorneo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaTorneoService {

  URL: string = 'https://botmila-api.herokuapp.com/botmilaAPI/torneos/';

  categoT: CategoriaTorneo[];
  
  private httpheaders = new HttpHeaders({'Content-Type' : 'aplication/json'});

  constructor(private http:HttpClient) { }

  getcategoriaT(): Observable<CategoriaTorneo[]>{
    return this.http.get<CategoriaTorneo[]>(`${this.URL}listar-categorias-torneo`);
  }

  createcategoriaT(categoT:CategoriaTorneo){
    return this.http.post(`${this.URL}crear-categoria-torneo`,categoT);
  }
  putcategoriaT(categoT:CategoriaTorneo){
    return this.http.put(`${this.URL}editar-categoria-torneo/${categoT._id}`,categoT);
  }
  deletecategoriaT(id:string){
    return this.http.delete(`${this.URL}eliminar-categoria-torneo/${id}`);
  }
}
