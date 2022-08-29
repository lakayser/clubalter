import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import {HorarioCanchaService} from 'src/app/servicios/horario-cancha.service';
import { CanchasService } from 'src/app/servicios/canchas.service';
import { CargamasivaService } from 'src/app/servicios/cargamasiva.service'
import { timer } from 'rxjs';
import { tap } from 'rxjs';
// import html2canvas from 'html2canvas';

@Component({
  selector: 'app-vista-semana',
  templateUrl: './vista-semana.component.html',
  styleUrls: ['./vista-semana.component.css']
})
export class VistaSemanaComponent implements OnInit /*, AfterViewInit*/ {
  elementRef: any;

  constructor(public cargamasivaService: CargamasivaService, public horariocanchaService: HorarioCanchaService, public canchasService: CanchasService, public renderer: Renderer2) { }

  contador:number = -1;
  canchas: any[] = [];
  canchas2: any[] = [];

  horasL:string[] = []
  horasLF:string[] = []
  horasM:string[] = []
  horasMF:string[] = []
  horasMi:string[] = []
  horasMiF:string[] = []
  horasJ:string[] = []
  horasJF:string[] = []
  horasV:string[] = []
  horasVF:string[] = []
  horasS:string[] = []
  horasSF:string[] = []
  horasD:string[] = []
  horasDF:string[] = []

  arr: any[] = [];
  l: any[] = [];
  lf: any[] = [];
  m: any[] = [];
  mf: any[] = [];
  mi: any[] = [];
  mif: any[] = [];
  j: any[] = [];
  jf: any[] = [];
  v: any[] = [];
  vf: any[] = [];
  s: any[] = [];
  sf: any[] = [];
  d: any[] = [];
  df: any[] = [];

  numbers: any[] = [];
  contadore: number = -1
  
  ngOnInit(): void {
    console.log(this.numero);
    this.getCanchas();
    this.loadCanchas()
    .subscribe( () => {
      this.next();
    }) 
  }

  @ViewChild('content', { static: true }) el!: ElementRef<HTMLImageElement> 
  @ViewChild('dl') dl: ElementRef

  getCanchas(){
    this.canchasService.getCanchas().subscribe((res)=>{
      this.canchasService.cancha = res;
      this.canchas = [];
      for(let a of res) {
        this.canchas.push( a.name );
      }
    })
  }

  // jpg() {
  //   const screenshotTarget = this.el.nativeElement;
  //   html2canvas( screenshotTarget ).then( ( canvas: any ) => {
  //     setInterval( function() {
  //       const base64image = canvas.toDataURL( "image/jpg" )
  //       let anchor = document.createElement('a');
  //       anchor.setAttribute( 'href', base64image );
  //       anchor.setAttribute( 'download', 'my-image.jpg' )
  //       anchor.click();
  //       anchor.remove();
  //     }, 6000 )
  //   } )
  // }

  numeroSemana (fecha: any) {
    const dia_en_mili_segundos = 1000 * 60 * 60 * 24,
      dias_que_tiene_una_semana = 7,
      jueves = 4
    fecha = new Date(Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate()))
    let dia_de_la_semana = fecha.getUTCDay()
    if (dia_de_la_semana === 0) {
      dia_de_la_semana = 7
    }
    fecha.setUTCDate(fecha.getUTCDate() - dia_de_la_semana + jueves)
    const inicio_de_ano: any = new Date(Date.UTC(fecha.getUTCFullYear(), 0, 1))
    const diferencia_de_fechas_en_milisegundos = fecha - inicio_de_ano
    return Math.ceil(((diferencia_de_fechas_en_milisegundos / dia_en_mili_segundos) + 1) / dias_que_tiene_una_semana)
  }

  fecha = new Date()

  numero = this.numeroSemana(this.fecha)

  calendar () {
    this.cargamasivaService.getCargaMasiva().subscribe((res)=>{
      this.cargamasivaService.cargamasi = res
      this.arr = res;
      let arrCalendar: any[] = [];
      arrCalendar = res;
      for( let carga of arrCalendar ) {
        for( let cancha of carga.cancha ) {
          if( cancha.name === this.canchas[this.contador] ) {
            if( carga.semana === this.numero ) {
              if( carga.dia === 'lunes' ) {
                if( carga.disponibilidad === true ) {
                  this.l.push( carga.horario )
                  this.horasL = this.l;
                }
                if( carga.disponibilidad === false ) {
                  this.lf.push( carga.horario )
                  this.horasLF = this.lf;
                }
              }
              if( carga.dia === 'martes' ) {
                if( carga.disponibilidad === true ) {
                  this.m.push( carga.horario )
                  this.horasM = this.m;
                }
                if( carga.disponibilidad === false ) {
                  this.mf.push( carga.horario )
                  this.horasMF = this.mf;
                }
              }
              if( carga.dia === 'miércoles' ) {
                if( carga.disponibilidad === true ) {
                  this.mi.push( carga.horario )
                  this.horasMi = this.mi;
                }
                if( carga.disponibilidad === false ) {
                  this.mif.push( carga.horario )
                  this.horasMiF = this.mif;
                }
              }
              if( carga.dia === 'jueves' ) {
                if( carga.disponibilidad === true ) {
                  this.j.push( carga.horario )
                  this.horasJ = this.j;
                }
                if( carga.disponibilidad === false ) {
                  this.jf.push( carga.horario )
                  this.horasJF = this.jf;
                }
              }
              if( carga.dia === 'viernes' ) {
                if( carga.disponibilidad === true ) {
                  this.v.push( carga.horario )
                  this.horasV = this.v;
                }
                if( carga.disponibilidad === false ) {
                  this.vf.push( carga.horario )
                  this.horasVF = this.vf;
                }
              }
              if( carga.dia === 'sábado' ) {
                if( carga.disponibilidad === true ) {
                  this.s.push( carga.horario )
                  this.horasS = this.s;
                }
                if( carga.disponibilidad === false ) {
                  this.sf.push( carga.horario )
                  this.horasSF = this.sf;
                }
              }
              if( carga.dia === 'domingo' ) {
                if( carga.disponibilidad === true ) {
                  this.d.push( carga.horario )
                  this.horasD = this.d;
                }
                if( carga.disponibilidad === false ) {
                  this.df.push( carga.horario )
                  this.horasDF = this.df;
                }
              }
            }
          }
        }
      }
  })
  }

  next () {
    this.contador += 1
    this.canchas[this.contador];
    if (this.contador === this.canchas.length) {
      this.contador = 0
    }
    this.horasL = [];
    this.horasLF = [];
    this.horasM = [];
    this.horasMF = [];
    this.horasMi = [];
    this.horasMiF = [];
    this.horasJ = [];
    this.horasJF = [];
    this.horasV = [];
    this.horasVF = [];
    this.horasS = [];
    this.horasSF = [];
    this.horasD = [];
    this.horasDF = [];
    this.l = [];
    this.lf = [];
    this.m = [];
    this.mf = [];
    this.mi = [];
    this.mif = [];
    this.j = [];
    this.jf = [];
    this.v = [];
    this.vf = [];
    this.s = [];
    this.sf = [];
    this.d = [];
    this.df = [];
    this.calendar();
  }

  back() {
    this.contador -= 1;
    if( this.contador < 0 ) {
      this.contador = this.canchas.length;
      this.contador -= 1;
    }

    this.horasL = [];
    this.horasLF = [];
    this.horasM = [];
    this.horasMF = [];
    this.horasMi = [];
    this.horasMiF = [];
    this.horasJ = [];
    this.horasJF = [];
    this.horasV = [];
    this.horasVF = [];
    this.horasS = [];
    this.horasSF = [];
    this.horasD = [];
    this.horasDF = [];
    this.l = [];
    this.lf = [];
    this.m = [];
    this.mf = [];
    this.mi = [];
    this.mif = [];
    this.j = [];
    this.jf = [];
    this.v = [];
    this.vf = [];
    this.s = [];
    this.sf = [];
    this.d = [];
    this.df = [];
    this.calendar();
  }

  loadCanchas() {
    return timer( 1000 ).pipe(
      tap( () => {
        this.canchas[this.contador]
      })
    )
  }
}
