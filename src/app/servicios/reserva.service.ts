import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Reserva} from '../modelos/reserva'

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  URL: string = 'https://botmila-api.herokuapp.com/botmilaAPI/moderator/';

  selectedReserva: Reserva={
    _id: '',
    nombrePaciente: '',
    rutPaciente: ''
  }

  reser:Reserva[];

  private httpheaders = new HttpHeaders({'Content-Type' : 'aplication/json'});

  constructor(private http:HttpClient) { }

  getReserva(){
    return this.http.get<Reserva[]>(`${this.URL}schedule-list`);
  }

  createReserva(reserva:Reserva){
    return this.http.post(`${this.URL}schedule-hours`, reserva);
  }
  
}
