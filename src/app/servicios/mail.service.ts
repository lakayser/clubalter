import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from '../modelos/email';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  URL: string = 'https://botmila-api.herokuapp.com/botmilaAPI/email/';
  selectedEmail: Email ={ emailPersona:'',
  asunto:'',
  mensaje:''}
  private httpheaders = new HttpHeaders({'Content-Type' : 'aplication/json'});

  constructor(private http:HttpClient) 
   {

   }

   postEmail(email:Email)
   {
    return this.http.post(`${this.URL}enviar-email`, email);
   }
}
