import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TorneosService } from '../../../../servicios/torneos.service';
import { TorneoCrear } from 'src/app/modelos/TorneoCrear';
import { switchMap } from 'rxjs';
import Swal from 'sweetalert2';
import { Inscritos } from '../../../grilla/interface/inscritos';
import { InscritosService } from '../../../grilla/services/inscritos.service';


@Component({
  selector: 'app-torneo-detalles',
  templateUrl: './torneo-detalles.component.html',
  styleUrls: ['./torneo-detalles.component.css']
})
export class TorneoDetallesComponent implements OnInit {
  ordenarPor: string = '';
  cosa      : any={};
  rol       : any;
  inscritos : Inscritos[] = [];
  ins       : Inscritos[] = [];
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
    private inscritosService: InscritosService,
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
    this.listarInscritos();
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
  // eliminarInscripcion(_id: any){
  //   console.log(_id)
  //   this.inscritosService.eliminarInsctiro(_id).subscribe((res)=>{
  //     console.log(res)
  //     this.listarInscritos();
  //   })
  // }
  eliminarInscripcion(_id: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    Swal.fire({
      title: 'Estas seguro que deseas eliminar a esta pareja del torneo?',
      text: "No podras revertir esta accion",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.inscritosService.eliminarInsctiro(_id).subscribe(
          (res) => {
            this.listarInscritos();
            Swal.fire(
              'Listo!',
              'Pareja Eliminada Con exito',
              'success'
            )
          })
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Pareja a salvo',
          'error'
        )
      }
    })
  }
}
