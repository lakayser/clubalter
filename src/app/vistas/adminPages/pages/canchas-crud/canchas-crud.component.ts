import { Component, OnInit } from '@angular/core';
import { CanchasService } from 'src/app/servicios/canchas.service';
import { HorarioCanchaService } from 'src/app/servicios/horario-cancha.service'
import { HorasmasivasService } from 'src/app/servicios/horasmasivas.service';
import { CargamasivaService } from 'src/app/servicios/cargamasiva.service';
import { Cancha } from 'src/app/modelos/canchas';
import Swal from 'sweetalert2';
import { UntypedFormBuilder, UntypedFormGroup, NgForm, Validators } from '@angular/forms';



@Component({
  selector: 'app-canchas-crud',
  templateUrl: './canchas-crud.component.html',
  styleUrls: ['./canchas-crud.component.css']
})
export class CanchasCrudComponent implements OnInit {
  cosa: any = {};
  idcancha= '';
  canchasForm!: UntypedFormGroup;
  horasForm!: UntypedFormGroup;

  display: boolean = false;

  constructor(private readonly fb:UntypedFormBuilder, public canchasService: CanchasService, public horariocanchaService: HorarioCanchaService, public horasmasivasService: HorasmasivasService, public cargamasivaService: CargamasivaService) { }

  ngOnInit(): void {
    this.getCanchas();
    this.canchasForm=this.initForm();
    this.horasForm=this.initForm2();
    
  }
  showDialog(cancha: Cancha) {
    this.display = true;
    this.canchasService.selectedCancha = cancha;
    console.log(cancha)

  }

  initForm(): UntypedFormGroup{
    return this.fb.group({
      name: ['',[Validators.required, Validators.minLength(5)]],
      rangoHorario: ['', [Validators.required]]
    })
  }
  initForm2(): UntypedFormGroup{
    return this.fb.group({
      cancha: ['',[Validators.required]],
      fechaComienzo: ['',[Validators.required]],
      fechaTermino: ['',[Validators.required]],
      precio: ['',[Validators.required]]
    })
  }
  agregarHoras(){
    console.log(this.horasForm.value)
    this.horasmasivasService.createHorasMasivas(this.horasForm.value).subscribe((res) => {
      console.log(res);
      this.horasForm.reset();
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
    })
  }

  onSubmit(){
    this.canchasService.createCancha(this.canchasForm.value).subscribe((res) => {
      console.log(res);
      this.canchasForm.reset();
      this.getCanchas();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: res ,
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: true,
      })
      },
      err => { Swal.fire({
        icon: 'error',
        title: 'Error',
        text: err.error.message,
        timer:2500
      }); }
      )
  
    }
    editarCancha(form: NgForm){
      if (form.value._id) {
        this.canchasService.putCanchas(form.value).subscribe((res) => {
          console.log(res);
          this.getCanchas();
          form.reset();
          this.display = false;
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: res ,
            showConfirmButton: false,
            timer: 1200,
            timerProgressBar: true,
          })
  
        },
        err => { Swal.fire({
          icon: 'error',
          title: 'Error',
          text: err.error.message,
          timer:2500
        }); }
        );
      }
    }
  getCanchas() {
    this.canchasService.getCanchas().subscribe((res) => {
      this.canchasService.cancha = res;
      // console.log(res)

    })
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
    }, err => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: err.error,
        timer: 2500
      });
    })
  }

}
