import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CanchasService } from 'src/app/servicios/canchas.service';
import {HorarioCanchaService} from 'src/app/servicios/horario-cancha.service'
import { HorasmasivasService } from 'src/app/servicios/horasmasivas.service';


@Component({
  selector: 'app-canchas-crud',
  templateUrl: './canchas-crud.component.html',
  styleUrls: ['./canchas-crud.component.css']
})
export class CanchasCrudComponent implements OnInit {

  constructor(public canchasService: CanchasService, public horariocanchaService: HorarioCanchaService, public horasmasivasService: HorasmasivasService) { }

  ngOnInit(): void {
    this.getCanchas();
    this.getHoraCancha();
  
  }
  getCanchas(){
    this.canchasService.getCanchas().subscribe((res)=>{
      this.canchasService.cancha= res;
      console.log(res)
      
    })
  }
  addCancha(form:NgForm){
    this.canchasService.createCancha(form.value).subscribe((res)=>{
      console.log(res);
      this.getCanchas();
      form.reset();
      
    });
  }

  addHoraCancha(form:NgForm){
    this.horariocanchaService.createHorarioCancha(form.value).subscribe((res)=>{
      console.log(res);
      this.getHoraCancha();
      form.reset();
      
    });
  }
  getHoraCancha(){
    this.horariocanchaService.getHorarioCancha().subscribe((res)=>{
      this.horariocanchaService.horacancha = res;
      console.log(res);
    })
  }
  addHorasMasiva(form:NgForm){
    this.horasmasivasService.createHoraMasiva(form.value).subscribe((res)=>{
      console.log(res);
      form.reset();
    })
  }

}
