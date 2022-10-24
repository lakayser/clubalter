import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Canchas } from '../interface/cancha-interface';

@Injectable({
  providedIn: 'root'
})
export class CanchaService {

  private apiUrl: string = 'https://botmila-api.herokuapp.com/botmilaAPI/moderator';

  constructor( private http: HttpClient ) { }

  verCanchas(): Observable<Canchas[]> {
    const url = `${ this.apiUrl }/list-canchas`;
    return this.http.get<Canchas[]>( url );
  }

}
