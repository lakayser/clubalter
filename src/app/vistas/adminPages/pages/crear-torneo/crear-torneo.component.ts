import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, NgForm, Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
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

  reactiveForm: FormGroup;

  //   torneoform = new UntypedFormGroup({
  //     nombreTorneo: new UntypedFormControl('',[Validators.required]),
  //     inicioT: new UntypedFormControl('',[Validators.required]),
  //     lugar: new UntypedFormControl('',[Validators.required]),
  //     estadoEnCurso: new UntypedFormControl('',[Validators.required]),
  //     inicioInscripciones: new UntypedFormControl('',[Validators.required]),
  //     finInscripciones: new UntypedFormControl('',[Validators.required]),
  //     categoriaTorneo: new UntypedFormControl('',[Validators.required]),
  //     categoriaParticipantes: new UntypedFormControl('',[Validators.required]),
  //     limiteParejas: new UntypedFormControl('',[Validators.required]),
  //     detalle: new UntypedFormControl('',[Validators.required]),
  //     tipoTorneo: new UntypedFormControl('',[Validators.required]),
  //     valorInscripcion: new UntypedFormControl('',[Validators.required]),

  //   });


  Torneo: TipoTorneo[];

  CategoriaPart: CategoriaParticipante[];

  CategoriaT: CategoriaTorneo[];

  constructor(public categoriaTorneoService: CategoriaTorneoService, public tipotorneoService: TipostorneoService, public categoriaparticipanteService: CategoriaParticipantesService, private router: Router, private readonly fb: UntypedFormBuilder, private formBuilder: FormBuilder, private TorneoService: TorneosService) {
    this.reactiveForm = this.formBuilder.group({
      nombreTorneo: new FormControl('', [Validators.required]),
      inicioT: new FormControl('', [Validators.required]),
      lugar: new FormControl('', [Validators.required]),

      inicioInscripciones: new FormControl('', [Validators.required]),
      finInscripciones: new FormControl('', [Validators.required]),
      categoriaTorneo: new FormControl('', [Validators.required]),
      categoriaParticipantes: new FormControl('', [Validators.required]),
      limiteParejas: new FormControl('', [Validators.required]),
      detalle: new FormControl('', [Validators.required]),
      tipoTorneo: new FormControl('', [Validators.required]),
      valorInscripcion: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {


    this.gettipotorneo();
    this.getcategoriaP();
    this.getCategoT();

  }



  submit() {
    this.TorneoService.creteTorneo(this.reactiveForm.value).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/mod/crud-torneo'])
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: res,
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: true,
      })
    }, err => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: err.error,
        timer: 2500
      });
    } )



  }
  gettipotorneo() {
    this.tipotorneoService.gettipoT().subscribe((res) => {
      this.Torneo = res;
      console.log(res);

    })
  }
  getcategoriaP() {
    this.categoriaparticipanteService.getcategoriaP().subscribe((res) => {
      this.CategoriaPart = res;
    })
  }
  getCategoT() {
    this.categoriaTorneoService.getcategoriaT().subscribe((res) => {
      this.CategoriaT = res;
      console.log(res);

    })
  }
}
