import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CanchasService } from 'src/app/servicios/canchas.service';
import { HorarioCanchaService } from 'src/app/servicios/horario-cancha.service'
import { HorasmasivasService } from 'src/app/servicios/horasmasivas.service';
import { CargamasivaService } from 'src/app/servicios/cargamasiva.service';
import { Cancha } from 'src/app/modelos/canchas';
import Swal from 'sweetalert2';
import { responseI } from 'src/app/modelos/response.interface';


@Component({
  selector: 'app-canchas-crud',
  templateUrl: './canchas-crud.component.html',
  styleUrls: ['./canchas-crud.component.css']
})
export class CanchasCrudComponent implements OnInit {
  cosa: any = {};
  constructor(public canchasService: CanchasService, public horariocanchaService: HorarioCanchaService, public horasmasivasService: HorasmasivasService, public cargamasivaService: CargamasivaService) { }

  ngOnInit(): void {
    this.getCanchas();
    
  }
  getCanchas() {
    this.canchasService.getCanchas().subscribe((res) => {
      this.canchasService.cancha = res;
      // console.log(res)

    })
  }
  addCancha(form: NgForm) {
    if (form.value._id) {
      this.canchasService.putCanchas(form.value).subscribe((res) => {
        console.log(res);
        this.getCanchas();
        form.reset();

      });
    } else {
      this.canchasService.createCancha(form.value).subscribe((res) => {
        console.log(res);
        this.getCanchas();
        form.reset();

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: res,
          showConfirmButton: false,
          timer: 1200,
          timerProgressBar: true,


        })
      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: err.error,
          timer: 2500
        });
      });
    }
  }

  editCancha(cancha: Cancha) {
    this.canchasService.selectedCancha = cancha;
  }

  deleteCancha(_id: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    Swal.fire({
      title: 'Estas seguro que deseas elimianr esta cancha?',
      text: "No podras revertir esta accion",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.canchasService.deleteCanchas(_id).subscribe(
          (res) => {
            this.getCanchas();
            Swal.fire(
              'Eliminado!',
              'Cancha Eliminada Con exito',
              'success'
            )
          },)
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Cancha a salvo',
          'error'
        )
      }
    })
  }


  addHorasCancha(form: NgForm) {
    this.horasmasivasService.createHorasMasivas(form.value).subscribe((res) => {

      console.log(res);
      form.reset();

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: res,
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: true,


      })
    })
  }

}
