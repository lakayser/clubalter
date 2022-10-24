import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HorasSemana } from '../interface/horas-interface';

@Injectable({
  providedIn: 'root'
})
export class HorasService {

  private apiUrl: string = 'https://botmila-api.herokuapp.com/botmilaAPI/moderator';
  fecha: Date = new Date();
  semana: number = this.numeroSemana( this.fecha );

  constructor( private http: HttpClient ) { }

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

  verHoras( cancha: string ): Observable<HorasSemana[]> {
    const url = `${ this.apiUrl }/schedule-list/${ cancha }/${ this.semana }`;
    return this.http.get<HorasSemana[]>( url );
  }

}
