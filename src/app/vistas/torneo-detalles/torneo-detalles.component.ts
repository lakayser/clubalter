import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TorneosService } from '../../servicios/torneos.service';
import { TorneoCrear } from 'src/app/modelos/TorneoCrear';

@Component({
  selector: 'app-torneo-detalles',
  templateUrl: './torneo-detalles.component.html',
  styleUrls: ['./torneo-detalles.component.css']
})
export class TorneoDetallesComponent implements OnInit {
  cosa: any={};
  Torneo: TorneoCrear[];

  constructor(private router: Router,  private torneoService:TorneosService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let BN = this.route.snapshot.paramMap.get('id');
    this.cosa = BN;
    console.log(this.cosa)
    
    this.route.paramMap.subscribe(params => {
      var id = params.get('id');
      this.getID(id);
     
    });
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
  
  getID(id:any){
    this.torneoService.getTorneosID(id).subscribe((res)=>{
      this.Torneo=res;
      console.log(res)
     for(let a of this.Torneo){
      for(let b of a.categoriaTorneo){
        console.log(b);
        let p = b.name
        console.log(p);
      }
     }
    })
  }
}
