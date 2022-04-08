import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { OcupationService } from 'src/app/servicios/ocupation.service';
import {Ocupation} from '../../modelos/ocupation'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-ocupation',
  templateUrl: './ocupation.component.html',
  styleUrls: ['./ocupation.component.css']
})
export class OcupationComponent implements OnInit {

  constructor(private router: Router, public usuariosService:UsuariosService,  public ocupationService:OcupationService, public servicioService:ServicioService) { }

  public ocupation: Array<any> = [];

  ngOnInit(): void {
    this.getActivo();
    this.getOcupation();
    this.getServicio();
  }
  getOcupation(){
    this.ocupationService.getOcupation().subscribe((res)=>{
      this.ocupationService.ocupa=res;
      console.log('ocupation'+res);
      
    })
  }
  addOcupation(form: NgForm){
    this.ocupationService.createOcupation(form.value).subscribe((res)=>{
      console.log(res);
      this.getOcupation();
      form.reset();
      
    })
  }
  getActivo(){
    this.usuariosService.getActivo().subscribe((resp)=>{
      this.usuariosService.nombre =resp;
      console.log('respuesta'+ resp)
      
    })
  }
  getServicio(){
    this.servicioService.getServicios().subscribe((res)=>{
      this.servicioService.serv = res;
      console.log(res);
    })
  }
  addServicio(form: NgForm){
    this.servicioService.createServicios(form.value).subscribe((res)=>{
      console.log(res);
      this.getServicio();
      form.reset();
      
    })
  }


}
