import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ocupation } from '../modelos/ocupation';

@Injectable({
  providedIn: 'root'
})
export class OcupationService {

URL: string = 'https://botmila-api.herokuapp.com/botmilaAPI/moderator/';

selectedOcupation: Ocupation={
  _id: '',
  name: ''
};

ocupa: Ocupation[];

private httpheaders = new HttpHeaders({'Content-Type' : 'aplication/json'});

  constructor(private http:HttpClient) { }

  getOcupation(){
    return this.http.get<Ocupation[]>(`${this.URL}list-ocupations`)
  }
  createOcupation(ocupation:Ocupation){
    return this.http.post(`${this.URL}create-ocupations`, ocupation)
  }

}
