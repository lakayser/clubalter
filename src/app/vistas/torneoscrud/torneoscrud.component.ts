import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TorneosService } from 'src/app/servicios/torneos.service';
import { TorneoCrear } from 'src/app/modelos/TorneoCrear';
import { Torneo } from 'src/app/modelos/Torneo';

@Component({
  selector: 'app-torneoscrud',
  templateUrl: './torneoscrud.component.html',
  styleUrls: ['./torneoscrud.component.css']
})
export class TorneoscrudComponent implements OnInit {

  Torneo: TorneoCrear[];

  constructor(private router: Router, private torneoService:TorneosService) { }

  ngOnInit(): void {
    this.getTorneos();
  }

  goDetalles(torneo:TorneoCrear){  
    this.router.navigate(['/canchaselbicho/TorneoDetalles',torneo._id])
  }
  onSelect(){
    this.router.navigate(['/canchaselbicho/CrearTorneo'])
  }
  getTorneos(){
    this.torneoService.getTorneos().subscribe((res)=>{
      this.Torneo=res;
      console.log(res);
    });
  }
}
 