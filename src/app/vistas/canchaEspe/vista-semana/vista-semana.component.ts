import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import {HorarioCanchaService} from 'src/app/servicios/horario-cancha.service';
import { CanchasService } from 'src/app/servicios/canchas.service';
import { CargamasivaService } from 'src/app/servicios/cargamasiva.service'
import { fromEvent, Subscription } from 'rxjs';
import { style } from '@angular/animations';

@Component({
  selector: 'app-vista-semana',
  templateUrl: './vista-semana.component.html',
  styleUrls: ['./vista-semana.component.css']
})
export class VistaSemanaComponent implements OnInit /*, AfterViewInit*/ {
  elementRef: any;

  constructor(public cargamasivaService: CargamasivaService, public horariocanchaService: HorarioCanchaService, public canchasService: CanchasService, public renderer: Renderer2) { }


  carga: any[] = []

  pruebaMil: any[] = []

  contador:number = -1

  canchas: String[] = []
  horaLunes: String[] = []
  horaLunesF: String[] = []
  horaMartes: String[] = []
  horaMiercoles: String[] = []
  horaJueves: String[] = []
  horaViernes: String[] = []
  horaSabado: String[] = []
  horaDomingo: String[] = []
  cancha: any[] = []
  arrNomCanchas: any[] = []
  arrCarga: any[] = []
  arrHorario: any[] = []

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
  
  aloProbando: any[] = []
  aloProbando2: any[] = []
  aloProbando3: any[] = []
  aloProbando4: any[] = []
  aloProbando5: any[] = []
  aloProbando6: any[] = []
  aloProbando7: any[] = []
  aloProbandoF: any[] = []
  aloProbando2F: any[] = []
  aloProbando3F: any[] = []
  aloProbando4F: any[] = []
  aloProbando5F: any[] = []
  aloProbando6F: any[] = []
  aloProbando7F: any[] = []

  ngOnInit(): void {
    console.log(this.numero);
    this.getCanchas();
    this.getNomCancha();
    this.nextd();
  }

  @ViewChild("hl") miTag: ElementRef
  @ViewChild("hlF") miTagF: ElementRef
  @ViewChild("hm") miTag2: ElementRef
  @ViewChild("hmF") miTag2F: ElementRef
  @ViewChild("hmi") miTag3: ElementRef
  @ViewChild("hj") miTag4: ElementRef
  @ViewChild("hv") miTag5: ElementRef
  @ViewChild("hs") miTag6: ElementRef
  @ViewChild("hd") miTag7: ElementRef
  @ViewChild('next') next: ElementRef
  @ViewChild('prev') prev: ElementRef
  @ViewChild('f') f: ElementRef

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

  nextd () {
    this.contador += 1
    if (this.contador === this.canchas.length) {
      this.contador = 0
    }

    this.cargamasivaService.getCargaMasiva().subscribe((res)=>{
      this.cargamasivaService.cargamasi = res
      this.arrCarga = res
      this.horasL = []
      this.horasM = []
      this.horasMi = []
      this.horasJ = []
      this.horasV = []
      this.horasS = []
      this.horasD = []
      this.horasLF = []
      this.horasMF = []
      this.horasMiF = []
      this.horasJF = []
      this.horasVF = []
      this.horasSF = []
      this.horasDF = []
      this.aloProbando = []
      this.aloProbandoF = []
      this.aloProbando2 = []
      this.aloProbando2F = []
      this.aloProbando3 = []
      this.aloProbando3F = []
      this.aloProbando4 = []
      this.aloProbando4F = []
      this.aloProbando5 = []
      this.aloProbando5F = []
      this.aloProbando6 = []
      this.aloProbando6F = []
      this.aloProbando7 = []
      this.aloProbando7F = []
      for (let a of this.arrCarga) {
        for (let b of a.cancha) {
          if (b.name === this.canchas[this.contador]) {
            if (a.semana === this.numero) {
              if (a.dia === 'lunes') {
                if (a.disponibilidad === true) {
                  this.horasL.push(a.horario)
                  this.aloProbando = this.horasL
                }
                if (a.disponibilidad === false) {
                  this.horasLF.push(a.horario)
                  this.aloProbandoF = this.horasLF
                }
              }
              if (a.dia === 'martes') {
                if (a.disponibilidad === true) {
                  this.horasM.push(a.horario)
                  this.aloProbando2 = this.horasM
                }
                if (a.disponibilidad === false) {
                  this.horasMF.push(a.horario)
                  this.aloProbando2F = this.horasMF
                }
              }
              if (a.dia === 'miercoles') {
                if (a.disponibilidad === true) {
                  this.horasMi.push(a.horario)
                  this.aloProbando3 = this.horasMi
                }
                if (a.disponibilidad === false) {
                  this.horasMiF.push(a.horario)
                  this.aloProbando3F = this.horasMiF
                }
              }
              if (a.dia === 'jueves') {
                if(a.disponibilidad === true) {
                  this.horasJ.push(a.horario)
                  this.aloProbando4 = this.horasJ
                }
                if (a.disponibilidad === false) {
                  this.horasJF.push(a.horario)
                  this.aloProbando4F = this.horasJF
                }
              }
              if (a.dia === 'viernes') {
                if(a.disponibilidad === true) {
                  this.horasV.push(a.horario)
                  this.aloProbando5 = this.horasV
                }
                if(a.disponibilidad === false) {
                  this.horasVF.push(a.horario)
                  this.aloProbando5F = this.horasVF
                }
              }
              if (a.dia === 'sabado') {
                if(a.disponibilidad === true) {
                  this.horasS.push(a.horario)
                  this.aloProbando6 = this.horasS
                }
                if(a.disponibilidad === false) {
                  this.horasSF.push(a.horario)
                  this.aloProbando6F = this.horasSF
                }
              }
              if (a.dia === 'domingo') {
                if(a.disponibilidad === true) {
                  this.horasD.push(a.horario)
                  this.aloProbando7 = this.horasD
                }
                if(a.disponibilidad === false) {
                  this.horasDF.push(a.horario)
                  this.aloProbando7F = this.horasDF
                }
              }
            }
          }
        }
      }
    })
  }

  getNomCancha() {
    this.canchasService.getCanchas().subscribe((res)=>{
      this.canchasService.cancha = res;
      this.arrNomCanchas = res;
   })
  }

  getCanchas(){
    this.canchasService.getCanchas().subscribe((res)=>{
      this.canchasService.cancha = res;
      for(let a of res) {
        this.cancha.push(a)
        this.canchas.push(a.name)
      }
      console.log('nom canchas',this.canchas[this.contador]);
    })
  }

  getCarga () {
  }

  // ngAfterViewInit(): void {

  //   this.cargamasivaService.getCargaMasiva().subscribe((res)=>{
  //     this.cargamasivaService.cargamasi = res
  //     for(let b of res) {
  //       this.carga.push(b)
  //     }
  //     this.carga.forEach(x => {
  //       for(let cancha of x.cancha) {
  //         if(x.semana === this.numero) {
  //           if(cancha.name === this.canchas[this.contador]) {
  //             if(x.dia === 'lunes') {
  //               if(cancha.disponibilidad === true) {
  //                 this.horaLunes.push(x.horario)
  //                 this.miTag.nativeElement.innerHTML = ''
  //                 for(let i = 0; i < this.horaLunes.length; i ++) {
  //                   this.miTag.nativeElement.innerHTML += '<div class="mb-1 pt-3 pb-1 bg-success"> <p>' + this.horaLunes[i] + '</p> </div>'
  //                 }
  //               }
  //               if(cancha.disponibilidad === false) {
  //                 this.horaLunesF.push(x.horario)
  //                 this.miTag.nativeElement.innerHTML = ''
  //                 for(let i = 0; i < this.horaLunesF.length; i ++) {
  //                   this.miTag.nativeElement.innerHTML += '<div class="mb-1 pt-3 pb-1 bg-danger"> <p>' + this.horaLunesF[i] + '</p> </div>'
  //                 }
  //               }
  //             }
  //             if(x.dia === 'martes') {
  //               if(cancha.disponibilidad === true) {
  //                 this.horaMartes.push(x.horario)
  //                 this.miTag2.nativeElement.innerHTML = ''
  //                 for(let i = 0; i < this.horaMartes.length; i ++) {
  //                   this.miTag2.nativeElement.innerHTML += '<div class="mb-1 pt-3 pb-1 bg-success"> <p>' + this.horaMartes[i] + '</p> </div>'
  //                 }
  //               }
  //               if(cancha.disponibilidad === false) {
  //                 this.horaMartes.push(x.horario)
  //                 this.miTag2.nativeElement.innerHTML = ''
  //                 for(let i = 0; i < this.horaMartes.length; i ++) {
  //                   this.miTag2.nativeElement.innerHTML += '<div class="mb-1 pt-3 pb-1 bg-danger"> <p>' + this.horaMartes[i] + '</p> </div>'
  //                 }
  //               }
  //             }
  //             if(x.dia === 'miercoles') {
  //               if(cancha.disponibilidad === true) {
  //                 this.horaMiercoles.push(x.horario)
  //                 this.miTag3.nativeElement.innerHTML = ''
  //                 for(let i = 0; i < this.horaMiercoles.length; i ++) {
  //                   this.miTag3.nativeElement.innerHTML += '<div class="mb-1 pt-3 pb-1 bg-success"> <p>' + this.horaMiercoles[i] + '</p> </div>'
  //                 }
  //               }
  //               if(cancha.disponibilidad === false) {
  //                 this.horaMiercoles.push(x.horario)
  //                 this.miTag3.nativeElement.innerHTML = ''
  //                 for(let i = 0; i < this.horaMiercoles.length; i ++) {
  //                   this.miTag3.nativeElement.innerHTML += '<div class="mb-1 pt-3 pb-1 bg-danger"> <p>' + this.horaMiercoles[i] + '</p> </div>'
  //                 }
  //               }
  //             }
  //             if(x.dia === 'jueves') {
  //               if(cancha.disponibilidad === true) {
  //                 this.horaJueves.push(x.horario)
  //                 this.miTag4.nativeElement.innerHTML = ''
  //                 for(let i = 0; i < this.horaJueves.length; i ++) {
  //                   this.miTag4.nativeElement.innerHTML += '<div class="mb-1 pt-3 pb-1 bg-success"> <p>' + this.horaJueves[i] + '</p> </div>'
  //                 }
  //               }
  //               if(cancha.disponibilidad === false) {
  //                 this.horaJueves.push(x.horario)
  //                 this.miTag4.nativeElement.innerHTML = ''
  //                 for(let i = 0; i < this.horaJueves.length; i ++) {
  //                   this.miTag4.nativeElement.innerHTML += '<div class="mb-1 pt-3 pb-1 bg-danger"> <p>' + this.horaJueves[i] + '</p> </div>'
  //                 }
  //               }
  //             }
  //             if(x.dia === 'viernes') {
  //               if(cancha.disponibilidad === true) {
  //                 this.horaViernes.push(x.horario)
  //                 this.miTag5.nativeElement.innerHTML = ''
  //                 for(let i = 0; i < this.horaViernes.length; i ++) {
  //                   this.miTag5.nativeElement.innerHTML += '<div class="mb-1 pt-3 pb-1 bg-success"> <p>' + this.horaViernes[i] + '</p> </div>'
  //                 }
  //               }
  //               if(cancha.disponibilidad === false) {
  //                 this.horaViernes.push(x.horario)
  //                 this.miTag5.nativeElement.innerHTML = ''
  //                 for(let i = 0; i < this.horaViernes.length; i ++) {
  //                   this.miTag5.nativeElement.innerHTML += '<div class="mb-1 pt-3 pb-1 bg-danger"> <p>' + this.horaViernes[i] + '</p> </div>'
  //                 }
  //               }
  //             }
  //             if(x.dia === 'Sabado') {
  //               if(cancha.disponibilidad === true) {
  //                 this.horaSabado.push(x.horario)
  //                 this.miTag6.nativeElement.innerHTML = ''
  //                 for(let i = 0; i < this.horaSabado.length; i ++) {
  //                   this.miTag6.nativeElement.innerHTML += '<div class="mb-1 pt-3 pb-1 bg-success"> <p>' + this.horaSabado[i] + '</p> </div>'
  //                 }
  //               }
  //               if(cancha.disponibilidad === false) {
  //                 this.horaSabado.push(x.horario)
  //                 this.miTag6.nativeElement.innerHTML = ''
  //                 for(let i = 0; i < this.horaSabado.length; i ++) {
  //                   this.miTag6.nativeElement.innerHTML += '<div class="mb-1 pt-3 pb-1 bg-danger"> <p>' + this.horaSabado[i] + '</p> </div>'
  //                 }
  //               }
  //             }
  //             if(x.dia === 'domingo') {
  //               if(cancha.disponibilidad === true) {
  //                 this.horaDomingo.push(x.horario)
  //                 this.miTag7.nativeElement.innerHTML = ''
  //                 for(let i = 0; i < this.horaDomingo.length; i ++) {
  //                   this.miTag7.nativeElement.innerHTML += '<div class="mb-1 pt-3 pb-1 bg-success"> <p>' + this.horaDomingo[i] + '</p> </div>'
  //                 }
  //               }
  //               if(cancha.disponibilidad === false) {
  //                 this.horaDomingo.push(x.horario)
  //                 this.miTag7.nativeElement.innerHTML = ''
  //                 for(let i = 0; i < this.horaDomingo.length; i ++) {
  //                   this.miTag7.nativeElement.innerHTML += '<div class="mb-1 pt-3 pb-1 bg-danger"> <p>' + this.horaDomingo[i] + '</p> </div>'
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     })
  //   })
  // }
}
