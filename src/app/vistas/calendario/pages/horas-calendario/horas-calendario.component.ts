import { Component, OnInit } from '@angular/core';
import { EditarHoras } from '../../interface/editar-horas-interface';
import { HorasSemana } from '../../interface/horas-interface';
import { EditarHorasService } from '../../services/editar-horas.service';
import { HorasService } from '../../services/horas.service';

@Component({
  selector: 'app-horas-calendario',
  templateUrl: './horas-calendario.component.html',
  styles: [
    `
      .fechaStyle {
        font-size: 1.5rem;
        letter-spacing: 0.2rem;
      }
      .arrowStyle {
        font-size: 2.6rem;
        transition: all 0.3s;
      }
      .arrowStyle:hover {
        cursor: pointer;
        text-shadow: 0.1rem 0.1rem 0.1rem #9FABEE;
        font-size: 2.8rem;
      }
    `
  ],
})
export class HorasCalendarioComponent implements OnInit {

  horas             : HorasSemana[] = [];
  cancha            : string = 'Cancha 1';
  fecha             : Date = new Date();
  id                : string = '';
  editarHoras       : EditarHoras[] = [];
  rut               : string;

  constructor(
    private horasService      : HorasService,
    private editarHorasService: EditarHorasService,
  ) { }

  ngOnInit(): void {
    this.horasService.verHoras( this.cancha )
      .subscribe( horas => {
        console.log( horas );
        this.horas = horas;
      });
    this.editarHorasService.editarHoras()
      .subscribe( horasEditar =>  {
        this.editarHoras = horasEditar;
      });
  }

  verCanchas( cancha: string ) {
    console.log( 'la cancha', cancha );
    this.horasService.verHoras( cancha )
      .subscribe( ( horas ) =>{
        this.horas = horas;
        this.horas.map( horas => {
          if( horas.dia === 'lunes' ) {
            this.fecha = horas.fecha;
          }
        });
        console.log( this.horas );
      }, ( err ) =>{
        console.log( 'El error', err );
        this.horas = [];
      });
    this.cancha = cancha;
  }

  next() {
    this.horasService.semana += 1;
    this.verCanchas( this.cancha );
    console.log( this.horasService.semana );
  }

  prev() {
    this.horasService.semana -= 1;
    this.verCanchas( this.cancha );
    console.log( this.horasService.semana );
  }


  obtenerId( id: string ) {
    this.id = id;
    console.log( this.editarHoras );
    this.editarHoras.map( editar => {
      editar.horascanchas.map( cancha => {
        if( cancha._id === this.id ) {
          this.rut = editar.rut;
        }
      })
    })
  }

  anularHora() {
    this.editarHorasService.deleteHoraTomada( this.id )
      .subscribe( resp => {
        this.verCanchas( this.cancha );
      })
  }

}
