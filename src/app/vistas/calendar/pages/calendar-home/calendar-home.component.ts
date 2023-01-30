import { Component } from '@angular/core';
import { CargaMasivaCalendar } from '../../interfaces/cargaMasiva.interface';
import { CargaMasivaService } from '../../services/carga-masiva.service';

@Component({
  selector: 'app-calendar-home',
  templateUrl: './calendar-home.component.html',
  styles: [
    `
      .grd {
        display           : grid;
        grid-template-rows: 5rem 3rem 7rem;
      }
    `
  ]
})
export class CalendarHomeComponent {

  canchaSeleccionada!: string;
  carga             !: CargaMasivaCalendar[];
  fecha2             !: Date;

  constructor(private cargaMasivaService: CargaMasivaService) { }

  getCanchaSeleccionada(cancha: string) {
    this.canchaSeleccionada = cancha;
    this.cargaMasivaService.getCargaMasiva(this.canchaSeleccionada)
      .subscribe(carga => {
        this.carga = carga;
        console.log('desde el home',this.carga);
        this.carga.map(a => {
          console.log('oli', a.cancha[0]._id);
        })
      })
    console.log(this.canchaSeleccionada);
  }

  getPrev(semana: number) {
    this.cargaMasivaService.getCargaMasiva(this.canchaSeleccionada)
      .subscribe(carga => {
        this.carga = carga;
        console.log('desde el home',this.carga);
      })
  }

  getFecha(fecha: Date) {
    this.cargaMasivaService.getCargaMasiva(this.canchaSeleccionada)
      .subscribe(carga => {
        carga.map(fecha => {
          if(fecha.dia === 'lunes') {
            this.fecha2 = fecha.fechaInicio;
            console.log('desde el home',this.fecha2)
          }
        })
      })
  }

}
