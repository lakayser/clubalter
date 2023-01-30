import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmparejadosTorneo } from '../../interfaces/emparejados.interface';

@Component({
  selector: 'app-bracket-ocho-ronda-uno',
  templateUrl: './bracket-ocho-ronda-uno.component.html',
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
        grid-template-rows   : 5rem 12rem 8rem 8rem;
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
export class BracketOchoRondaUnoComponent {

  @Input() emparejados!: EmparejadosTorneo[];

  display          : boolean = false;
  idEquipo        !: string;
  idEquipoRival   !: string;
  participantesForm: FormGroup = this.fb.group(
    {
      setsPrimeraRonda: this.fb.group(
        {
          set1: [],
          set2: [],
          set3: [],
        },
      ),

      setsPrimeraRondaRival: this.fb.group(
        {
          set1: [],
          set2: [],
          set3: [],
        },
      ),
    },
  );

  constructor(private fb: FormBuilder) { }

  getDatesEmparejados(emp: EmparejadosTorneo) {
    this.getResultadosSets(emp);
    this.getIdEquipos(emp);
    this.display = true;
  }

  getResultadosSets(emp: EmparejadosTorneo) {
    this.participantesForm.get('setsPrimeraRonda')?.get('set1')?.patchValue(
      emp.setsPrimeraRonda[0],
    );
    this.participantesForm.get('setsPrimeraRonda')?.get('set2')?.patchValue(
      emp.setsPrimeraRonda[1],
    );
    this.participantesForm.get('setsPrimeraRonda')?.get('set3')?.patchValue(
      emp.setsPrimeraRonda[2],
    );
    this.participantesForm.get('setsPrimeraRondaRival')?.get('set1')?.patchValue(
      emp.setsPrimeraRondaRival[0],
    );
    this.participantesForm.get('setsPrimeraRondaRival')?.get('set2')?.patchValue(
      emp.setsPrimeraRondaRival[1],
    );
    this.participantesForm.get('setsPrimeraRondaRival')?.get('set3')?.patchValue(
      emp.setsPrimeraRondaRival[2],
    );
  }

  getIdEquipos(emp: EmparejadosTorneo) {
    this.idEquipo = emp._id;
    this.idEquipoRival = emp._idRival;
  }

}
