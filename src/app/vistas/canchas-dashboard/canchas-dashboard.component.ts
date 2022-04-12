import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-canchas-dashboard',
  templateUrl: './canchas-dashboard.component.html',
  styleUrls: ['./canchas-dashboard.component.css']
})
export class CanchasDashboardComponent implements OnInit {

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
