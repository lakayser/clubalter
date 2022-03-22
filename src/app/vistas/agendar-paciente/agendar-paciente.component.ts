import { Component, OnInit } from '@angular/core';
import { HoradisponibleService } from 'src/app/servicios/horadisponible.service';
import { HorariosService } from 'src/app/servicios/horarios.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-agendar-paciente',
  templateUrl: './agendar-paciente.component.html',
  styleUrls: ['./agendar-paciente.component.css']
})
export class AgendarPacienteComponent implements OnInit {

  constructor(public usuariosService:UsuariosService, public horadisponibleService:HoradisponibleService, public horariosService:HorariosService) { }

  ngOnInit(): void {
    this.getActivo();
    this.getHora();
    this.getUsuarios();
    this.getHorarios();
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
}
