import { Component, OnInit } from '@angular/core';
import {HorarioCanchaService} from 'src/app/servicios/horario-cancha.service';
import { CanchasService } from 'src/app/servicios/canchas.service';

@Component({
  selector: 'app-cancha3',
  templateUrl: './cancha3.component.html',
  styleUrls: ['./cancha3.component.css']
})
export class Cancha3Component implements OnInit {

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
