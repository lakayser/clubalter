import { Component, OnInit } from '@angular/core';
import { HorasTomadas } from 'src/app/modelos/horastomadas';
import { HorastomadasService } from 'src/app/servicios/horastomadas.service';


@Component({
  selector: 'app-historial-reservas',
  templateUrl: './historial-reservas.component.html',
  styleUrls: ['./historial-reservas.component.css']
})
export class HistorialReservasComponent implements OnInit {
  
  filterPost= '';

  Reserva: HorasTomadas[];
 
 
  constructor(private horatomadaService: HorastomadasService){}
  
  
  
  ngOnInit(): void {
    this.getHoras();
  }

  getHoras(){
    this.horatomadaService.getHoraTomada().subscribe((res)=>{
      this.Reserva=res;
      console.log(res);
    })
  }
}
