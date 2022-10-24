import { Component, OnInit } from '@angular/core';
import { HorasSemana } from '../../interface/horas-interface';
import { HorasService } from '../../services/horas.service';

@Component({
  selector: 'app-horas-calendario',
  templateUrl: './horas-calendario.component.html',
  styles: [
    `
      li {
        list-style: none;
      }
      .diasDisp {
        background-color: #33CC86;
        border-radius: 0.4rem;
        box-shadow: 0rem 0.1rem 0.1rem #303030;
      }
      .diasNoDisp{
        background-color: #E4E4E4;
        border-radius: 0.4rem;
        box-shadow: 0rem 0.1rem 0.1rem #303030;
      }
      span {
      font-size: 0.8rem;
      }
      .textDisp {
        font-size: 0.7rem;
      }
    `
  ],
})
export class HorasCalendarioComponent implements OnInit {

  horas: HorasSemana[] = [];

  constructor( private horasService: HorasService ) { }

  ngOnInit(): void {
    this.horasService.verHoras( 'Cancha 2' )
      .subscribe( resp => {
        console.log( 'probando', resp );
      });
  }

  verCanchas( cancha: string ) {
    console.log( 'la cancha', cancha );
    this.horasService.verHoras( cancha )
      .subscribe( ( horas ) =>{
        this.horas = horas;
        console.log( this.horas );
      }, ( err ) =>{
        console.log( 'El error', err );
        this.horas = [];
      });
  }

}
