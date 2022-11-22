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
import Swal from 'sweetalert2';

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

  constructor( public categoriaTorneoService:CategoriaTorneoService,private router: Router,public tipotorneoService:TipostorneoService, public categoriaparticipanteService:CategoriaParticipantesService, private route: Router, private readonly fb: FormBuilder, private TorneoService:TorneosService ) { }
  
  orga: any;
  
  ngOnInit(): void {
    // let xd = localStorage.getItem('organization');
    // this.orga = xd;
    // console.log(this.orga);
    
    this.gettipotorneo();
    this.getcategoriaP();
    this.getCategoT();
    // this.torneo = this.initForm();
  }

  // initForm(): FormGroup{
  //   return this.fb.group({
  //   nombreTorneo:   ['', [Validators.required]],
  //   inicioT:        ['', [Validators.required]],
  //   lugar:          ['', [Validators.required]],
  //   estadoEnCurso:  ['', [Validators.required]],
  //   inicioInscripciones: ['', [Validators.required]],
  //   finInscripciones: ['', [Validators.required]],
  //   categoriaTorneo: ['', [Validators.required]],
  //   categoriaParticipantes: ['', [Validators.required]],
  //   limiteParejas: ['', [Validators.required]],
  //   detalle: ['', [Validators.required]],
  //   tipoTorneo: ['', [Validators.required]],
  //   valorInscripcion: ['', [Validators.required]],
  //   organization:[this.orga , [Validators.required]],
  //   })
  // }
  
  submit() {
    // console.log('form-> ', this.multistep.value);
    this.TorneoService.creteTorneo(this.torneo.value).subscribe((res) => {

      console.log(res);
      Swal.fire({
        title: 'Crear Torneo con los datos ingresados?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'SI',
        denyButtonText: `No`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Torneo creado con Exito!', '', 'success')
          this.router.navigate(['/canchaselbicho/TorneoCrud'])
        } else if (result.isDenied) {
          Swal.fire('Creacion cancelada', '', 'info')
        }
      })
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
