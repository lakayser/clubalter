import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TorneoCrear } from 'src/app/modelos/TorneoCrear';
import { TorneosService } from 'src/app/servicios/torneos.service';

@Component({
  selector: 'app-iniciousercancha',
  templateUrl: './iniciousercancha.component.html',
  styleUrls: ['./iniciousercancha.component.css']
})
export class IniciousercanchaComponent implements OnInit {


  
  Torneo: TorneoCrear[];
  constructor(private router: Router, private torneoService:TorneosService) { }

  ngOnInit(): void {
    this.getTorneos();
  }
  getTorneos(){
    this.torneoService.getTorneos().subscribe((res)=>{
      this.Torneo=res;
      console.log(res);
    });
  }
  goDetalles(torneo:TorneoCrear){  
    this.router.navigate(['/canchaselbicho/TorneoDetalles',torneo._id])
  }
  
}
