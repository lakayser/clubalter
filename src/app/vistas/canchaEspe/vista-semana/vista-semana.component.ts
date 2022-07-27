import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {HorarioCanchaService} from 'src/app/servicios/horario-cancha.service';
import { CanchasService } from 'src/app/servicios/canchas.service';
import { CargamasivaService } from 'src/app/servicios/cargamasiva.service'

@Component({
  selector: 'app-vista-semana',
  templateUrl: './vista-semana.component.html',
  styleUrls: ['./vista-semana.component.css']
})
export class VistaSemanaComponent implements OnInit, AfterViewInit {

  constructor(public cargamasivaService: CargamasivaService, public horariocanchaService: HorarioCanchaService, public canchasService: CanchasService) { }

  contador = -1

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
  carga: any[] = []

  ngOnInit(): void {
    console.log(this.numero)
    this.getCanchas()
    this.getHoras(this.numero)
  }

  @ViewChild("hl") miTag: ElementRef
  @ViewChild("hm") miTag2: ElementRef
  @ViewChild("hmi") miTag3: ElementRef

  ngAfterViewInit(): void {
    this.cargamasivaService.getCargaMasiva().subscribe((res)=>{
      this.cargamasivaService.cargamasi = res
      for(let b of res) {
        this.carga.push(b)
      }
      this.carga.forEach(x => {
        for(let cancha of x.cancha) {
          if(x.semana === 29) {
            if(cancha.name === this.canchas[0]) {
              if(x.dia === 'lunes') {
                if(cancha.disponibilidad === true) {
                  this.horaLunes.push(x.horario)
                  this.miTag.nativeElement.innerHTML = ''
                  for(let i = 0; i < this.horaLunes.length; i ++) {
                    this.miTag.nativeElement.innerHTML += '<p class="bg-danger">' + this.horaLunes[i] + '</p>'
                  }
                }
                if(cancha.disponibilidad === false) {
                  this.horaLunesF.push(x.horario)
                }
              }
              if(x.dia === 'martes') {
                this.horaMartes.push(x.horario)
                this.miTag2.nativeElement.innerHTML = ''
                for(let i = 0; i < this.horaMartes.length; i++) {
                  this.miTag2.nativeElement.innerHTML += '<p>' + this.horaMartes[i] + '</p>'
                }
              }
              if(x.dia === 'miercoles') {
                this.horaMiercoles.push(x.horario)
                this.miTag3.nativeElement.innerHTML = ''
                for(let i = 0; i < this.horaMiercoles.length; i++) {
                  this.miTag3.nativeElement.innerHTML += '<li>' + this.horaMiercoles[i] + '</li>'
                }
              }
              if(x.dia === 'jueves') {
                this.horaJueves.push(x.horario)
              }
              if(x.dia === 'viernes') {
                this.horaViernes.push(x.horario)
              }
              if(x.dia === 'sabado') {
                this.horaSabado.push(x.horario)
              }
              if(x.dia === 'domingo') {
                this.horaDomingo.push(x.horario)
              }
            }
          }
        }
      })
    })
  }


  getNomCancha() {
    this.canchasService.getCanchas().subscribe((res)=>{
      this.canchasService.cancha = res;
   })
  }

  getCanchas(){
    this.canchasService.getCanchas().subscribe((res)=>{
      this.canchasService.cancha = res;
      for(let a of res) {
        this.cancha.push(a)
        this.canchas.push(a.name)
      }
      console.log(this.canchas)
    })
  }

  getHoras(numSemana:Number) {
  }

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

  nextCancha () {
  //   this.contador += 1
  //   if (this.contador == 3) {
  //     this.contador = 0
  //   }
  // })
  }
  // prevCancha () {
  // this.canchasService.getCanchas().subscribe((res)=>{
  //   this.canchasService.cancha = res;
  //   this.canchas = res.map(dato => dato.name)
  //   if (this.contador === 0) {
  //     this.contador = 2
  //   } else {
  //     this.contador -= 1
  //   }
  // })
  // }
}
