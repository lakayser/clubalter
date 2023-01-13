import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TorneoCrear } from 'src/app/modelos/TorneoCrear';
import { TorneosService } from 'src/app/servicios/torneos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  Torneo: TorneoCrear[];
  TorneoD: TorneoCrear[];
  constructor(private router: Router, private torneoService:TorneosService) { }

  ngOnInit(): void {

    this.getTorneDis();
  }
  goDetalles(torneo:TorneoCrear){
    this.router.navigate(['mod/detalles-torneoAdm/',torneo._id])
  }
  getTorneDis(){
    this.torneoService.getTorneoDisponible().subscribe((res)=>{
      this.TorneoD=res;
      console.log('actuales',res);
    });
  }
}
