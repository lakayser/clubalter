import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { TipostorneoService } from 'src/app/servicios/tipostorneo.service';
import { CategoriaParticipantesService } from 'src/app/servicios/categoria-participantes.service';
import { CategoriaTorneoService } from 'src/app/servicios/categoria-torneo.service';
import { TipoTorneo } from 'src/app/modelos/tipoTorneo';
import { CategoriaParticipante } from 'src/app/modelos/categoriaParticipanteTorneo';
import { CategoriaTorneo } from 'src/app/modelos/categoriaTorneo';

@Component({
  selector: 'app-ajustes-torneos',
  templateUrl: './ajustes-torneos.component.html',
  styleUrls: ['./ajustes-torneos.component.css']
})
export class AjustesTorneosComponent implements OnInit {

    tipoT = new FormGroup({
      _id: new FormControl(''),
      name: new FormControl('')
    })

    categoP =new FormGroup({
      _id: new FormControl(''),
      name: new FormControl('')
    })

    categoTorneo = new FormGroup({
      _id: new FormControl(''),
      name: new FormControl('')
    })

    Torneo: TipoTorneo[];

    CategoriaPart: CategoriaParticipante[];

    CategoriaT: CategoriaTorneo[];

  constructor( private readonly fb:FormBuilder, public categoriaTorneoService:CategoriaTorneoService,public tipotorneoService:TipostorneoService, public categoriaparticipanteService:CategoriaParticipantesService) { }

  ngOnInit(): void {
    this.gettipotorneo();
    this.getcategoriaP();
    this.getCategoT();
  }

  tipotorneo(){
    if(this.tipoT.value._id){
        this.tipotorneoService.puttipoT(this.tipoT.value).subscribe((res)=>{
          this.gettipotorneo();
          this.tipoT.reset();
      });
    }else{
      this.tipotorneoService.createtipoT(this.tipoT.value).subscribe((res)=>{
        console.log(res)
        this.gettipotorneo();
        this.tipoT.reset();
    });
    }
  }

  editTipoTorneo(tipoT:TipoTorneo){
    this.tipotorneoService.selectedtipoT=tipoT;
  }
  deleteTipot(_id:any){
    this.tipotorneoService.deletetipoT(_id).subscribe((res)=>{
      this.gettipotorneo();
    })
  }
  gettipotorneo(){
    this.tipotorneoService.gettipoT().subscribe((res)=>{
      this.Torneo=res;
      console.log(res);
      
    })
  }


  categoriaP(){
    if(this.categoP.value._id){
      this.categoriaparticipanteService.putcategoriaP(this.categoP.value).subscribe((res)=>{
        this.getcategoriaP();
        this.categoP.reset();
      })
    } else{
      this.categoriaparticipanteService.createcategoriaP(this.categoP.value).subscribe((res)=>{
        console.log(res)
        this.getcategoriaP();
        this.categoP.reset();
      })
    }
  }
  getcategoriaP(){
    this.categoriaparticipanteService.getcategoriaP().subscribe((res)=>{
      this.CategoriaPart = res;
    })
  }
  deleteCategoriaP(_id:any){
    this.categoriaparticipanteService.deletecategoriaP(_id).subscribe((res)=>{
      this.getcategoriaP();
    })
  }
  categoT(){
    if(this.categoTorneo.value._id){
      this.categoriaTorneoService.putcategoriaT(this.categoTorneo.value).subscribe((res)=>{
        this.getCategoT();
        this.categoTorneo.reset();
      })
    } else{
      this.categoriaTorneoService.createcategoriaT(this.categoTorneo.value).subscribe((res)=>{
        this.getCategoT();
        this.categoTorneo.reset();
      })
    }
  }
  getCategoT(){
    this.categoriaTorneoService.getcategoriaT().subscribe((res)=>{
      this.CategoriaT=res;
      console.log(res);
      
    })
  }
  deleteCategoT(_id:any){
    this.categoriaTorneoService.deletecategoriaT(_id).subscribe((res)=>{
      this.getCategoT();
    })
  }
}
