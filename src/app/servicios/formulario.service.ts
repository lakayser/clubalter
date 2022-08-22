import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registro } from '../modelos/registro';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  URL: string = 'https://botmila-api.herokuapp.com/botmilaAPI/formulario/';

  selectedRegistro: Registro={
    nombre: '',
    apellido: '',
    email: '',
    rut: '',
    fecha: '',
    telefono: '',
    contraseña: '',
    contraseña2: ''
  }
  private httpheaders = new HttpHeaders({'Content-Type' : 'aplication/json'});
  
  constructor(private http:HttpClient) { }

  enviarRegistro(registro:Registro){
    return this.http.post(`${this.URL}enviar-formulario`, registro)
  }
}
