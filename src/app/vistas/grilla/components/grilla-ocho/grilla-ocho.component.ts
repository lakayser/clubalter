import { Component, OnInit } from '@angular/core';
import { Jugadores } from '../../interface/jugadores.interface';

@Component({
  selector: 'app-grilla-ocho',
  templateUrl: './grilla-ocho.component.html',
  styles: [
    `
      .body-grilla-ocho {
        width           : max-content;
        margin-left     : 3rem;
        background-color: var( --surface-b )!important;
      }
      .grid-layout {
        display              : grid;
        grid-template-rows   : 6rem 6rem 6rem 6rem 6rem 6rem;
        grid-template-columns: 16rem 5rem 16rem 16rem 5rem 16rem 5rem;
        margin               : 1rem;
        margin-left          : 3rem;
        padding              : 1rem;
      }
      .cuartos-uno {
        grid-row   : 1/2;
        grid-column: 1/2;
      }
      .semifinal-uno {
        grid-row   : 2/3;
        grid-column: 3/4;
      }
      .semifinal-dos {
        grid-row   : 6/7;
        grid-column: 3/4;
      }
      .cuartos-dos {
        grid-row   : 3/4;
        grid-column: 1/2;
      }
      .cuartos-tres {
        grid-row   : 5/6;
        grid-column: 1/2;
      }
      .cuartos-cuatro {
        grid-row   : 6/8;
        grid-column: 1/2;
      }
      .final {
        grid-row   : 4/5;
        grid-column: 4/5;
      }
      .ganador {
        grid-row   : 4/5;
        grid-column: 6/7;
      }
      .linea-color {
        color  : green;
        opacity: 1.25;
      }
      .linea-horizontal-uno {
        margin-top : 2.6rem;
        width      : 2.3rem;
        height     : 0.4rem;
      }
      .linea-horizontal-dos {
        margin-top : 14.51rem;
        margin-left: -5rem;
        width      : 2.4rem;
        height     : 0.4rem;
      }
      .linea-horizontal-tres {
        margin     : -7.3rem;
        margin-left: -3rem;
        border     : none;
        border-left: 0.1rem solid hsla(200, 10%, 50%,100);
        width      : 2.99rem;
        height     : 0.4rem;
      }
      .linea-horizontal-cuatro {
        margin     : 26.6rem;
        margin-left: -21rem;
        border     : none;
        border-left: 0.1rem solid hsla(200, 10%, 50%,100);
        width      : 2.99rem;
        height     : 0.4rem;
      }
      .linea-horizontal-cinco {
        margin     : 26.7rem;
        margin-left: -21rem;
        border     : none;
        border-left: 0.1rem solid hsla(200, 10%, 50%,100);
        width      : 3.1rem;
        height     : 0.4rem;
      }
      .linea-horizontal-seis {
        margin     : -33rem;
        margin-left: -17.9rem;
        border     : none;
        border-left: 0.1rem solid hsla(200, 10%, 50%,100);
        width      : 1.9rem;
        height     : 0.4rem;
      }
      .linea-horizontal-siete {
        border     : none;
        border-left: 0.1rem solid hsla(200, 10%, 50%,100);
        margin     : 8.6rem;
        margin-left: -16rem;
        width      : 2.1rem;
        height     : 0.4rem;
      }
      .linea-horizontal-ocho {
        margin     : 26.6rem;
        margin-left: 37rem;
        border     : none;
        border-left: 0.1rem solid hsla(200, 10%, 50%,100);
        width      : 2.1rem;
        height     : 0.4rem;
      }
      .linea-horizontal-nueve {
        margin     : 14.6rem;
        margin-left: 23rem;
        border     : none;
        border-left: 0.1rem solid hsla(200, 10%, 50%,100);
        width      : 2.9rem;
        height     : 0.4rem;
      }
      .linea-horizontal-diez {
        margin     : 14.6rem;
        margin-left: 21rem;
        border     : none;
        border-left: 0.1rem solid hsla(200, 10%, 50%,100);
        width      : 5rem;
        height     : 0.4rem;
      }
      .linea-vertical-uno {
        margin     : -1.3rem;
        margin-left: 2rem;
        border     : none;
        border-left: 0.1rem solid hsla(200, 10%, 50%,100);
        width      : 0.4rem;
        height     : 12.2rem;
      }
      .linea-vertical-dos {
        margin     : -27rem;
        margin-left: -18.3rem;
        border     : none;
        border-left: 0.1rem solid hsla(200, 10%, 50%,100);
        width      : 0.4rem;
        height     : 12.2rem;
      }
      .linea-vertical-tres {
        margin-top : 8.6rem;
        margin-left: -35rem;
        border     : none;
        border-left: 0.1rem solid hsla(200, 10%, 50%,100);
        width      : 0.4rem;
        height     : 24.4rem;
      }
      .icono-final {
        grid-row   : 3/4;
        grid-column: 6/7;
        margin-left: 10.7rem;
        margin-top : 0.4rem;
      }
      .icono-cup {
        font-size    : 5rem;
        color        : #ffc600;
      }
      .ver-resultados {
        grid-row     : 1/2;
        grid-column   : 6/7;
      }
    `
  ]
})
export class GrillaOchoComponent implements OnInit {
  display       : boolean = false;
  tablaJugadores: Jugadores[] = [
    {
      equipo: 'chacha',
      jugador1: 'nicolas',
      jugador2: 'mati',
      set1: '6-0',
      set2: '6-0',
      set3: '6-0',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
