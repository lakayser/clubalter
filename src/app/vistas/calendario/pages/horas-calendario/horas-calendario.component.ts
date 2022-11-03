import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
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
  hora              : string;

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
        console.log( this.editarHoras );
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
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Esta seguro de anular esta hora?',
      text: "No se podran revertir los cambios!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, anular!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.editarHorasService.deleteHoraTomada( this.id )
          .subscribe( resp => {
            this.verCanchas( this.cancha );
            swalWithBootstrapButtons.fire(
              'Hora anulada!',
              'La hora a sido anulada',
              'success'
            )
          })
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
  }

  obtenerHora( hora: string ) {
    this.hora = hora;
    console.log( this.hora );
  }

  agendarCancha( form: NgForm ) {
  }

}
