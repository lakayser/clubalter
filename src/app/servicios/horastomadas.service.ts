import { Injectable } from '@angular/core';
import { HorasTomadas } from '../modelos/horastomadas';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HorastomadasService {
  URL: string = 'https://botmila-api.herokuapp.com/botmilaAPI/moderator/';
  URL2: string = 'https://botmila-api.herokuapp.com/botmilaAPI/';
  filtro:'';

  horatomada:HorasTomadas[];

  private httpheaders = new HttpHeaders({'Content-Type' : 'aplication/json'});
  
  constructor(private http:HttpClient) { }

  createHoraTomada(horasTomada: HorasTomadas){
    return this.http.post(`${this.URL}agendar-hora`, horasTomada)
  }

  getHoraTomada(){
    return this.http.get<HorasTomadas[]>(`${this.URL}agendar-hora-listar`)
  }
  deleteHoraTomada(id:string){
    return this.http.delete(`${this.URL}eliminar-hora-agendada/${id}`)
  }
  read(query='')
  {
    return this.http.get<HorasTomadas[]>('https://botmila-api.herokuapp.com/botmilaAPI/moderator/', {params:{buscar: query}});
  }

  createHoraTomadaSubA(horasTomada: HorasTomadas){
    return this.http.post(`${this.URL}agendar-hora`, horasTomada)
  }

  getHoraTomadaSubA(){
    return this.http.get<HorasTomadas[]>(`${this.URL}agendar-hora-listar`)
  }
  deleteHoraTomadaSubA(id:string){
    return this.http.delete(`${this.URL}eliminar-hora-agendada/${id}`)
  }
  readSubA(query='')
  {
    return this.http.get<HorasTomadas[]>('https://botmila-api.herokuapp.com/botmilaAPI/moderator/', {params:{buscar: query}});
  }

}
