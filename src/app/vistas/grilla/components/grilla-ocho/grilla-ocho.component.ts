import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grilla-ocho',
  templateUrl: './grilla-ocho.component.html',
  styles: [
    `
      .grid-layout {
        display: grid;
        grid-template-rows:  6rem 6rem 6rem 6rem 6rem 6rem;
        grid-template-columns: 16rem 5rem 16rem 16rem;
        margin: 1rem;
      }
      .cuartos-uno {
        grid-row: 1/2;
        grid-column: 1/2;
      }
      .semifinal-uno {
        grid-row: 2/3;
        grid-column: 3/4;
      }
      .semifinal-dos {
        grid-row: 6/7;
        grid-column: 3/4;
      }
      .cuartos-dos {
        grid-row: 3/4;
        grid-column: 1/2;
      }
      .cuartos-tres {
        grid-row: 5/6;
        grid-column: 1/2;
      }
      .cuartos-cuatro {
        grid-row: 6/8;
        grid-column: 1/2;
      }
      .final {
        grid-row: 4/5;
        grid-column: 4/5;
      }
    `
  ]
})
export class GrillaOchoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
