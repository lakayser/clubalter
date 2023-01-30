import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Participantes } from '../../interfaces/participantes.interface';

@Component({
  selector: 'app-cuadro-ocho-ronda-uno',
  templateUrl: './cuadro-ocho-ronda-uno.component.html',
  styles: [
    `
      .grd {
        display              : grid;
        grid-auto-rows       : auto;
        grid-template-columns: 20rem 3rem 20rem 3rem 20rem;
      }
      .grd-primera-ronda {
        grid-column          : 1/2;
        display              : grid;
        grid-template-rows   : 8rem 11rem 8rem 8rem;
      }
      .grd-partidos {
        grid-column          : 1/2;
        display              : grid;
        grid-template-rows   : repeat(2, 3rem);
        grid-template-columns: 10rem 3rem 3rem 3rem;
      }
    `
  ]
})
export class CuadroOchoRondaUnoComponent implements OnInit {

  @Input() participantesRondaUno!:Participantes[];

  display              :boolean = false;
  nombreEquipo        !:string;
  nombreEquipoRival   !:string;
  nombreJugadores     !:string;
  nombreJugadoresRival!:string;
  set1Jugador         !:number;
  idJugadores         !:string;
  idJugadoresRival    !:string;
  participantesForm    :FormGroup = this.fb.group(
    {
      setsPrimeraRonda     :this.fb.group(
        {
          set1: [],
          set2: [],
          set3: [],
        },
      ),
      setsPrimeraRondaRival:this.fb.group(
        {
          set1: [],
          set2: [],
          set3: [],
        },
      ),
    },
  );

  constructor(
      private fb:FormBuilder,
    ) { }

  ngOnInit():void {
  }

  getDatesParticipantes(participantes:Participantes) {
    this.getNombresEquipo(participantes);
    this.getSets(participantes);
    this.getIds(participantes);
    this.display = true;
  }

  getNombresEquipo(participantes:Participantes) {
    this.nombreEquipo         = participantes.equipo;
    this.nombreEquipoRival    = participantes.equipoRival;
    this.nombreJugadores      = participantes.jugadores;
    this.nombreJugadoresRival = participantes.rivales;
  }

  getSets(participantes:Participantes) {
    this.participantesForm.get('setsPrimeraRonda')?.get('set1')?.patchValue(
      participantes.setsPrimeraRonda[0],
    );
    this.participantesForm.get('setsPrimeraRonda')?.get('set2')?.patchValue(
      participantes.setsPrimeraRonda[1],
    );
    this.participantesForm.get('setsPrimeraRonda')?.get('set3')?.patchValue(
      participantes.setsPrimeraRonda[2],
    );
    this.participantesForm.get('setsPrimeraRondaRival')?.get('set1')?.patchValue(
      participantes.setsPrimeraRondaRival[0],
    );
    this.participantesForm.get('setsPrimeraRondaRival')?.get('set2')?.patchValue(
      participantes.setsPrimeraRondaRival[1],
    );
    this.participantesForm.get('setsPrimeraRondaRival')?.get('set3')?.patchValue(
      participantes.setsPrimeraRondaRival[2],
    );
  }

  getIds(participantes:Participantes) {
    this.idJugadores = participantes._id;
    this.idJugadoresRival = participantes._idRival;
  }

}
