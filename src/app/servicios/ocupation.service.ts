import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ocupation } from '../modelos/ocupation';

@Injectable({
  providedIn: 'root'
})
export class OcupationService {

URL: string = 'https://botmila-api.herokuapp.com/botmilaAPI/moderator/';
URL2: string ='https://botmila-api.herokuapp.com/botmilaAPI/admin/';

selectedOcupation: Ocupation={
  _id: '',
  name: ''
};

ocupa: Ocupation[];

private httpheaders = new HttpHeaders({'Content-Type' : 'aplication/json'});

  constructor(private http:HttpClient) { }

  getOcupation(){
    return this.http.get<Ocupation[]>(`${this.URL}listar-ocupacion`)
  }
  createOcupation(ocupation:Ocupation){
    return this.http.post(`${this.URL}crear-ocupacion`, ocupation)
  }
  deleteOcupation(id: string){
  return this.http.delete(`${this.URL}eliminar-ocupacion/${id}`)
  }
  putOcupation(ocupation:Ocupation){
    return this.http.put(`${this.URL}editar-ocupacion/${ocupation._id}`, ocupation)
  }

  getOcupationAdmin(){
    return this.http.get<Ocupation[]>(`${this.URL2}list-ocupations`)
  }
  createOcupationAdmin(ocupation:Ocupation){
    return this.http.post(`${this.URL2}create-ocupations`, ocupation)
  }
  deleteOcupationAdmin(id: string){
    return this.http.delete(`${this.URL2}delete-ocupations/${id}`)
  }
  putOcupationAdmin(ocupation: Ocupation){
    return this.http.put(`${this.URL2}edit-ocupations/${ocupation._id}`, ocupation)
  }
}
