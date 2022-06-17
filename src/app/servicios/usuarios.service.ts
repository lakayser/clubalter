import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Usuario} from '../modelos/usuario'
import { RouteReuseStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  URL: string ='https://botmila-api.herokuapp.com/botmilaAPI/moderator/';
  
  URL2: string = 'https://botmila-api.herokuapp.com/botmilaAPI/';

  URL3: string = 'https://botmila-api.herokuapp.com/botmilaAPI/admin/';

  selectedUsuario: Usuario ={
    _id: '',
    nameUser: '',
    password: '' ,
    organization: '' ,
    ocupation: '' ,
    rut: '',
    telefono: '',
    direccion: '',
    email: '',
    service: ''

  };

  users: Usuario[];

  nombre: Usuario[];
  
  private httpheaders = new HttpHeaders({'Content-Type' : 'aplication/json'});


  constructor(private http:HttpClient) { }

  getActivo(){
    return this.http.get<Usuario[]>(`${this.URL2}dataUser`);
  }

  getUsuarios(){
    return this.http.get<Usuario[]>(`${this.URL}list-users`);
  }

  createUsuario(usuario: Usuario){
    return this.http.post(`${this.URL}register-users`, usuario);

  }
  putUsuario(usuario: Usuario){
    return this.http.put(`${this.URL}edit-user/${usuario._id}`, usuario);
  }
  deleteUsuario(id: string){
    return this.http.delete(`${this.URL}delete-user/${id}`);
  }

  getUsuarioAdmin(){
    return this.http.get<Usuario[]>(`${this.URL3}list-users`);
  }
  createUsuarioAdmin(usuario: Usuario){
    return this.http.post(`${this.URL3}register-moderators`, usuario);
  }
  deleteUsuarioAdmin(id: string){
    return this.http.delete(`${this.URL3}delete-users/${id}`);
  }
  putUsuarioAdmin(usuario: Usuario){
    return this.http.put(`${this.URL3}edit-users/${usuario._id}`, usuario);
  }
}
