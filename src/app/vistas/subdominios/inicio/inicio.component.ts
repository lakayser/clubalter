import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TorneoCrear } from 'src/app/modelos/TorneoCrear';
import { MailService } from 'src/app/servicios/mail.service';
import { TorneosService } from 'src/app/servicios/torneos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  Torneo: TorneoCrear[];
  TorneoD: TorneoCrear[];
  reactiveForm: FormGroup;
  
  constructor(private router: Router, private torneoService:TorneosService, private mailservice:MailService, private formBuilder: FormBuilder) {
    this.reactiveForm = this.formBuilder.group({
      emailPersona: new FormControl('', [Validators.required, Validators.minLength(5), Validators.email]),
      subject: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required])
    });
   }

  ngOnInit(): void {

    this.getTorneDis();
  }
  goDetalles(torneo:TorneoCrear){
    this.router.navigate(['mod/detalles-torneoAdm/',torneo._id])
  }
  getTorneDis(){
    this.torneoService.getTorneoDisponible().subscribe((res)=>{
      this.TorneoD=res;
      console.log('actuales',res);
    });
  }
  goRegistro(){
    this.router.navigate(['auth/registerJugador/623c92c697790a694cdc6959'])
  }
  onSubmit(){
    this.mailservice.postEmail(this.reactiveForm.value).subscribe((res)=>{
      console.log(this.reactiveForm.value)
      this.reactiveForm.reset()
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'nos comunicaremos contigo a la brevedad!',
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: true,
      })
    })
  }
}
