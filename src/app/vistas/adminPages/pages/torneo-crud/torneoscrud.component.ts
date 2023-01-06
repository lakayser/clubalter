import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TorneosService } from 'src/app/servicios/torneos.service';
import { TorneoCrear } from 'src/app/modelos/TorneoCrear';
import { Torneo } from 'src/app/modelos/Torneo';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-torneoscrud',
  templateUrl: './torneoscrud.component.html',
  styleUrls: ['./torneoscrud.component.css']
})
export class TorneoscrudComponent implements OnInit {

  Torneo: TorneoCrear[];
  fecha             : Date = new Date();
  formateada = moment(this.fecha).format();
  pipe = new DatePipe('en-US');
 myFormattedDate = this.pipe.transform(this.fecha, 'yyyy-MM-ddTHH:mm:ss');
  constructor(private router: Router, private torneoService:TorneosService) { }

  ngOnInit(): void {
    this.getTorneos();
    console.log(this.fecha)
   
    console.log(this.myFormattedDate)
  }

  goDetalles(torneo:TorneoCrear){
    this.router.navigate(['mod/detalles-torneoAdm/',torneo._id])
  }
  getTorneos(){
    this.torneoService.getTorneos().subscribe((res)=>{
      this.Torneo=res;
      console.log(res);
    });
  }
}
