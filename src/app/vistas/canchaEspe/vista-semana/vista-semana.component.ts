import { Component, OnInit } from '@angular/core';
import {HorarioCanchaService} from 'src/app/servicios/horario-cancha.service';
import { CanchasService } from 'src/app/servicios/canchas.service';
import { CargamasivaService } from 'src/app/servicios/cargamasiva.service'

@Component({
  selector: 'app-vista-semana',
  templateUrl: './vista-semana.component.html',
  styleUrls: ['./vista-semana.component.css']
})
export class VistaSemanaComponent implements OnInit {

  constructor(public cargamasivaService: CargamasivaService, public horariocanchaService: HorarioCanchaService, public canchasService: CanchasService) { }

  ngOnInit(): void {
    this.getHoraCancha();
    this.getCanchas();
    this.getCargaMasiva();
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
  getCargaMasiva(){
    this.cargamasivaService.getCargaMasiva().subscribe((res)=>{
      this.cargamasivaService.cargamasi = res;
      console.log(res);
    })
  }
}
