import { Component, Input, OnInit, Output } from '@angular/core';
import { HorasSemana } from '../../interface/horas-interface';

@Component({
  selector: 'app-dias-calendario',
  templateUrl: './dias-calendario.component.html',
  styles: [
    `
      .col > div {
        background-color: #9FABEE;
        border-radius: 0.4rem;
        font-size: 0.90rem;
        box-shadow: 0rem 0.1rem 0.1rem #303030;
      }
    `
  ],
})
export class DiasCalendarioComponent implements OnInit {

  @Input() horas: HorasSemana[] = [];

  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  fechaDias( dia: string ) {
    for( let horas of this.horas ) {
      if( horas.dia === dia ) {
        this.fecha = horas.fecha;
      }
    }
    return this.fecha;
  }

}
