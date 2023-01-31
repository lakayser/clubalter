import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllUsuarios } from '../interfaces/allUsers.interface';
import { CanchasCalendar } from '../interfaces/canchasCalendar.interface';
import { CargaMasivaCalendar } from '../interfaces/cargaMasiva.interface';
import { UsuarioActivo } from '../interfaces/usuario-activo.interface';

@Injectable({
  providedIn: 'root'
})
export class CargaMasivaService {

  private url    : string = 'https://botmila-api.herokuapp.com/botmilaAPI/calendario';
  private urlUser: string = 'https://botmila-api.herokuapp.com/botmilaAPI';
  fecha  : Date = new Date();
  semana : number = this.numeroSemana( this.fecha );

  constructor(private http: HttpClient) { }

  numeroSemana (fecha: any) {
    const dia_en_mili_segundos = 1000 * 60 * 60 * 24,
      dias_que_tiene_una_semana = 7,
      jueves = 4
    fecha = new Date(Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate()))
    let dia_de_la_semana = fecha.getUTCDay()
    if (dia_de_la_semana === 0) {
      dia_de_la_semana = 7
    }
    fecha.setUTCDate(fecha.getUTCDate() - dia_de_la_semana + jueves)
    const inicio_de_ano: any = new Date(Date.UTC(fecha.getUTCFullYear(), 0, 1))
    const diferencia_de_fechas_en_milisegundos = fecha - inicio_de_ano
    return Math.ceil(((diferencia_de_fechas_en_milisegundos / dia_en_mili_segundos) + 1) / dias_que_tiene_una_semana)
  }

  getCargaMasiva(cancha: string): Observable<CargaMasivaCalendar[]> {
    const url = `${ this.url }/schedule-list/${ cancha }/${ this.semana }`;
    return this.http.get<CargaMasivaCalendar[]>( url );
  }

  getCanchas(): Observable<CanchasCalendar[]> {
    const url = `${ this.url }/list-canchas`;
    return this.http.get<CanchasCalendar[]>( url );
  }

  getUserActivo(): Observable<UsuarioActivo[]> {
    const url = `${ this.urlUser }/calendario/datosUsuario`;
    return this.http.get<UsuarioActivo[]>(url);
  }

  getUsers(): Observable<AllUsuarios[]> {
    const url = `${ this.urlUser }/moderator/list-users`;
    return this.http.get<AllUsuarios[]>(url);
  }

  getUsersxRut(rut: string): Observable<AllUsuarios[]> {
    const url = `${ this.urlUser }/moderator/buscarRut/${ rut }`
    return this.http.get<AllUsuarios[]>(url)
  }

  agendarHora() {
    const url = `${ this.urlUser }/moderator/agendar-hora`;
    return this.http.post(
      url,
      {
        horascanchas: '63d138b00f9b5ae3a0eae513',
        cancha: '625ec62558f5fcde8c9d5433',
        rut: '5612793-3'
      }
    )
  }

}
