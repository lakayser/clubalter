import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { HorastomadasService } from 'src/app/servicios/horastomadas.service';

@Component({
  selector: 'app-canchas-reservar',
  templateUrl: './canchas-reservar.component.html',
  styleUrls: ['./canchas-reservar.component.css']
})
export class CanchasReservarComponent implements OnInit {
  constructor(public usuariosService:UsuariosService, public horastomadasService:HorastomadasService) { }

  ngOnInit(): void {
    this.getHoraTomada();
  }

  getActivo(){
    this.usuariosService.getActivo().subscribe((resp)=>{
      this.usuariosService.nombre =resp;
      console.log('respuesta'+ resp)
      
    })
  }
getHoraTomada(){
  this.horastomadasService.getHoraTomada().subscribe((res)=>{
    this.horastomadasService.horatomada=res;
    console.log(res);
    
  })

}
 




}
