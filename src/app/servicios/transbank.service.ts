import { Injectable, Type } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { HorasTomadas } from '../modelos/horastomadas';

@Injectable({
  providedIn: 'root'
})
export class TransbankService {

  _url = 'https://botmila-api.herokuapp.com/botmilaAPI/webpay/';

  selectedHorasTomadas: HorasTomadas={
    horascanchas: '',
    cancha: '',
    rut: '',
    id: '',
    codigoVenta: ''
  }
  
  private  header = new HttpHeaders()
  .set('Type-content', 'aplication/json')
  
  constructor(

    private http: HttpClient
  ) {

    console.log('trasbank andando');
    
   }
   
   
   getTransbank(horatomada:HorasTomadas){
    //  return this.http.get(`${this._url}payment/${horatomada.codigoVenta}`, horatomada);
 
    }
}

