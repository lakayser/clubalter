import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TorneosService } from 'src/app/servicios/torneos.service';
import { TipostorneoService } from 'src/app/servicios/tipostorneo.service';
import { CategoriaParticipantesService } from 'src/app/servicios/categoria-participantes.service';
import { CategoriaTorneoService } from 'src/app/servicios/categoria-torneo.service';
import { TipoTorneo } from 'src/app/modelos/tipoTorneo';
import { CategoriaParticipante } from 'src/app/modelos/categoriaParticipanteTorneo';
import { CategoriaTorneo } from 'src/app/modelos/categoriaTorneo';

@Component({
  selector: 'app-crear-torneo',
  templateUrl: './crear-torneo.component.html',
  styleUrls: ['./crear-torneo.component.css']
})
export class CrearTorneoComponent implements OnInit {


  torneo = new FormGroup({
    nombreTorneo: new FormControl(''),
    inicioT: new FormControl(''),
    lugar: new FormControl(''),
    estadoEnCurso: new FormControl(''),
    inicioInscripciones: new FormControl(''),
    finInscripciones: new FormControl(''),
    categoriaTorneo: new FormControl(''),
    categoriaParticipantes: new FormControl(''),
    limiteParejas: new FormControl(''),
    detalle: new FormControl(''),
    tipoTorneo: new FormControl(''),
    valorInscripcion: new FormControl(''),
  });

  
  Torneo: TipoTorneo[];

  CategoriaPart: CategoriaParticipante[];

  CategoriaT: CategoriaTorneo[];

  constructor( public categoriaTorneoService:CategoriaTorneoService,public tipotorneoService:TipostorneoService, public categoriaparticipanteService:CategoriaParticipantesService, private route: Router, private readonly fb: FormBuilder, private TorneoService:TorneosService ) { }

  ngOnInit(): void {
    this.gettipotorneo();
    this.getcategoriaP();
    this.getCategoT();
  }
  submit() {
    // console.log('form-> ', this.multistep.value);
    this.TorneoService.creteTorneo(this.torneo.value).subscribe((res) => {

      console.log(res);
    })
  }
  gettipotorneo(){
    this.tipotorneoService.gettipoT().subscribe((res)=>{
      this.Torneo=res;
      console.log(res);
      
    })
  }
  getcategoriaP(){
    this.categoriaparticipanteService.getcategoriaP().subscribe((res)=>{
      this.CategoriaPart = res;
    })
  }
  getCategoT(){
    this.categoriaTorneoService.getcategoriaT().subscribe((res)=>{
      this.CategoriaT=res;
      console.log(res);
      
    })
  }
}
