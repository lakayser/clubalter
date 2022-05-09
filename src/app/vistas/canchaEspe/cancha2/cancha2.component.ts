import { Component, OnInit } from '@angular/core';
import {HorarioCanchaService} from 'src/app/servicios/horario-cancha.service';
import { CanchasService } from 'src/app/servicios/canchas.service';

@Component({
  selector: 'app-cancha2',
  templateUrl: './cancha2.component.html',
  styleUrls: ['./cancha2.component.css']
})
export class Cancha2Component implements OnInit {

  constructor(public horariocanchaService: HorarioCanchaService, public canchasService: CanchasService) { }

  ngOnInit(): void {
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
}
