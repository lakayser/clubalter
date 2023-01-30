import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { EmparejadosTorneo, EmparejadosTorneo2 } from '../../interfaces/emparejados.interface';
import { InscritosService } from '../../services/inscritos.service';

@Component({
  selector: 'app-bracket-ocho',
  templateUrl: './bracket-ocho.component.html',
  styles: [
  ]
})
export class BracketOchoComponent implements OnInit {

  indice             !: number; 
  indiceRival        !: number; 
  emparejados        !: EmparejadosTorneo[];
  emparejadosRondaDos!: EmparejadosTorneo2[];
  hayJugadores        : boolean = false;

  constructor(
    private inscritosService:InscritosService,
    private activateRoutes  :ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.setDatesObjectRondaUno();
    setTimeout (() => {
    this.setDatesObjectRondaDos(this.indice, this.indiceRival);
   }, 1000);
  }

  setDatesObjectRondaUno() {
    this.activateRoutes.params
      .pipe(
        switchMap(({ id }) => this.inscritosService.getEmparejados(id))
      )
      .subscribe(emparejados => {
        this.emparejados = [
          {
            _id             :emparejados[0]._id,
            equipo          :emparejados[0].nombreEquipo,
            jugadores       :emparejados[0].nombreJugador1 + ' / ' + emparejados[0].nombreJugador2,
            setsPrimeraRonda:[
              emparejados[0].setPrimeraRonda?.[0],
              emparejados[0].setPrimeraRonda?.[1],
              emparejados[0].setPrimeraRonda?.[2],
            ],
            setsGanados     :emparejados[0].setGanado,

            _idRival             :emparejados[1]._id,
            equipoRival          :emparejados[1].nombreEquipo,
            jugadoresRival       :emparejados[1].nombreJugador1 + ' / ' + emparejados[1].nombreJugador2,
            setsPrimeraRondaRival: [
              emparejados[1].setPrimeraRonda?.[0],
              emparejados[1].setPrimeraRonda?.[1],
              emparejados[1].setPrimeraRonda?.[2],
            ],
            setsGanadosRival     :emparejados[1].setGanado,
          },

          {
            _id             :emparejados[2]._id,
            equipo          :emparejados[2].nombreEquipo,
            jugadores       :emparejados[2].nombreJugador1 + ' / ' + emparejados[2].nombreJugador2,
            setsPrimeraRonda:[
              emparejados[2].setPrimeraRonda?.[0],
              emparejados[2].setPrimeraRonda?.[1],
              emparejados[2].setPrimeraRonda?.[2],
            ],
            setsGanados     :emparejados[2].setGanado,

            _idRival             :emparejados[3]._id,
            equipoRival          :emparejados[3].nombreEquipo,
            jugadoresRival       :emparejados[3].nombreJugador1 + ' / ' + emparejados[3].nombreJugador2,
            setsPrimeraRondaRival: [
              emparejados[3].setPrimeraRonda?.[0],
              emparejados[3].setPrimeraRonda?.[1],
              emparejados[3].setPrimeraRonda?.[2],
            ],
            setsGanadosRival     :emparejados[3].setGanado,
          },

          {
            _id             :emparejados[4]._id,
            equipo          :emparejados[4].nombreEquipo,
            jugadores       :emparejados[4].nombreJugador1 + ' / ' + emparejados[4].nombreJugador2,
            setsPrimeraRonda:[
              emparejados[4].setPrimeraRonda?.[0],
              emparejados[4].setPrimeraRonda?.[1],
              emparejados[4].setPrimeraRonda?.[2],
            ],
            setsGanados     :emparejados[4].setGanado,

            _idRival             :emparejados[5]._id,
            equipoRival          :emparejados[5].nombreEquipo,
            jugadoresRival       :emparejados[5].nombreJugador1 + ' / ' + emparejados[3].nombreJugador2,
            setsPrimeraRondaRival: [
              emparejados[5].setPrimeraRonda?.[0],
              emparejados[5].setPrimeraRonda?.[1],
              emparejados[5].setPrimeraRonda?.[2],
            ],
            setsGanadosRival     :emparejados[5].setGanado,
          },

          {
            _id             :emparejados[6]._id,
            equipo          :emparejados[6].nombreEquipo,
            jugadores       :emparejados[6].nombreJugador1 + ' / ' + emparejados[6].nombreJugador2,
            setsPrimeraRonda:[
              emparejados[6].setPrimeraRonda?.[0],
              emparejados[6].setPrimeraRonda?.[1],
              emparejados[6].setPrimeraRonda?.[2],
            ],
            setsGanados     :emparejados[6].setGanado,

            _idRival             :emparejados[7]._id,
            equipoRival          :emparejados[7].nombreEquipo,
            jugadoresRival       :emparejados[7].nombreJugador1 + ' / ' + emparejados[7].nombreJugador2,
            setsPrimeraRondaRival: [
              emparejados[7].setPrimeraRonda?.[0],
              emparejados[7].setPrimeraRonda?.[1],
              emparejados[7].setPrimeraRonda?.[2],
            ],
            setsGanadosRival     :emparejados[7].setGanado,
          },
        ];

        if(emparejados[0].setGanado === 2) {
          this.indice = 0;
          this.hayJugadores = true;
        }else if(emparejados[1].setGanado === 2) {
          this.indice = 1;
          this.hayJugadores = true;
        }else {
          this.hayJugadores = false;
        }
        if(emparejados[2].setGanado === 2) {
          this.indiceRival = 2;
          this.hayJugadores = true;
        }else if(emparejados[3].setGanado === 2) {
          this.indiceRival = 3;
          this.hayJugadores = true;
        }else {
          this.hayJugadores = false;
        }
      });
  }

  setDatesObjectRondaDos(indice: number, indiceRival: number) {
    this.activateRoutes.params
      .pipe(
        switchMap(({ id }) => this.inscritosService.getEmparejados(id))
      )
      .subscribe(emparejados => {
        if(this.hayJugadores === true) {
          this.emparejadosRondaDos = [
            {
              _id             :emparejados[indice]._id,
              equipo          :emparejados[indice].nombreEquipo,
              jugadores       :emparejados[indice].nombreJugador1 + ' / ' + emparejados[indice].nombreJugador2,
              setsSegundaRonda:[
                emparejados[indice].setPrimeraRonda?.[0],
                emparejados[indice].setPrimeraRonda?.[1],
                emparejados[indice].setPrimeraRonda?.[2],
              ],
              setsGanados     :emparejados[indice].setGanado,

              _idRival             :emparejados[indiceRival]._id,
              equipoRival          :emparejados[indiceRival].nombreEquipo,
              jugadoresRival       :emparejados[indiceRival].nombreJugador1 + ' / ' + emparejados[indiceRival].nombreJugador2,
              setsSegundaRondaRival: [
                emparejados[indiceRival].setPrimeraRonda?.[0],
                emparejados[indiceRival].setPrimeraRonda?.[1],
                emparejados[indiceRival].setPrimeraRonda?.[2],
              ],
              setsGanadosRival     :emparejados[indiceRival].setGanado,
            },
          ];
        }
          console.log(this.emparejadosRondaDos);
      })
  }

}
