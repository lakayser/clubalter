import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
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


  torneo = new UntypedFormGroup({
    nombreTorneo: new UntypedFormControl(''),
    inicioT: new UntypedFormControl(''),
    lugar: new UntypedFormControl(''),
    estadoEnCurso: new UntypedFormControl(''),
    inicioInscripciones: new UntypedFormControl(''),
    finInscripciones: new UntypedFormControl(''),
    categoriaTorneo: new UntypedFormControl(''),
    categoriaParticipantes: new UntypedFormControl(''),
    limiteParejas: new UntypedFormControl(''),
    detalle: new UntypedFormControl(''),
    tipoTorneo: new UntypedFormControl(''),
    valorInscripcion: new UntypedFormControl(''),
  });

  
  Torneo: TipoTorneo[];

  CategoriaPart: CategoriaParticipante[];

  CategoriaT: CategoriaTorneo[];

  constructor( public categoriaTorneoService:CategoriaTorneoService,public tipotorneoService:TipostorneoService, public categoriaparticipanteService:CategoriaParticipantesService, private route: Router, private readonly fb: UntypedFormBuilder, private TorneoService:TorneosService ) { }

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
