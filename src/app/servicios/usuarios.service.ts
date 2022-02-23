import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Usuario} from '../modelos/usuario'
import { RouteReuseStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  URL: string ='http://localhost:3000/botmilaAPI/moderator/';
  
  private httpheaders = new HttpHeaders({'Content-Type' : 'aplication/json'});


  constructor(private http:HttpClient) { }

  getUsuarios() : Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.URL}list-users`);
  }

  createUsuario(usuario: Usuario){
    return this.http.post(`${this.URL}register-users`, usuario)

  }
  
}
