import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grilla-ocho-movil',
  templateUrl: './grilla-ocho-movil.component.html',
  styles: [
    `
      .grid-layout {
        display: grid;
        grid-template-rows: auto auto auto auto auto;
        grid-template-columns: 12rem 18rem 18rem;
      }
      .select-etapa {
        grid-row: 1/2;
        grid-column: 2/3;
      }
      .cuartos-uno {
        grid-row: 2/3;
        grid-column: 2/3;
      }
      .cuartos-dos {
        grid-row: 3/4;
        grid-column: 2/3;
      }
      .cuartos-tres {
        grid-row: 4/5;
        grid-column: 2/3;
      }
      .cuartos-cuatro {
        grid-row: 5/6;
        grid-column: 2/3;
      }
    `
  ]
})
export class GrillaOchoMovilComponent implements OnInit {
  etapas            : string[] = [
    'cuartos de final',
    'semifinal',
    'final',
  ];
  opcionSeleccionada: string = 'cuartos de final';

  constructor() { }

  ngOnInit(): void {
  }

}
