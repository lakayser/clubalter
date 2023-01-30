import { Component } from '@angular/core';

@Component({
  selector: 'app-dias-calendar',
  templateUrl: './dias-calendar.component.html',
  styles: [
    `
      .grd-dias {
        display              : grid;
        place-content        : center;
        grid-template-columns: repeat(7, 9rem);
      }
    `
  ]
})
export class DiasCalendarComponent {

  diasSemana: string[] = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
    'domingo',
  ];

}
