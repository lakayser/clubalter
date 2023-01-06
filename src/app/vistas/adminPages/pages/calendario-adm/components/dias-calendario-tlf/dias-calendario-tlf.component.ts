import { Component, Input, OnInit } from '@angular/core';
import { HorasSemana } from '../../interface/horas-interface';

@Component({
  selector: 'app-dias-calendario-tlf',
  templateUrl: './dias-calendario-tlf.component.html',
  styles: [
    `
      .styleCalendar {
        background-color: #9FABEE;
        border-radius: 0.4rem;
        font-size: 1rem;
        box-shadow: 0rem 0.1rem 0.1rem #303030;
      }
      .arrowStyle {
        font-size: 2.3rem;
        transition: all 0.3s;
      }
      .arrowStyle:hover {
        text-shadow: 0.1rem 0.1rem 0.1rem #9FABEE;
        font-size: 2.8rem;
      }
    `
  ]
})
export class DiasCalendarioTlfComponent implements OnInit {

  @Input() horas: HorasSemana[] = [];

  arrDias: string[] = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
    'domingo',
  ];
  contadorDias: number = 0;
  dia: string;

  constructor() { }

  ngOnInit(): void {
    this.dia = this.arrDias[ this.contadorDias ];
  }

  next() {
    this.contadorDias += 1;
    if( this.contadorDias === this.arrDias.length ) {
      this.contadorDias = 0;
    }
    this.dia = this.arrDias[ this.contadorDias ];
  }

  prev() {
    if( this.contadorDias === 0 ) {
      this.contadorDias = this.arrDias.length;
    }
    this.contadorDias -= 1;
    this.dia = this.arrDias[ this.contadorDias ];
  }

}
