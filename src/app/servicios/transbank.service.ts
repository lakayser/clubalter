import { Injectable, Type } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TransbankService {

  _url = 'https://botmila-api.herokuapp.com/botmilaAPI/webpay/payment';
  constructor(

    private http: HttpClient
  ) {

    console.log('trasbank andando');
    
   }
   
   getTransbank(){

     let header = new HttpHeaders()
     .set('Type-content', 'aplication/json')

     return this.http.get(this._url,{
        headers: header
        
        
     });
   }
}

