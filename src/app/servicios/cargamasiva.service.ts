import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CargaMasiva } from '../modelos/cargamasiva';

@Injectable({
  providedIn: 'root'
})
export class CargamasivaService {
  URL: string = 'https://botmila-api.herokuapp.com/botmilaAPI/moderator/';

  selectedCargaMasiva: CargaMasiva={
    horascanchas: '',
    cancha: '',
    rut: ''
  };

  cargamasi: CargaMasiva[];

private httpheaders = new HttpHeaders({'Content-Type' : 'aplication/json'});
  constructor(private http:HttpClient) { }

  createCargaMasiva(cargamasi:CargaMasiva){
    return this.http.post(`${this.URL}add-horas-canchas`, cargamasi)
  }
}

