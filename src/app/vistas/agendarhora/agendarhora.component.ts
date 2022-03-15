import { Component, OnInit } from '@angular/core';
import { HoraDisponible } from 'src/app/modelos/horadisponible'; 
import { HoradisponibleService } from 'src/app/servicios/horadisponible.service';
import { HorariosService } from 'src/app/servicios/horarios.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-agendarhora',
  templateUrl: './agendarhora.component.html',
  styleUrls: ['./agendarhora.component.css']
})
export class AgendarhoraComponent implements OnInit {

  constructor(private route:Router, public horadisponibleService: HoradisponibleService, public horariosService:HorariosService) { }
  public hora: Array<HoraDisponible> = [];

  ngOnInit(): void {
    this.getHora()
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
  addHora(form: NgForm) {
  
      this.horadisponibleService.createHora(form.value).subscribe((res) => {
        console.log(res); 
        this.getHora();
        form.reset();
      });
    
  }
}
