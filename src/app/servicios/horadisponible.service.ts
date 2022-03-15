import { Injectable } from '@angular/core';
import { HoraDisponible } from '../modelos/horadisponible';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HoradisponibleService {

  URL: string ='https://botmila-api.herokuapp.com/botmilaAPI/moderator/';

  selectedHora: HoraDisponible ={
    horaId: '',
    payment: '',
    doctorId: ''
  };
    hora: HoraDisponible[];


    private httpheaders = new HttpHeaders({'Content-Type' : 'aplication/json'});

    constructor(private http:HttpClient) { }
  
    getHora(){
      return this.http.get<HoraDisponible[]>(`${this.URL}schedule-list`);
    }
   
    createHora(hora: HoraDisponible){
      return this.http.post(`${this.URL}schedule-hours`, hora)
  
    }
}
