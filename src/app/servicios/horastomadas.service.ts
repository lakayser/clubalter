import { Injectable } from '@angular/core';
import { HorasTomadas } from '../modelos/horastomadas';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HorastomadasService {
  URL: string = 'https://botmila-api.herokuapp.com/botmilaAPI/moderator/';

  selectedHorasTomadas: HorasTomadas={
    horascanchas: '',
    cancha: '',
    rut: ''
  }
  horatomada:HorasTomadas[];
  private httpheaders = new HttpHeaders({'Content-Type' : 'aplication/json'});
  constructor(private http:HttpClient) { }

  // createHoraTomada(horasTomada: HorasTomadas){
  //   return this.http.post(`${this.URL}add-horas-canchas`, horasTomada)
  // }

  getHoraTomada(){
    return this.http.get<HorasTomadas[]>(`${this.URL}list-horas-tomadas`)
  }
}
