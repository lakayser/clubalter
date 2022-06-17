import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CanchasService } from 'src/app/servicios/canchas.service';
import {HorarioCanchaService} from 'src/app/servicios/horario-cancha.service'
import { HorasmasivasService } from 'src/app/servicios/horasmasivas.service';
import { CargamasivaService } from 'src/app/servicios/cargamasiva.service';
import { Cancha } from 'src/app/modelos/canchas';


@Component({
  selector: 'app-canchas-crud',
  templateUrl: './canchas-crud.component.html',
  styleUrls: ['./canchas-crud.component.css']
})
export class CanchasCrudComponent implements OnInit {

  constructor(public canchasService: CanchasService, public horariocanchaService: HorarioCanchaService, public horasmasivasService: HorasmasivasService, public cargamasivaService: CargamasivaService) { }

  ngOnInit(): void {
    this.getCanchas();
  
  }
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
  
  deleteCancha(_id: any){
    if(confirm('Esta seguro que desea eliminar esta cancha?')){
      this.canchasService.deleteCanchas(_id).subscribe(
        (res)=>{
          this.getCanchas();
        },
        (err)=> console.log(err)
      );
    }
  }
  addHorasCancha(form:NgForm){
    this.horasmasivasService.createHorasMasivas(form.value).subscribe((res)=>{
      console.log(res);
      form.reset();
      
    })
  }

}
