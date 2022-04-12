import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-canchas-reservar',
  templateUrl: './canchas-reservar.component.html',
  styleUrls: ['./canchas-reservar.component.css']
})
export class CanchasReservarComponent implements OnInit {
  constructor(public usuariosService:UsuariosService) { }

  ngOnInit(): void {
  }

  getActivo(){
    this.usuariosService.getActivo().subscribe((resp)=>{
      this.usuariosService.nombre =resp;
      console.log('respuesta'+ resp)
      
    })
  }
}
