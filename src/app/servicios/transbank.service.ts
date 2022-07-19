import { Injectable, Type } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { HorasTomadas } from '../modelos/horastomadas';
import { ViewData } from '../modelos/viewdata'

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
  transb: ViewData = {
    vci: '',
    amount: 0,
    status: '',
    buy_order: '',
    session_id: '',
    card_detail: {
     card_number: ''
    },
    accounting_date: '',
    transaction_date: '',
    authorization_code:'',
    payment_type_code: '',
    response_code: '',
    installments_number: ''
   }

  private  header = new HttpHeaders()
  .set('Type-content', 'aplication/json')
  
  constructor(private http: HttpClient) {console.log('trasbank andando');}
   
   getTransbank(codigoVenta: any){
     return this.http.get(`${this._url}payment/${codigoVenta}`);
    }
    
  getCommit(transb:ViewData){
      return this.http.post(`${this._url}commit`, transb)
    }

  getCommits(){
      return this.http.get(`${this._url}commit`)
    }

}


