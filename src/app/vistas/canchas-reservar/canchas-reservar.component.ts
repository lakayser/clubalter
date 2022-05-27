import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { HorastomadasService } from 'src/app/servicios/horastomadas.service';
import {HorarioCanchaService} from 'src/app/servicios/horario-cancha.service';
import { CanchasService } from 'src/app/servicios/canchas.service';
import { CargamasivaService } from 'src/app/servicios/cargamasiva.service';
import { NgForm } from '@angular/forms';
import { HorasmasivasService } from 'src/app/servicios/horasmasivas.service';
@Component({
  selector: 'app-canchas-reservar',
  templateUrl: './canchas-reservar.component.html',
  styleUrls: ['./canchas-reservar.component.css']
})
export class CanchasReservarComponent implements OnInit {
  constructor(public cargamasivaService:CargamasivaService, public horasmasivasService: HorasmasivasService ,public horastomadasService:HorastomadasService,public horariocanchaService: HorarioCanchaService, public canchasService:CanchasService) { }
  disponible="table-success";
  noDisponible="table-danger";
  ngOnInit(): void {
    this.getHoraTomada();
    this.getHoraCancha();
    this.getCanchas();
  }

  addHoraCancha(form:NgForm){
    this.horasmasivasService.createHorasMasivas(form.value).subscribe((res)=>{
      console.log(res);
      form.reset();
      
    })
  }

  getCargaMasiva(){
    this.cargamasivaService.getCargaMasiva().subscribe((res)=>{
      this.cargamasivaService.cargamasi = res;
      console.log(res);
      
    })
  }

  getHoraCancha(){
    this.horariocanchaService.getHorarioCancha().subscribe((res)=>{
      this.horariocanchaService.horacancha = res;
      console.log(res);
    })
  }
  getCanchas(){
    this.canchasService.getCanchas().subscribe((res)=>{
      this.canchasService.cancha= res;
      console.log(res)
      
    })
  }
 
getHoraTomada(){
  this.horastomadasService.getHoraTomada().subscribe((res)=>{
    this.horastomadasService.horatomada=res;
    console.log(res);
    
  })

}
 
 // getActivo(){
  //   this.usuariosService.getActivo().subscribe((resp)=>{
  //     this.usuariosService.nombre =resp;
  //     console.log('respuesta'+ resp)
      
  //   })
  // }



}
