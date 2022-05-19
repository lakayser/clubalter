import { Component, OnInit } from '@angular/core';
import {HorarioCanchaService} from 'src/app/servicios/horario-cancha.service';
import { CanchasService } from 'src/app/servicios/canchas.service';

import { HorastomadasService } from 'src/app/servicios/horastomadas.service';


@Component({
  selector: 'app-canchas-dashboard',
  templateUrl: './canchas-dashboard.component.html',
  styleUrls: ['./canchas-dashboard.component.css']
})
export class CanchasDashboardComponent implements OnInit {

  constructor(public horariocanchaService: HorarioCanchaService, public canchasService: CanchasService, public horastomadasService:HorastomadasService) { }
  
  disponible="table-success";
  noDisponible="table-danger";

  ngOnInit(): void {
    this.getHoraTomada();
    this.getHoraCancha();
    this.getCanchas();
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

}
