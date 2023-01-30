import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TorneoCrear } from 'src/app/modelos/TorneoCrear';
import { MailService } from 'src/app/servicios/mail.service';
import { TorneosService } from 'src/app/servicios/torneos.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
 
  Torneo: TorneoCrear[];
  TorneoD: TorneoCrear[];
  constructor(private router: Router, private torneoService:TorneosService) { }

  ngOnInit(): void {

    this.getTorneDis();
  }
  goDetalles(torneo:TorneoCrear){
    this.router.navigate(['mod/detalles-torneoAdm/',torneo._id])
  }
  goRegistro(){
    this.router.navigate(['auth/registerJugador/'])
  }
  getTorneDis(){
    this.torneoService.getTorneoDisponible().subscribe((res)=>{
      this.TorneoD=res;
      console.log('actuales',res);
    });
  }

}
