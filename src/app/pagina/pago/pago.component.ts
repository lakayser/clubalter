import { Component, OnInit } from '@angular/core';
import { HorastomadasService } from 'src/app/servicios/horastomadas.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit { 

  constructor(public horastomadasService:HorastomadasService) { }
  filterPost='';
  disponible="table-success";
  noDisponible="table-danger";
  query:string = '';
  
  /*
  posts = [
    {
      "id": "12098789-1",
      "title": "cancha 1",
      "date": "dd/mm/mmm",
      "hora": "1:00 pm",
      "estado":"pagado"
    },
    {
      "id": "13678164-2",
      "title": "cancha 2",
      "date": "dd/mm/mmm",
      "hora": "5:00 pm",
      "estado":"no pagado"
    },
    {
      "id": "14567890-3",
      "title": "cancha 3",
      "date": "dd/mm/mmm",
      "hora": "4:00 pm",
      "estado":"pagado"
    },
    {
      "id": "20590567-1",
      "title": "cancha 4",
      "date": "dd/mm/mmm",
      "hora": "3:00 pm",
      "estado":"no pagado"
    },
    {
      "id": "13890489-6",
      "title": "cancha 5",
      "date": "dd/mm/mmm",
      "hora": "2:00 pm",
      "estado":"pagado"
    }
    

    
  ];
      */
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