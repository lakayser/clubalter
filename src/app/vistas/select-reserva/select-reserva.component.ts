import { Component, OnInit } from '@angular/core';
import { HorastomadasService } from 'src/app/servicios/horastomadas.service';
import {HorarioCanchaService} from 'src/app/servicios/horario-cancha.service';
import { CanchasService } from 'src/app/servicios/canchas.service';
import { CargamasivaService } from 'src/app/servicios/cargamasiva.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { HorasmasivasService } from 'src/app/servicios/horasmasivas.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-select-reserva',
  templateUrl: './select-reserva.component.html',
  styleUrls: ['./select-reserva.component.css']
})
export class SelectReservaComponent implements OnInit {
  cosa: any={};
  reservaForm!: FormGroup;

  constructor(private readonly fb:FormBuilder,private router: Router, private route:ActivatedRoute ,public cargamasivaService:CargamasivaService, public horasmasivasService: HorasmasivasService ,public horastomadasService:HorastomadasService,public horariocanchaService: HorarioCanchaService, public canchasService:CanchasService) {

   }
  disponible="table-success";
  noDisponible="table-danger";
   public horatomada: Array<any> =[]


  ngOnInit(): void {
    this.getHoraTomada();
    this.getCanchas();
    this.getCargaMasiva();
    let BN = this.route.snapshot.paramMap.get('id');
    this.cosa = BN;
    console.log(this.cosa)

    this.route.paramMap.subscribe(params => {
      var id = params.get('id');
      this.getID(id);
    });

    this.reservaForm =this.initForm();

  }
  onSubmit():void{
    this.horastomadasService.createHoraTomada(this.reservaForm.value).subscribe((res)=>{
       console.log(res);
    console.log(this.reservaForm.value);
    this.getHoraTomada();
    this.reservaForm.reset();

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


  initForm(): FormGroup {
    return this.fb.group({
      cancha: [this.cosa, [Validators.required, Validators.minLength(5)]],
      rut: ['', [Validators.required, Validators.minLength(5)]],
      horascanchas: ['', [Validators.required]]

    })
  }

  addReserva(form:NgForm){
    this.horastomadasService.createHoraTomada(form.value).subscribe((res)=>{
      // console.log(res);
      form.reset();
    })
  }

  getID(id: any){
    this.canchasService.postReserva(id).subscribe((res:any)=>{
      this.canchasService.cancha=res;
      // console.log(res);
    })
  }


  getCargaMasiva(){
    this.cargamasivaService.getCargaMasiva().subscribe((res)=>{
      this.cargamasivaService.cargamasi = res;
      // console.log(res);

    })
  }
  getCanchas(){
    this.canchasService.getCanchas().subscribe((res)=>{
      this.canchasService.cancha= res;
      // console.log(res)

    })
  }

getHoraTomada(){
  this.horastomadasService.getHoraTomada().subscribe((res)=>{
    this.horastomadasService.horatomada=res;
    // console.log(res);

  })

}

deleteHoraTomada(id: any){
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  Swal.fire({
    title: 'Estas seguro que deseas elimianr este registro?',
    text: "No podras revertir esta accion",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Si, Eliminar!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.horastomadasService.deleteHoraTomada(id).subscribe(
        (res)=>{this.getHoraTomada();
          Swal.fire(
            'Eliminado!',
            'Reserva Eliminada Con exito',
            'success'
          )})
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelado',
        'hora agendada a salvo',
        'error'
      )
    }
  })
  // if(confirm('Estas seguro de eliminar esta hora reservada?')){
  //   this.horastomadasService.deleteHoraTomada(id).subscribe(
  //     (res)=>{
  //       this.getHoraTomada();
  //   },
  //   (err)=>console.log(err)
  //   );
  // }
}



 // getActivo(){
  //   this.usuariosService.getActivo().subscribe((resp)=>{
  //     this.usuariosService.nombre =resp;
  //     console.log('respuesta'+ resp)

  //   })
  // }



}
