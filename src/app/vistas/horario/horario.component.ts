import { Component, OnInit } from '@angular/core';
import {HorariosService} from '../../servicios/horarios.service';
import {Horario} from '../../modelos/horario';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({ 
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {
  currentTime: any;

  constructor(private router: Router, public horariosService: HorariosService, public usuariosService:UsuariosService) { }

  public horarios: Array<Horario> = [];

  nodisponible=false;


  ngOnInit(): void {
    this.currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    this.getHorarios()
    this.getActivo();
  }
  getHorarios() {
    this.horariosService.getHorarios().subscribe((res) => {
        this.horariosService.horarios = res;
        
        console.log(res)
        
      }); 
  } 
  getActivo(){
    this.usuariosService.getActivo().subscribe((resp)=>{
      this.usuariosService.nombre =resp;
      console.log('respuesta'+ resp)
      
    })
  }

  addHorarios(form: NgForm) {
    if (form.value._id) {
      this.horariosService.putHorario(form.value).subscribe((res) => {
        console.log(res);
        this.getHorarios();
        form.reset();
      });
    } else {
      this.horariosService.createHorario(form.value).subscribe((res) => {
        console.log(res); 
        this.getHorarios();
        form.reset();
      });
    }
  }

  deleteHorarios(_id: any) {
    if (confirm('Esta seguro que desea eliminar este usuario?')) {
      this.horariosService.deleteHorario(_id).subscribe(
        (res) => {
          this.getHorarios();
        },
        (err) => console.log(err)
      );
    }

  }
  editHorarios(horarios: Horario) {
    this.horariosService.selectedHorario = horarios;
  }


}
