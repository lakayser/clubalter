import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { HorastomadasService } from 'src/app/servicios/horastomadas.service';
import {HorarioCanchaService} from 'src/app/servicios/horario-cancha.service';
import { CanchasService } from 'src/app/servicios/canchas.service';
import { CargamasivaService } from 'src/app/servicios/cargamasiva.service';
import { NgForm } from '@angular/forms';
import { HorasmasivasService } from 'src/app/servicios/horasmasivas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-reserva',
  templateUrl: './select-reserva.component.html',
  styleUrls: ['./select-reserva.component.css']
})
export class SelectReservaComponent implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute ,public cargamasivaService:CargamasivaService, public horasmasivasService: HorasmasivasService ,public horastomadasService:HorastomadasService,public horariocanchaService: HorarioCanchaService, public canchasService:CanchasService) { }
  disponible="table-success";
  noDisponible="table-danger";
   public horatomada: Array<any> =[]

  ngOnInit(): void {
    this.getHoraTomada();
    this.getCanchas();
    this.getID('');
    // const id = this.route.snapshot.paramMap.get('cancha');
    
    // this.canchasService.postReserva(id)
    // .subscribe(cancha=>{
    //   this. = cancha,
    //   this.getID(cancha._id)
    // })
  }
   

  addReserva(form:NgForm){
    this.horastomadasService.createHoraTomada(form.value).subscribe((res)=>{
      console.log(res);
      form.reset();
      
    })
  }

  getID(_id: any){
    this.canchasService.postReserva(_id).subscribe((res:any)=>{
      this.canchasService.cancha=res;
      console.log(res);
      
    })
  }

  getCargaMasiva(){
    this.cargamasivaService.getCargaMasiva().subscribe((res)=>{
      this.cargamasivaService.cargamasi = res;
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
deleteHoraTomada(_id: any){
  if(confirm('Estas seguro de eliminar esta hora reservada?')){
    this.horastomadasService.deleteHoraTomada(_id).subscribe(
      (res)=>{this.getHoraTomada();
    },
    (err)=>console.log(err)
    );
  }
}


 
 // getActivo(){
  //   this.usuariosService.getActivo().subscribe((resp)=>{
  //     this.usuariosService.nombre =resp;
  //     console.log('respuesta'+ resp)
      
  //   })
  // }



}
