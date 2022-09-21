import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registro } from '../modelos/registro';
import { Registro2 } from '../modelos/registro2';

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
  selectedFormulario2: Registro2={
    administrador:    '',
    canchaClases:     '',
    detalleHorario:   '', 
    direccion:        '', 
    email:            '', 
    giro:             '', 
    horaCancha:       '', 
    horaCanchaAM:     '', 
    horaCanchaPM:     '', 
    horarioClase:     '', 
    nombre:           '', 
    nombreNegocio:    '', 
    nombreRazon:      '', 
    numClases:        '', 
    numeroCanchas:    '', 
    participantes:    '', 
    rangoHorario1:    '', 
    rangoHorario2:    '', 
    rangoHorario3:    '', 
    rut:              '', 
    telefono:         '', 
    tieneClase:       '', 
    tieneHorario:     '', 
    valorClase:       '' 
  }
  private httpheaders = new HttpHeaders({'Content-Type' : 'aplication/json'});
  
  constructor(private http:HttpClient) { }

  enviarRegistro(registro:Registro){
    return this.http.post(`${this.URL}enviar-formulario`, registro)
  }
  
  enviarFormulario(formu:Registro2){
    return this.http.post(`${this.URL}enviar-formulario-bot`,formu)
  }
}
