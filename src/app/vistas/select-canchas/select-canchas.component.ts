import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CanchasService } from 'src/app/servicios/canchas.service';
import {HorarioCanchaService} from 'src/app/servicios/horario-cancha.service'
import { HorasmasivasService } from 'src/app/servicios/horasmasivas.service';
import { CargamasivaService } from 'src/app/servicios/cargamasiva.service';
import { Cancha } from 'src/app/modelos/canchas';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-canchas',
  templateUrl: './select-canchas.component.html',
  styleUrls: ['./select-canchas.component.css']
})
export class SelectCanchasComponent implements OnInit {
 

  constructor(private router: Router, private route: ActivatedRoute ,public canchasService: CanchasService, public horariocanchaService: HorarioCanchaService, public horasmasivasService: HorasmasivasService, public cargamasivaService: CargamasivaService) { }

  ngOnInit(): void {
    this.getCanchas();
  }

  // pasarcancha(form:NgForm){
  //   this.canchasService.postReserva(form.value).subscribe((res)=>{
  //     this.router.navigate(['/reservaselect', res])
  //     console.log(res)
      
  //   })
  // }
  onSelect(cancha:Cancha){
    this.router.navigate(['/reservaselect', cancha._id])
  }
  // goToVista(_id:any){
  //   this.router.navigate(['/reservaselect', _id])
  // }
  getCanchas(){
    this.canchasService.getCanchas().subscribe((res)=>{
      this.canchasService.cancha= res;
      console.log(res)
      
    })
  }
  addCancha(form:NgForm){
    if(form.value._id){
      this.canchasService.putCanchas(form.value).subscribe((res)=>{
        console.log(res);
        this.getCanchas();
        form.reset();
        
      });
    }else{
      this.canchasService.createCancha(form.value).subscribe((res)=>{
        console.log(res);
        this.getCanchas();
        form.reset();
    });
    }
  }

  editCancha(cancha: Cancha){
    this.canchasService.selectedCancha = cancha;
  }
  
  


}