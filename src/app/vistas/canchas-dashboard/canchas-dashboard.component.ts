import { Component, OnInit } from '@angular/core';
import {HorarioCanchaService} from 'src/app/servicios/horario-cancha.service';
import { CanchasService } from 'src/app/servicios/canchas.service';

import { HorastomadasService } from 'src/app/servicios/horastomadas.service';
import { CargamasivaService } from 'src/app/servicios/cargamasiva.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import * as moment from 'moment';


@Component({
  selector: 'app-canchas-dashboard',
  templateUrl: './canchas-dashboard.component.html',
  styleUrls: ['./canchas-dashboard.component.css']
})
export class CanchasDashboardComponent implements OnInit {

  constructor(public horariocanchaService: HorarioCanchaService,  public usuariosService:UsuariosService, public canchasService: CanchasService, public horastomadasService:HorastomadasService, public cargamasivaService:CargamasivaService) { }
  
  disponible="table-success";
  noDisponible="table-danger";

  ngOnInit(): void {
    this.getHoraTomada();
    this.getHoraCancha();
    this.getCanchas();
    this.getCargaMasiva();
    this.getActivo();
  }

  getHoraCancha(){
    this.horariocanchaService.getHorarioCancha().subscribe((res)=>{
      this.horariocanchaService.horacancha = res;
      console.log(res);
    })
  }
  getCanchas(){
    this.canchasService.getCanchas().subscribe((res)=>{
      this.canchasService.cancha= res;
      console.log(res)
      
    })
  }
  getHoraTomada(){
    this.horastomadasService.getHoraTomada().subscribe((res)=>{
      this.horastomadasService.horatomada=res;
      console.log(res);
      
    })
  
  }
  getCargaMasiva(){
    this.cargamasivaService.getCargaMasiva().subscribe((res)=>{
      this.cargamasivaService.cargamasi = res;
      console.log(res);
      
    })
  }
  getActivo(){
    this.usuariosService.getActivo().subscribe((resp)=>{
      this.usuariosService.nombre =resp;
      console.log('respuesta'+ resp)
      
    })
  }
}
