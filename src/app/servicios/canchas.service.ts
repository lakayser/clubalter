import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cancha } from '../modelos/canchas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanchasService {

  URL: string = 'https://botmila-api.herokuapp.com/botmilaAPI/moderator/';
  URL2: string = 'https://botmila-api.herokuapp.com/botmilaAPI/';
  selectedCancha: Cancha = {
    _id: '',
    name: '',
    disponibilidad: '',
    rangohorario: ''
  };
  cancha: Cancha[];

  private httpheaders = new HttpHeaders({ 'Content-Type': 'aplication/json' });

  constructor(private http: HttpClient) { }

  createCancha(cancha: Cancha) {
    return this.http.post(`${this.URL}add-canchas`, cancha)
  }
  getCanchas(): Observable<Cancha[]> {
    return this.http.get<Cancha[]>(`${this.URL}list-canchas`)
  }
  putCanchas(cancha: Cancha){
    return this.http.put(`${this.URL}edit-canchas/${cancha._id}`, cancha)
  }
  deleteCanchas(id: string){
    return this.http.delete(`${this.URL}delete-canchas/${id}`)
  }

  postReserva(id: string){
    return this.http.get(`${this.URL}agendar-hora-cancha/${id}`)
  }
  createCanchaSubA(cancha: Cancha) {
    return this.http.post(`${this.URL}add-canchas`, cancha)
  }
  getCanchasSubA(): Observable<Cancha[]> {
    return this.http.get<Cancha[]>(`${this.URL}list-canchas`)
  }
  putCanchasSubA(cancha: Cancha){
    return this.http.put(`${this.URL}edit-canchas/${cancha._id}`, cancha)
  }
  deleteCanchasSubA(id: string){
    return this.http.delete(`${this.URL}delete-canchas/${id}`)
  }

  postReservaSubA(id: string){
    return this.http.get(`${this.URL}agendar-hora-cancha/${id}`)
  }
 



}
