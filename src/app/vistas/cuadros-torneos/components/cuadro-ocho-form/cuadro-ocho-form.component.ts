import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Participantes, Participantes2 } from '../../interfaces/participantes.interface';
import { InscritosService } from '../../services/inscritos.service';

@Component({
  selector: 'app-cuadro-ocho-form',
  templateUrl: './cuadro-ocho-form.component.html',
  styles: [
    `
      .grd-form {
        display              : grid;
        grid-template-rows   : repeat(5, 5rem);
        grid-template-columns: 20rem 20rem 20rem;
      }
    `
  ]
})
export class CuadroOchoFormComponent {

  @Input() nombreEquipo        !:string;
  @Input() nombreEquipoRival   !:string;
  @Input() nombreJugadores     !:string;
  @Input() nombreJugadoresRival!:string;
  @Input() participantesForm   !:FormGroup;
  @Input() idJugadores         !: string;
  @Input() idJugadoresRival    !: string;

  nombreEquiposRondaDos  !: string;
  nombreJugadoresRondaDos!: string;
  setsGanadosRondaDos    !: number;
  idRondaDos             !: string;
  set1RondaDos           !: number;
  set2RondaDos           !: number;
  set3RondaDos           !: number;
  participantesRondaDos   : Participantes2[] = [
    {
      _id             : this.idRondaDos,
      equipo          : this.nombreEquiposRondaDos,
      jugadores       : this.nombreJugadoresRondaDos,
      setsGanados     : this.setsGanadosRondaDos,
      setsSegundaRonda: [
        this.set1RondaDos,
        this.set2RondaDos,
        this.set3RondaDos,
      ],
    },
  ];

  constructor(
    private inscritosService:InscritosService,
  ) { }

  guardar() {
    this.getResultadosSets();
    this.getGanador();
  }

  getResultadosSets() {
    this.inscritosService.resultadosSets(
      this.idJugadores,
      this.participantesForm.get('setsPrimeraRonda')?.value,
    )
    .subscribe();

    this.inscritosService.resultadosSets(
      this.idJugadoresRival,
      this.participantesForm.get('setsPrimeraRondaRival')?.value,
    )
    .subscribe();
  }

  getGanador() {
    if(
      this.participantesForm.get('setsPrimeraRonda')?.get('set1')
        ?.value === 6 &&
      this.participantesForm.get('setsPrimeraRondaRival')?.get('set1')
        ?.value <= 4 &&
      this.participantesForm.get('setsPrimeraRonda')?.get('set2')
        ?.value === 6 && 
      this.participantesForm.get('setsPrimeraRondaRival')?.get('set2')
        ?.value <= 4 ||
      this.participantesForm.get('setsPrimeraRonda')?.get('set1')
        ?.value === 6 &&
      this.participantesForm.get('setsPrimeraRondaRival')?.get('set1')
        ?.value <= 4 &&
      this.participantesForm.get('setsPrimeraRonda')?.get('set3')
        ?.value === 6 && 
      this.participantesForm.get('setsPrimeraRondaRival')?.get('set3')
        ?.value <= 4 ||
      this.participantesForm.get('setsPrimeraRonda')?.get('set2')
        ?.value === 6 &&
      this.participantesForm.get('setsPrimeraRondaRival')?.get('set2')
        ?.value <= 4 &&
      this.participantesForm.get('setsPrimeraRonda')?.get('set3')
        ?.value === 6 && 
      this.participantesForm.get('setsPrimeraRondaRival')?.get('set3')
        ?.value <= 4
    ) { 
      this.inscritosService.setsGanados(this.idJugadores, 2).subscribe() 
      console.log(2);
    }else if(
      this.participantesForm.get('setsPrimeraRondaRival')?.get('set1')
        ?.value === 6 &&
      this.participantesForm.get('setsPrimeraRonda')?.get('set1')
        ?.value <= 4 &&
      this.participantesForm.get('setsPrimeraRondaRival')?.get('set2')
        ?.value === 6 && 
      this.participantesForm.get('setsPrimeraRonda')?.get('set2')
        ?.value <= 4 ||
      this.participantesForm.get('setsPrimeraRondaRival')?.get('set1')
        ?.value === 6 &&
      this.participantesForm.get('setsPrimeraRonda')?.get('set1')
        ?.value <= 4 &&
      this.participantesForm.get('setsPrimeraRondaRival')?.get('set3')
        ?.value === 6 && 
      this.participantesForm.get('setsPrimeraRonda')?.get('set3')
        ?.value <= 4 ||
      this.participantesForm.get('setsPrimeraRondaRival')?.get('set2')
        ?.value === 6 &&
      this.participantesForm.get('setsPrimeraRonda')?.get('set2')
        ?.value <= 4 &&
      this.participantesForm.get('setsPrimeraRondaRival')?.get('set3')
        ?.value === 6 && 
      this.participantesForm.get('setsPrimeraRonda')?.get('set3')
        ?.value <= 4
    ) {
      this.inscritosService.setsGanados(this.idJugadoresRival, 2).subscribe() 
      console.log(2);
    }
  }

}
