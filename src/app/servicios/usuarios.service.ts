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

  URL4: string = 'https://botmila-api.herokuapp.com/botmilaAPI/subadmin/';

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
    service: '',
    roles: ''
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
  reActivar(usuario: Usuario){
    return this.http.put(`${this.URL}activate-user/${usuario._id}`, usuario)
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

  getUsuarioSubA(){
    return this.http.get<Usuario[]>(`${this.URL4}ver-usuarios`);
  }
  createUsuarioSubA(usuario: Usuario){
    return this.http.post(`${this.URL4}crear-usuarios`, usuario);
  }
  deleteUsuarioSubA(id: string){
    return this.http.delete(`${this.URL4}eliminar-usuario/${id}`);
  }
  putUsuarioSubA(usuario: Usuario){
    return this.http.put(`${this.URL4}editar-usuarios/${usuario._id}`, usuario);
  }



  
}
