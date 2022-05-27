import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CargaMasiva } from '../modelos/cargamasiva';

@Injectable({
  providedIn: 'root'
})
export class CargamasivaService {
  URL: string = 'https://botmila-api.herokuapp.com/botmilaAPI/moderator/';

  selectedCargaMasiva: CargaMasiva={
    _id:'',
    fecha: '',
    dia: '',
    disponibilidad: '',
    horario: '',
    cancha: '',
    precio: ''
  } 

  cargamasi: CargaMasiva[];

private httpheaders = new HttpHeaders({'Content-Type' : 'aplication/json'});
  constructor(private http:HttpClient) { }

  getCargaMasiva(){
    return this.http.get<CargaMasiva[]>(`${this.URL}schedule-list`)
  }

}


