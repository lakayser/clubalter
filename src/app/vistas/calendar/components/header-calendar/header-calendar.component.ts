import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CanchasCalendar } from '../../interfaces/canchasCalendar.interface';
import { CargaMasivaCalendar } from '../../interfaces/cargaMasiva.interface';
import { CargaMasivaService } from '../../services/carga-masiva.service';

@Component({
  selector: 'app-header-calendar',
  templateUrl: './header-calendar.component.html',
  styles: [
    `
      .grd-header {
        display: grid;
        place-content: center;
        grid-template-columns: repeat(3, 20rem);
      }
    `
  ]
})
export class HeaderCalendarComponent implements OnInit {

  @Output() onClick  : EventEmitter<string> = new EventEmitter<string>
  @Output() onClick2 : EventEmitter<number> = new EventEmitter<number>
  @Output() onClick3 : EventEmitter<Date> = new EventEmitter<Date>
  @Input() fecha2    : Date;

  fecha            !: Date;
  canchas          !: CanchasCalendar[];
  canchaSeleccionada: string = 'Cancha 1';
  carga             : CargaMasivaCalendar[];
  semana           !: number;
  listCanchas       : boolean = false;

  constructor(private cargaMasivaService: CargaMasivaService) { }

  ngOnInit(): void {
    this.getFecha();
    this.getCanchas();
    this.getValueSelect(this.canchaSeleccionada);
    this.getSemana();
  }

  getFecha() {
    this.cargaMasivaService.getCargaMasiva(this.canchaSeleccionada)
      .subscribe(carga => {
        carga.map(fecha => {
          if(fecha.dia === 'lunes') {
            this.fecha = fecha.fechaInicio;
          }
        })
      })
  }

  getCanchas() {
    this.cargaMasivaService.getCanchas()
      .subscribe(canchas => {
        this.canchas = canchas;
      })
  }

  getValueSelect(cancha: string) {
    this.canchaSeleccionada = cancha;
    this.onClick.emit(this.canchaSeleccionada);
    this.listCanchas = false;
  }

  getSemana() {
    this.semana = this.cargaMasivaService.semana;
    this.onClick3.emit(this.fecha)
  }

  getPrev() {
    this.cargaMasivaService.semana -= 1;
    this.getSemana();
    this.onClick2.emit(this.semana);
  }

  getNext() {
    this.cargaMasivaService.semana += 1;
    this.getSemana();
    this.onClick2.emit(this.semana);
  }

  seleccionCancha() {
    if(this.listCanchas === false) {
      this.listCanchas = true;
    }else if(this.listCanchas === true) {
      this.listCanchas = false;
    }
  }

}
