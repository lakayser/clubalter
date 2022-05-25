import { Injectable } from '@angular/core';
import { HorasMasivas } from '../modelos/horasmasivas';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HorasmasivasService {
  URL: string = 'https://botmila-api.herokuapp.com/botmilaAPI/moderator/';

  selectedHorasMasivas: HorasMasivas={
    fecha: '',
    dia: '',
    disponibilidad: '',
    horario: '',
    cancha: '',
    precio: '',
    horacomienzo: '',
    horatermino: ''
  } 
  horamasi: HorasMasivas[];

  private httpheaders = new HttpHeaders({'Content-Type' : 'aplication/json'});
  constructor(private http:HttpClient) { }

  getHorasMasivas(){
    return this.http.get<HorasMasivas[]>(`${this.URL}schedule-list`)
  }

  createHoraMasiva(horamasi:HorasMasivas){
    return this.http.post(`${this.URL}generar-horas`,horamasi)
  }
}