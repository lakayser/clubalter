import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Servicios} from '../modelos/servicios'

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  URL: string= 'https://botmila-api.herokuapp.com/botmilaAPI/moderator/';

  selectedServicio: Servicios={
    _id: '',
    name: '',
    value: '',
    duration: '',
    ocupation: ''
  }
  serv: Servicios[];

  private httpheaders = new HttpHeaders({'Content-Type' : 'aplication/json'});

  constructor(private http:HttpClient) { }
   
  getServicios(){
    return this.http.get<Servicios[]>(`${this.URL}list-service`);
  }

  createServicios(servicios:Servicios){
    return this.http.post(`${this.URL}create-service`, servicios)
  }
}
