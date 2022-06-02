import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CanchasService } from 'src/app/servicios/canchas.service';
import {HorarioCanchaService} from 'src/app/servicios/horario-cancha.service'
import { HorasmasivasService } from 'src/app/servicios/horasmasivas.service';
import { CargamasivaService } from 'src/app/servicios/cargamasiva.service';


@Component({
  selector: 'app-canchas-crud',
  templateUrl: './canchas-crud.component.html',
  styleUrls: ['./canchas-crud.component.css']
})
export class CanchasCrudComponent implements OnInit {

  constructor(public canchasService: CanchasService, public horariocanchaService: HorarioCanchaService, public horasmasivasService: HorasmasivasService, public cargamasivaService: CargamasivaService) { }

  ngOnInit(): void {
    this.getCanchas();
  
  }
  getCanchas(){
    this.canchasService.getCanchas().subscribe((res)=>{
      this.canchasService.cancha= res;
      console.log(res)
      
    })
  }
  addCancha(form:NgForm){
    this.canchasService.createCancha(form.value).subscribe((res)=>{
      console.log(res);
      this.getCanchas();
      form.reset();
      
    });
  }
  addHorasCancha(form:NgForm){
    this.horasmasivasService.createHorasMasivas(form.value).subscribe((res)=>{
      console.log(res);
      form.reset();
      
    })
  }

}
