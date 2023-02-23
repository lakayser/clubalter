import { Injectable } from '@angular/core';
import { HorasMasivas } from '../modelos/horasmasivas';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HorasmasivasService {
  
  URL: string = 'https://botmila-api.herokuapp.com/botmilaAPI/moderator/';




  horamasi: HorasMasivas[];

  private httpheaders = new HttpHeaders({'Content-Type' : 'aplication/json'});
  constructor(private http:HttpClient) { }

  createHorasMasivas(horamasi:HorasMasivas): Observable<HorasMasivas>{
    return this.http.post<HorasMasivas>(`${this.URL}generarHoras`, horamasi)
  }

}
