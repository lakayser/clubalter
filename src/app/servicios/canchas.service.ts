import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cancha } from '../modelos/canchas';

@Injectable({
  providedIn: 'root'
})
export class CanchasService {

  URL: string = 'https://botmila-api.herokuapp.com/botmilaAPI/moderator/';
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
  getCanchas() {
    return this.http.get<Cancha[]>(`${this.URL}list-canchas`)
  }
  putCanchas(cancha: Cancha){
    return this.http.put(`${this.URL}edit-canchas/${cancha._id}`, cancha)
  }
  deleteCanchas(id: string){
    return this.http.delete(`${this.URL}delete-canchas/${id}`)
  }
  postReserva(cancha: Cancha){
    return this.http.post(`${this.URL}agendar-hora-cancha/${cancha._id}`, cancha)
  }


}
