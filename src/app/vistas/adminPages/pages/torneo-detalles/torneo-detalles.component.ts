import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TorneosService } from '../../../../servicios/torneos.service';
import { TorneoCrear } from 'src/app/modelos/TorneoCrear';
import { switchMap } from 'rxjs';
<<<<<<< HEAD:src/app/vistas/torneo-detalles/torneo-detalles.component.ts
import Swal from 'sweetalert2';
=======
import { Inscritos } from '../../../grilla/interface/inscritos';
import { InscritosService } from '../../../grilla/services/inscritos.service';
>>>>>>> 9201907a2ed75db9fc7749f2e2b0f907238b2256:src/app/vistas/adminPages/pages/torneo-detalles/torneo-detalles.component.ts


@Component({
  selector: 'app-torneo-detalles',
  templateUrl: './torneo-detalles.component.html',
  styleUrls: ['./torneo-detalles.component.css']
})
export class TorneoDetallesComponent implements OnInit {
<<<<<<< HEAD:src/app/vistas/torneo-detalles/torneo-detalles.component.ts
  cosa: any = {};
  rol: any;
  Torneo: TorneoCrear[];


  display: boolean = false;

  poto: TorneoCrear[] = [];

  torneo: any = {
=======
  ordenarPor: string = '';
  cosa      : any={};
  rol       : any;
  inscritos : Inscritos[] = [];
  ins       : Inscritos[] = [];
  Torneo    : TorneoCrear[];
  display   : boolean = false;
  poto      : TorneoCrear[] = [];
  torneo    : any ={
>>>>>>> 9201907a2ed75db9fc7749f2e2b0f907238b2256:src/app/vistas/adminPages/pages/torneo-detalles/torneo-detalles.component.ts
    nombreTorneo: '',
    inicioT: new Date,
    lugar: '',
    finInscripciones: new Date,
    detalle: ''
  };
<<<<<<< HEAD:src/app/vistas/torneo-detalles/torneo-detalles.component.ts
  constructor(private router: Router, private torneoService: TorneosService, private route: ActivatedRoute) { }
=======

  constructor(
    private router          : Router,
    private torneoService   : TorneosService,
    private route           : ActivatedRoute,
    private inscritosService: InscritosService,
    ) { }

>>>>>>> 9201907a2ed75db9fc7749f2e2b0f907238b2256:src/app/vistas/adminPages/pages/torneo-detalles/torneo-detalles.component.ts
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
    this.listarInscritos();
  }
<<<<<<< HEAD:src/app/vistas/torneo-detalles/torneo-detalles.component.ts
  goInscripcion(torneo: TorneoCrear) {
    this.router.navigate(['/canchaselbicho/Inscripcion', torneo._id]);
  }
=======

  goInscripcion(torneo:TorneoCrear){
     this.router.navigate(['/canchaselbicho/Inscripcion', torneo._id]);
    }
>>>>>>> 9201907a2ed75db9fc7749f2e2b0f907238b2256:src/app/vistas/adminPages/pages/torneo-detalles/torneo-detalles.component.ts
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

<<<<<<< HEAD:src/app/vistas/torneo-detalles/torneo-detalles.component.ts
  getID(id: any) {
=======
  getID(id:any){
>>>>>>> 9201907a2ed75db9fc7749f2e2b0f907238b2256:src/app/vistas/adminPages/pages/torneo-detalles/torneo-detalles.component.ts
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
  listarInscritos() {
    this.inscritosService.getInscritos()
      .subscribe( inscritos => {
        this.inscritos = inscritos;
        this.inscritos.map( a => {
          if( a.nombreEquipo === 'Nicolas' ) {
            console.log( 'equipo',a );
          }
        })
      })
  }
}
