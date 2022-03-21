import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Horario} from '../modelos/horario'
import { RouteReuseStrategy } from '@angular/router';
import { Math } from '../modelos/math';


@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  URL: string ='https://botmila-api.herokuapp.com/botmilaAPI/moderator/';
  math: string ='https://botmila-api.herokuapp.com/botmilaAPI/moderator/'
  selectedHorario: Horario ={
    _id: '',
    horaInicio:   '',
    horaTermino:   '',
    disponibilidad: '',
    box: ''
    
};
selectedMath: Math={
  horasTotalDisponible: '',
  horasTotalAgendadas: ''
};


  horarios: Horario[];

  mathx: Math[];
  
  private httpheaders = new HttpHeaders({'Content-Type' : 'aplication/json'});

  constructor(private http:HttpClient) { }

  getMath(){
    return this.http.get<Math[]>(`${this.math}math`)
  }

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
