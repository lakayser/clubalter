import { Injectable } from '@angular/core';
import {Organization} from '../modelos/organization'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  URL: string = 'https://botmila-api.herokuapp.com/botmilaAPI/admin/';

  selectedOrganization: Organization={
    _id: '',
    name: '',
    estado: ''
  };
  organizaciones: Organization[];

  private httpheaders = new HttpHeaders({'Content-Type' : 'aplication/json'});



  constructor(private http:HttpClient) { }

  getOrganization(){
    return this.http.get<Organization[]>(`${this.URL}list-organization`)
  }

  createOrganization(organization: Organization){
    return this.http.post(`${this.URL}create-organization`, organization)
  }
  putOrganization(organization:Organization){
    return this.http.put(`${this.URL}edit-organization/${organization._id}`, organization)
  }
  deleteOrganization(id: string){
    return this.http.delete(`${this.URL}delete-organization/${id}`)
  }
}
