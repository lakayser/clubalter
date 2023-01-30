import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { InscritosService } from '../../services/inscritos.service';

@Component({
  selector: 'app-bracket-ocho-form',
  templateUrl: './bracket-ocho-form.component.html',
  styles: [
    `
      .grd-form {
        display              : grid;
        grid-template-rows   : repeat(5, 5rem);
        grid-template-columns: 19rem 20rem 20rem;
      }
    `
  ]
})
export class BracketOchoFormComponent implements OnInit {

  @Input() participantesForm!: FormGroup;
  @Input() idEquipo         !: string;
  @Input() idEquipoRival    !: string;

  constructor(
    private activateRouted  : ActivatedRoute,
    private inscritosService: InscritosService,
  ) { }

  ngOnInit(): void {
    this.activateRouted.params
      .pipe(
        switchMap(({ id }) => this.inscritosService.getEmparejados(id))
      )
      .subscribe(inscritos => {
      });
  }

  guardar() {
    this.getSetsPrimeraRonda(this.idEquipo, this.idEquipoRival);
    this.getSetsGanados(this.idEquipo, this.idEquipoRival);
  }

  getSetsPrimeraRonda(id: string, idRival: string) {
    this.inscritosService.resultadosSetsPrimeraRonda(
      id,
      this.participantesForm.get('setsPrimeraRonda')?.value,
    ).subscribe();

    this.inscritosService.resultadosSetsPrimeraRonda(
      idRival,
      this.participantesForm.get('setsPrimeraRondaRival')?.value,
    ).subscribe();
  }
  
  getSetsGanados(id: string, idRival: string) {
    if(
      this.participantesForm.get('setsPrimeraRonda')?.get('set1')?.value === 6     &&
      this.participantesForm.get('setsPrimeraRondaRival')?.get('set1')?.value <= 4      &&
      this.participantesForm.get('setsPrimeraRonda')?.get('set2')?.value === 6     &&
      this.participantesForm.get('setsPrimeraRondaRival')?.get('set2')?.value <= 4 ||
      this.participantesForm.get('setsPrimeraRonda')?.get('set1')?.value === 6     &&
      this.participantesForm.get('setsPrimeraRondaRival')?.get('set1')?.value <= 4      &&
      this.participantesForm.get('setsPrimeraRonda')?.get('set3')?.value === 6     &&
      this.participantesForm.get('setsPrimeraRondaRival')?.get('set3')?.value <= 4 ||
      this.participantesForm.get('setsPrimeraRonda')?.get('set2')?.value === 6     &&
      this.participantesForm.get('setsPrimeraRondaRival')?.get('set2')?.value <= 4      &&
      this.participantesForm.get('setsPrimeraRonda')?.get('set3')?.value === 6     &&
      this.participantesForm.get('setsPrimeraRondaRival')?.get('set3')?.value <= 4
  ){
    this.inscritosService.setsGanados(id, 2).subscribe();
  }else {
    this.inscritosService.setsGanados(id, 0).subscribe();
  }

    if(
      this.participantesForm.get('setsPrimeraRondaRival')?.get('set1')?.value === 6     &&
      this.participantesForm.get('setsPrimeraRonda')?.get('set1')?.value <= 4      &&
      this.participantesForm.get('setsPrimeraRondaRival')?.get('set2')?.value === 6     &&
      this.participantesForm.get('setsPrimeraRonda')?.get('set2')?.value <= 4 ||
      this.participantesForm.get('setsPrimeraRondaRival')?.get('set1')?.value === 6     &&
      this.participantesForm.get('setsPrimeraRonda')?.get('set1')?.value <= 4      &&
      this.participantesForm.get('setsPrimeraRondaRival')?.get('set3')?.value === 6     &&
      this.participantesForm.get('setsPrimeraRonda')?.get('set3')?.value <= 4 ||
      this.participantesForm.get('setsPrimeraRondaRival')?.get('set2')?.value === 6     &&
      this.participantesForm.get('setsPrimeraRonda')?.get('set2')?.value <= 4      &&
      this.participantesForm.get('setsPrimeraRondaRival')?.get('set3')?.value === 6     &&
      this.participantesForm.get('setsPrimeraRonda')?.get('set3')?.value <= 4
  ){
    this.inscritosService.setsGanados(idRival, 2).subscribe();
  }else {
    this.inscritosService.setsGanados(idRival, 0).subscribe();
  }
  }

}