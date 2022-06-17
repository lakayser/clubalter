import { Component, OnInit } from '@angular/core';
import { HorastomadasService } from 'src/app/servicios/horastomadas.service';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {

  constructor(public horastomadasService:HorastomadasService) { }
  filterPost='';
  disponible="table-success";
  noDisponible="table-danger";
  query:string = '';
  
 
  ngOnInit() {
    this.getHoraTomada();
  }
  getHoraTomada(){
    this.horastomadasService.getHoraTomada().subscribe((res)=>{
      this.horastomadasService.horatomada=res;
      console.log(res);
      
    })

}


}