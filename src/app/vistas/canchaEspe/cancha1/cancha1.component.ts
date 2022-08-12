import { Component, OnInit } from '@angular/core';
import {HorarioCanchaService} from 'src/app/servicios/horario-cancha.service';
import { CanchasService } from 'src/app/servicios/canchas.service';
import { HorasmasivasService } from 'src/app/servicios/horasmasivas.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cancha1',
  templateUrl: './cancha1.component.html',
  styleUrls: ['./cancha1.component.css']
})
export class Cancha1Component implements OnInit {

  constructor(public horariocanchaService: HorarioCanchaService, public canchasService: CanchasService, public horasmasivasService:HorasmasivasService) { }

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
  addHorasCancha(form:NgForm){
    this.horasmasivasService.createHorasMasivas(form.value).subscribe((res)=>{
      console.log(res);
      form.reset();
      
    })
  }
}
