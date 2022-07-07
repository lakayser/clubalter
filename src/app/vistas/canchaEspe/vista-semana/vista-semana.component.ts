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

  contador = 0;

  canchas = ['Cancha 1', 'Cancha 2', 'Cancha 3']

  ngOnInit(): void {
    this.getHoraCancha();
    this.getCanchas();
    this.getCargaMasiva();
    console.log(this.numSemana)
  }
  getHoraCancha(){
    this.horariocanchaService.getHorarioCancha().subscribe((res)=>{
      this.horariocanchaService.horacancha = res;
      console.log(res);
    })
  }
  getCanchas(){
    this.canchasService.getCanchas().subscribe((res)=>{
      this.canchasService.cancha = res;
      console.log(res)

      let prueba: any = res.map(dato => dato.name)
      console.log(prueba)
    })
  }
  getCargaMasiva(){
    this.cargamasivaService.getCargaMasiva().subscribe((res)=>{
      this.cargamasivaService.cargamasi = res;
      console.log(res);
    })
  }
  obtenerNumeroSemana (fecha: any) {
    let fechaAuxiliar: any = new Date(fecha.valueOf());
    let numeroDia = (fecha.getDay() + 6) % 7;

    fechaAuxiliar.setDate(fechaAuxiliar.getDay() - numeroDia + 3);
    let primerMartes = fechaAuxiliar.valueOf();

    fechaAuxiliar.setMonth(0, 1);

    if (fechaAuxiliar.getDay() != 4) {
      fechaAuxiliar.setMonth(0, 1 + (4 - fechaAuxiliar.getDay() + 7) % 7);
    }

    return 1 + Math.ceil((primerMartes - fechaAuxiliar) / 604800000)
  }
  numSemana = this.obtenerNumeroSemana(new Date())

  nextCancha () {
  this.canchasService.getCanchas().subscribe((res)=>{
    this.canchasService.cancha = res;
    let prueba: any = res.map(dato => dato.name)
    console.log(prueba)
  })
  }
}
