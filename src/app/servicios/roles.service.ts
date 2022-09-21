import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Roles } from '../modelos/roles';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  URL: string ='https://botmila-api.herokuapp.com/botmilaAPI/moderator/';
  URL2: string ='https://botmila-api.herokuapp.com/botmilaAPI/admin/';

  roles:Roles[];
  private httpheaders = new HttpHeaders({'Content-Type' : 'aplication/json'});
  constructor(private http:HttpClient) { }

  getRoleAdm(){
    return this.http.get<Roles[]>(`${this.URL2}listar-roles`)
  }

  getRoleMod(){
    return this.http.get<Roles[]>(`${this.URL}listar-roles`)
  }
}
