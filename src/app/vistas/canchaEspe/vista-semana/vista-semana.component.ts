import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import {HorarioCanchaService} from 'src/app/servicios/horario-cancha.service';
import { CanchasService } from 'src/app/servicios/canchas.service';
import { CargamasivaService } from 'src/app/servicios/cargamasiva.service'
import { fromEvent, Subscription } from 'rxjs';
import { style } from '@angular/animations';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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

  calendario: any[] | any[] = [];
  arrC: any[] = [];

  canchas: any[] = [];
  horaLunes: String[] = [];
  horaLunesF: String[] = [];
  horaMartes: String[] = [];
  horaMartesF: string[] = [];
  horaMiercoles: String[] = [];
  horaMiercolesF: String[] = [];
  horaJueves: String[] = [];
  horaJuevesF: String[] = [];
  horaViernes: String[] = [];
  horaViernesF: String[] = [];
  horaSabado: String[] = [];
  horaSabadoF: String[] = [];
  horaDomingo: String[] = [];
  horaDomingoF: String[] = [];
  cancha: any[] = [];
  arrNomCanchas: any[] = [];
  arrCarga: any[] = [];
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
  
  ngOnInit(): void {
    console.log(this.numero);
    this.calendar();
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
  @ViewChild('content', { static: true }) el!: ElementRef<HTMLImageElement> 
  @ViewChild('dl') dl: ElementRef

  // exportPDF() {
  //   html2canvas(this.el.nativeElement).then( (canvas) => {
  //     setInterval( function() {
  //       const imgData = canvas.toDataURL('image/jpeg')

  //       const pdf = new jsPDF({
  //         orientation: 'portrait'
  //       })

  //       const imageProps = pdf.getImageProperties(imgData)

  //       const pdfw = pdf.internal.pageSize.getWidth()

  //       const pdfh = (imageProps.height *pdfw) / imageProps.width

  //       pdf.addImage(imgData, 'PNG',0,0,pdfw,pdfh)

  //       pdf.save("output.pdf")
  //     }, 3000 )
  //   } )
  // }

  png() {
    const screenshotTarget = this.el.nativeElement;
    html2canvas( screenshotTarget ).then( ( canvas: any ) => {
      setInterval( function() {
        const base64image = canvas.toDataURL( "image/png" )
        let anchor = document.createElement('a');
        anchor.setAttribute( 'href', base64image );
        anchor.setAttribute( 'download', 'my-image.png' )
        anchor.click();
        anchor.remove();
      }, 6000 )
    } )
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

  arr: any[] = [];
  arr2: any[] = [];
  l: any[] = [];
  m: any[] = [];
  mi: any[] = [];
  j: any[] = [];
  v: any[] = [];
  s: any[] = [];
  d: any[] = [];

  calendar () {
    this.cargamasivaService.getCargaMasiva().subscribe((res)=>{
      this.cargamasivaService.cargamasi = res
      this.arr = res;
      let arrCalendar: any[] = [];
      arrCalendar = res;
      for( let carga of arrCalendar ) {
        for( let cancha of carga.cancha ) {
          if( cancha.name === 'Cancha 1' ) {
            if( carga.semana === this.numero ) {
              if( carga.dia === 'miércoles' ) {
                console.log( carga.horario )
              }
            }
          }
        }
      }
  })
  }
   
  getCanchas(){
    this.canchasService.getCanchas().subscribe((res)=>{
      this.canchasService.cancha = res;
      this.canchas = [];
      for(let a of res) {
        this.canchas.push( a.name );
      }
    })
  }


  // nextd () {
  //   this.contador += 1
  //   if (this.contador === this.canchas.length) {
  //     this.contador = 0
  //   }
  // }


  // getNomCancha() {
  //   this.canchasService.getCanchas().subscribe((res)=>{
  //     this.canchasService.cancha = res;
  //     this.arrNomCanchas = res;
  //  })
  // }



  ngAfterViewInit(): void {

    this.cargamasivaService.getCargaMasiva().subscribe((res)=>{
      this.cargamasivaService.cargamasi = res
      for(let b of res) {
        this.carga.push(b)
      }
      this.carga.forEach(x => {
        for(let cancha of x.cancha) {
          if(x.semana === this.numero) {
            if(cancha.name === 'Cancha 1') {
              if(x.dia === 'lunes') {
                if(cancha.disponibilidad === true) {
                  this.horaLunes.push(x.horario)
                  this.miTag.nativeElement.innerHTML = ''
                  for(let i = 0; i < this.horaLunes.length; i ++) {
                    this.miTag.nativeElement.innerHTML += '<div class="mb-1 pt-3 pb-1 bg-success"> <p>' + this.horaLunes[i] + '</p> </div>'
                  }
                }
                if(cancha.disponibilidad === false) {
                  this.horaLunesF.push(x.horario)
                  this.miTag.nativeElement.innerHTML = ''
                  for(let i = 0; i < this.horaLunesF.length; i ++) {
                    this.miTag.nativeElement.innerHTML += '<div class="mb-1 pt-3 pb-1 bg-danger"> <p>' + this.horaLunesF[i] + '</p> </div>'
                  }
                }
              }
              if(x.dia === 'martes') {
                if(cancha.disponibilidad === true) {
                  this.horaMartes.push(x.horario)
                  this.miTag2.nativeElement.innerHTML = ''
                  for(let i = 0; i < this.horaMartes.length; i ++) {
                    this.miTag2.nativeElement.innerHTML += '<div class="mb-1 pt-3 pb-1 bg-success"> <p>' + this.horaMartes[i] + '</p> </div>'
                  }
                }
                if(cancha.disponibilidad === false) {
                  this.horaMartes.push(x.horario)
                  this.miTag2.nativeElement.innerHTML = ''
                  for(let i = 0; i < this.horaMartes.length; i ++) {
                    this.miTag2.nativeElement.innerHTML += '<div class="mb-1 pt-3 pb-1 bg-danger"> <p>' + this.horaMartes[i] + '</p> </div>'
                  }
                }
              }
              if(x.dia === 'miercoles') {
                if(cancha.disponibilidad === true) {
                  this.horaMiercoles.push(x.horario)
                  this.miTag3.nativeElement.innerHTML = ''
                  for(let i = 0; i < this.horaMiercoles.length; i ++) {
                    this.miTag3.nativeElement.innerHTML += '<div class="mb-1 pt-3 pb-1 bg-success"> <p>' + this.horaMiercoles[i] + '</p> </div>'
                  }
                }
                if(cancha.disponibilidad === false) {
                  this.horaMiercoles.push(x.horario)
                  this.miTag3.nativeElement.innerHTML = ''
                  for(let i = 0; i < this.horaMiercoles.length; i ++) {
                    this.miTag3.nativeElement.innerHTML += '<div class="mb-1 pt-3 pb-1 bg-danger"> <p>' + this.horaMiercoles[i] + '</p> </div>'
                  }
                }
              }
              if(x.dia === 'jueves') {
                if(cancha.disponibilidad === true) {
                  this.horaJueves.push(x.horario)
                  this.miTag4.nativeElement.innerHTML = ''
                  for(let i = 0; i < this.horaJueves.length; i ++) {
                    this.miTag4.nativeElement.innerHTML += '<div class="mb-1 pt-3 pb-1 bg-success"> <p>' + this.horaJueves[i] + '</p> </div>'
                  }
                }
                if(cancha.disponibilidad === false) {
                  this.horaJueves.push(x.horario)
                  this.miTag4.nativeElement.innerHTML = ''
                  for(let i = 0; i < this.horaJueves.length; i ++) {
                    this.miTag4.nativeElement.innerHTML += '<div class="mb-1 pt-3 pb-1 bg-danger"> <p>' + this.horaJueves[i] + '</p> </div>'
                  }
                }
              }
              if(x.dia === 'viernes') {
                if(cancha.disponibilidad === true) {
                  this.horaViernes.push(x.horario)
                  this.miTag5.nativeElement.innerHTML = ''
                  for(let i = 0; i < this.horaViernes.length; i ++) {
                    this.miTag5.nativeElement.innerHTML += '<div class="mb-1 pt-3 pb-1 bg-success"> <p>' + this.horaViernes[i] + '</p> </div>'
                  }
                }
                if(cancha.disponibilidad === false) {
                  this.horaViernes.push(x.horario)
                  this.miTag5.nativeElement.innerHTML = ''
                  for(let i = 0; i < this.horaViernes.length; i ++) {
                    this.miTag5.nativeElement.innerHTML += '<div class="mb-1 pt-3 pb-1 bg-danger"> <p>' + this.horaViernes[i] + '</p> </div>'
                  }
                }
              }
              if(x.dia === 'Sabado') {
                if(cancha.disponibilidad === true) {
                  this.horaSabado.push(x.horario)
                  this.miTag6.nativeElement.innerHTML = ''
                  for(let i = 0; i < this.horaSabado.length; i ++) {
                    this.miTag6.nativeElement.innerHTML += '<div class="mb-1 pt-3 pb-1 bg-success"> <p>' + this.horaSabado[i] + '</p> </div>'
                  }
                }
                if(cancha.disponibilidad === false) {
                  this.horaSabado.push(x.horario)
                  this.miTag6.nativeElement.innerHTML = ''
                  for(let i = 0; i < this.horaSabado.length; i ++) {
                    this.miTag6.nativeElement.innerHTML += '<div class="mb-1 pt-3 pb-1 bg-danger"> <p>' + this.horaSabado[i] + '</p> </div>'
                  }
                }
              }
              if(x.dia === 'domingo') {
                if(cancha.disponibilidad === true) {
                  this.horaDomingo.push(x.horario)
                  this.miTag7.nativeElement.innerHTML = ''
                  for(let i = 0; i < this.horaDomingo.length; i ++) {
                    this.miTag7.nativeElement.innerHTML += '<div class="mb-1 pt-3 pb-1 bg-success"> <p>' + this.horaDomingo[i] + '</p> </div>'
                  }
                }
                if(cancha.disponibilidad === false) {
                  this.horaDomingo.push(x.horario)
                  this.miTag7.nativeElement.innerHTML = ''
                  for(let i = 0; i < this.horaDomingo.length; i ++) {
                    this.miTag7.nativeElement.innerHTML += '<div class="mb-1 pt-3 pb-1 bg-danger"> <p>' + this.horaDomingo[i] + '</p> </div>'
                  }
                }
              }
            }
          }
        }
      })
    })
  }
}
