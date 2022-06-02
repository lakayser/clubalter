import { Component, OnInit, ViewChild } from '@angular/core';

import {BreakpointObserver} from '@angular/cdk/layout'


import { ApiService } from '../../servicios/api/api.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private observer: BreakpointObserver, public apiService: ApiService, public usuariosService: UsuariosService) {}

  


  ngOnInit(): void {
    this.getActivo();
  }

  getActivo(){
    this.usuariosService.getActivo().subscribe((resp)=>{
      this.usuariosService.nombre =resp;
      console.log('respuesta'+ resp)
      
    })
  }
  
}
