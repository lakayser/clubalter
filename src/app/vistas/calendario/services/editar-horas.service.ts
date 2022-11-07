import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HorasTomadas } from 'src/app/modelos/horastomadas';
import { EditarHoras } from '../interface/editar-horas-interface';

@Injectable({
  providedIn: 'root'
})
export class EditarHorasService {

  private apiUrl = 'https://botmila-api.herokuapp.com/botmilaAPI/moderator/';

  constructor( private http: HttpClient ) { }

  editarHoras(): Observable<EditarHoras[]> {
    const url = `${ this.apiUrl }/agendar-hora-listar`;
    return this.http.get<EditarHoras[]>( url );
  }

  deleteHoraTomada( id:string ):Observable<EditarHoras[]> {
    return this.http.delete<EditarHoras[]>(`${ this.apiUrl }hora-masiva-anular/${ id }`);
  }

  createHoraTomada( horasTomadas: HorasTomadas ){
    return this.http.post(`${ this.apiUrl }agendar-hora `, horasTomadas)
  }

}
