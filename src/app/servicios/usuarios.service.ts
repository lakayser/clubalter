import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Usuario} from '../modelos/usuario'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  URL: string ='http://localhost:3000/botmilaAPI/moderator/list-users';

  constructor(private http:HttpClient) { }

  getUsuario() : Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.URL);
  }
}
