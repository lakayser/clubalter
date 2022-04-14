import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HorarioCancha } from '../modelos/horariocanchas'

@Injectable({
  providedIn: 'root'
})
export class HorarioCanchaService {
  URL: string = 'https://botmila-api.herokuapp.com/botmilaAPI/moderator/';

  selectedHorarioCancha: HorarioCancha = {
    _id: '',
    horario: '',
    disponibilidad: '',
    dia: '',
    canchas: ''
  }
  horacancha: HorarioCancha[];

  private httpheaders = new HttpHeaders({'Content-Type' : 'aplication/json'});


  constructor(private http:HttpClient) { }

  createHorarioCancha(horarioCancha: HorarioCancha){
    return this.http.post(`${this.URL}add-horas-canchas`, horarioCancha)
  }

  getHorarioCancha(){
    return this.http.get<HorarioCancha[]>(`${this.URL}list-horas-canchas`)
  }
}
