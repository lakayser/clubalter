import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Horario} from '../modelos/horario'
import { RouteReuseStrategy } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  URL: string ='https://botmila-api.herokuapp.com/botmilaAPI/moderator/';

  selectedHorario: Horario ={
    _id: '',
    horaInicio:   '',
    horaTermino:   '',
    disponibilidad: ''
    
};

  horarios: Horario[];
  
  private httpheaders = new HttpHeaders({'Content-Type' : 'aplication/json'});

  constructor(private http:HttpClient) { }

  getHorarios(){
    return this.http.get<Horario[]>(`${this.URL}list-hours`);
  }
 
  createHorario(horario: Horario){
    return this.http.post(`${this.URL}create-hours`, horario)

  }
  putHorario(horario: Horario){
    return this.http.put(`${this.URL}edit-hours/${horario._id}`, horario)
  }
  deleteHorario(id: string){
    return this.http.delete(`${this.URL}delete-hours/${id}`)
  }
}
