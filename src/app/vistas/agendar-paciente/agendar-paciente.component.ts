import { Component, OnInit } from '@angular/core';
import { HoradisponibleService } from 'src/app/servicios/horadisponible.service';
import { HorariosService } from 'src/app/servicios/horarios.service';
import { OcupationService } from 'src/app/servicios/ocupation.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { ReservaService } from 'src/app/servicios/reserva.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Ocupation } from 'src/app/modelos/ocupation';
import { Usuario } from 'src/app/modelos/usuario';

@Component({
  selector: 'app-agendar-paciente',
  templateUrl: './agendar-paciente.component.html',
  styleUrls: ['./agendar-paciente.component.css']
})
export class AgendarPacienteComponent implements OnInit {
  public selectedOcupation: Ocupation = {_id: '', name: ''};
  public especilidad: Ocupation[];
  public usuarios:Usuario[];

  constructor(public usuariosService:UsuariosService, public horadisponibleService:HoradisponibleService, public horariosService:HorariosService, public ocupationService:OcupationService, public reservaService:ReservaService) { }

  formulario1 = new FormGroup({
    userName : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    this.getActivo();
    this.getHora();
    this.getUsuarios();
    this.getHorarios();
    this.getOcupation();
    this.getReserva();
    }

    getOcupation(){
      this.ocupationService.getOcupation().subscribe((res)=>{
        this.ocupationService.ocupa=res;
        console.log('ocupation'+res);
        
      })
    }
  getActivo(){
    this.usuariosService.getActivo().subscribe((resp)=>{
      this.usuariosService.nombre =resp;
      console.log('respuesta'+ resp)
      
    })
  }
  getUsuarios() {
    this.usuariosService.getUsuarios().subscribe((res) => {
        this.usuariosService.users = res;
      }); 
  } 
  getHorarios() {
    this.horariosService.getHorarios().subscribe((res) => {
        this.horariosService.horarios = res;
      
        console.log(res)
        
      }); 
  } 
  getHora() {
    this.horadisponibleService.getHora().subscribe((res) => {
        this.horadisponibleService.hora = res;
        console.log(res)
      }); 
  }

  addReserva(form:NgForm){
    this.reservaService.createReserva(form.value).subscribe((res)=>{
      console.log(res);
      this.getReserva();
      form.reset();
    })
  }

  getReserva(){
    this.reservaService.getReserva().subscribe((res)=>{
      this.reservaService.reser = res;
      console.log(res)
      
    })
  }
}
