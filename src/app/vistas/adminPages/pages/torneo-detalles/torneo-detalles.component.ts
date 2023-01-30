import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TorneosService } from '../../../../servicios/torneos.service';
import { TorneoCrear } from 'src/app/modelos/TorneoCrear';
import { switchMap } from 'rxjs';
import Swal from 'sweetalert2';
import { Inscritos } from 'src/app/vistas/cuadros-torneos/interfaces/inscritos.interface';


@Component({
  selector: 'app-torneo-detalles',
  templateUrl: './torneo-detalles.component.html',
  styleUrls: ['./torneo-detalles.component.css']
})
export class TorneoDetallesComponent implements OnInit {
  ordenarPor: string = '';
  inscritos : Inscritos[] = [];
  ins       : Inscritos[] = [];
  cosa      : any={};
  rol       : any;
  Torneo    : TorneoCrear[];
  display   : boolean = false;
  poto      : TorneoCrear[] = [];
  torneo    : any ={
    nombreTorneo: '',
    inicioT: new Date,
    lugar: '',
    finInscripciones: new Date,
    detalle: ''
  };

  constructor(
    private router          : Router,
    private torneoService   : TorneosService,
    private route           : ActivatedRoute,

    ) { }

  ngOnInit(): void {
    let BN = this.route.snapshot.paramMap.get('id');
    this.cosa = BN;
    console.log(this.cosa)
    this.route.paramMap.subscribe(params => {
      var id = params.get('id');
      this.getID(id);
    });
    this.route.params
      .subscribe(console.log)
    this.CargarObjeto();
  }

  goInscripcion(torneo:TorneoCrear){
     this.router.navigate(['/canchaselbicho/Inscripcion', torneo._id]);
    }
  showDialog() {
    this.display = true;
  }
  CargarObjeto() {
    this.torneoService.getTorneosID(this.cosa).subscribe((res) => {
      console.log(res, "lolo")
      res.map(poto => {
        this.torneo = {
          nombreTorneo: poto.nombreTorneo,
          inicioT: poto.inicioT,
          lugar: poto.lugar,
          finInscripciones: poto.finInscripciones,
          detalle: poto.detalle
        }
      })

    })
  }

  editarTorneo() {
    this.route.params
      .pipe(
        switchMap(({ id }) => this.torneoService.putTorneo(this.torneo, id))
      )
      .subscribe((res) => {
        console.log(res, "lala")
        this.torneo = res;
        console.log(this.torneo)
        this.display = false;
        this.getID(this.cosa);
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
      })
  }


  getTorneos() {
    this.torneoService.getTorneos().subscribe((res) => {
      this.Torneo = res;
      console.log(res);
    });
  }

  getID(id:any){
    this.rol = localStorage.getItem('rol');
    this.torneoService.getTorneosID(id).subscribe((res) => {
      this.Torneo = res;
      console.log(res)
      for (let a of this.Torneo) {
        for (let b of a.categoriaTorneo) {
          console.log(b);
          let p = b.name
          console.log(p);
        }
      }
    })
  }

}
