import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Participantes } from '../../interfaces/participantes.interface';
import { InscritosService } from '../../services/inscritos.service';

@Component({
  selector: 'app-cuadros',
  templateUrl: './cuadros.component.html',
  styles: [
  ]
})
export class CuadrosComponent implements OnInit {

  participantesRondaUno!: Participantes[];

  constructor(
    private inscritosService: InscritosService,
    private activatedRoute  : ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.inscritosService.listarInscritos(id))
      )
      .subscribe(inscritos => {
        this.participantesRondaUno = [
          {
            _id             : inscritos[0]._id,
            equipo          : inscritos[0].nombreEquipo,
            jugadores       : inscritos[0].nombreJugador1 + ' / ' + 
                              inscritos[0].nombreJugador2,
            setsGanados     : inscritos[0].setGanado,
            setsPrimeraRonda: [
              inscritos[0].setPrimeraRonda?.[0],
              inscritos[0].setPrimeraRonda?.[1],
              inscritos[0].setPrimeraRonda?.[2],
            ],
            setsSegundaRonda: [
              inscritos[0].setSegundaRonda?.[0],
              inscritos[0].setSegundaRonda?.[1],
              inscritos[0].setSegundaRonda?.[2],
            ],

            _idRival             : inscritos[1]._id,
            equipoRival          : inscritos[1].nombreEquipo,
            rivales              : inscritos[1].nombreJugador1 + ' / ' + 
                                   inscritos[1].nombreJugador2,
            setsGanadosRival     : inscritos[1].setGanado,
            setsPrimeraRondaRival: [
              inscritos[1].setPrimeraRonda?.[0],
              inscritos[1].setPrimeraRonda?.[1],
              inscritos[1].setPrimeraRonda?.[2],
            ],
            setsSegundaRondaRival: [
              inscritos[1].setSegundaRonda?.[0],
              inscritos[1].setSegundaRonda?.[1],
              inscritos[1].setSegundaRonda?.[2],
            ],
          },

          {
            _id             : inscritos[2]._id,
            equipo          : inscritos[2].nombreEquipo,
            jugadores       : inscritos[2].nombreJugador1 + ' / ' + 
                              inscritos[2].nombreJugador2,
            setsGanados     : inscritos[2].setGanado,
            setsPrimeraRonda: [
              inscritos[2].setPrimeraRonda?.[0],
              inscritos[2].setPrimeraRonda?.[1],
              inscritos[2].setPrimeraRonda?.[2],
            ],
            setsSegundaRonda: [
              inscritos[2].setSegundaRonda?.[0],
              inscritos[2].setSegundaRonda?.[1],
              inscritos[2].setSegundaRonda?.[2],
            ],

            _idRival             : inscritos[3]._id,
            equipoRival          : inscritos[3].nombreEquipo,
            rivales              : inscritos[3].nombreJugador1 + ' / ' + 
                                   inscritos[3].nombreJugador2,
            setsGanadosRival     : inscritos[3].setGanado,
            setsPrimeraRondaRival: [
              inscritos[3].setPrimeraRonda?.[0],
              inscritos[3].setPrimeraRonda?.[1],
              inscritos[3].setPrimeraRonda?.[2],
            ],
            setsSegundaRondaRival: [
              inscritos[3].setSegundaRonda?.[0],
              inscritos[3].setSegundaRonda?.[1],
              inscritos[3].setSegundaRonda?.[2],
            ],
          },

          {
            _id             : inscritos[4]._id,
            equipo          : inscritos[4].nombreEquipo,
            jugadores       : inscritos[4].nombreJugador1 + ' / ' + 
                              inscritos[4].nombreJugador2,
            setsGanados     : inscritos[4].setGanado,
            setsPrimeraRonda: [
              inscritos[4].setPrimeraRonda?.[0],
              inscritos[4].setPrimeraRonda?.[1],
              inscritos[4].setPrimeraRonda?.[2],
            ],
            setsSegundaRonda: [
              inscritos[4].setSegundaRonda?.[0],
              inscritos[4].setSegundaRonda?.[1],
              inscritos[4].setSegundaRonda?.[2],
            ],

            _idRival             : inscritos[5]._id,
            equipoRival          : inscritos[5].nombreEquipo,
            rivales              : inscritos[5].nombreJugador1 + ' / ' + 
                                   inscritos[5].nombreJugador2,
            setsGanadosRival     : inscritos[5].setGanado,
            setsPrimeraRondaRival: [
              inscritos[5].setPrimeraRonda?.[0],
              inscritos[5].setPrimeraRonda?.[1],
              inscritos[5].setPrimeraRonda?.[2],
            ],
            setsSegundaRondaRival: [
              inscritos[5].setSegundaRonda?.[0],
              inscritos[5].setSegundaRonda?.[1],
              inscritos[5].setSegundaRonda?.[2],
            ],
          },

          {
            _id             : inscritos[6]._id,
            equipo          : inscritos[6].nombreEquipo,
            jugadores       : inscritos[6].nombreJugador1 + ' / ' + 
                              inscritos[6].nombreJugador2,
            setsGanados     : inscritos[6].setGanado,
            setsPrimeraRonda: [
              inscritos[6].setPrimeraRonda?.[0],
              inscritos[6].setPrimeraRonda?.[1],
              inscritos[6].setPrimeraRonda?.[2],
            ],
            setsSegundaRonda: [
              inscritos[6].setSegundaRonda?.[0],
              inscritos[6].setSegundaRonda?.[1],
              inscritos[6].setSegundaRonda?.[2],
            ],

            _idRival             : inscritos[7]._id,
            equipoRival          : inscritos[7].nombreEquipo,
            rivales              : inscritos[7].nombreJugador1 + ' / ' + 
                                   inscritos[7].nombreJugador2,
            setsGanadosRival     : inscritos[7].setGanado,
            setsPrimeraRondaRival: [
              inscritos[7].setPrimeraRonda?.[0],
              inscritos[7].setPrimeraRonda?.[1],
              inscritos[7].setPrimeraRonda?.[2],
            ],
            setsSegundaRondaRival: [
              inscritos[7].setSegundaRonda?.[0],
              inscritos[7].setSegundaRonda?.[1],
              inscritos[7].setSegundaRonda?.[2],
            ],
          },
        ]
        console.log(this.participantesRondaUno);
      })
  }

}
