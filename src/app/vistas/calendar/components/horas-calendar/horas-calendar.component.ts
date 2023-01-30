import { Component, Input, OnInit } from '@angular/core';
import { CargaMasivaCalendar } from '../../interfaces/cargaMasiva.interface';
import { CargaMasivaService } from '../../services/carga-masiva.service';
import { environment } from 'src/environments/environment';
import { AllUsuarios } from '../../interfaces/allUsers.interface';

@Component({
  selector: 'app-horas-calendar',
  templateUrl: './horas-calendar.component.html',
  styles: [
    `
      .grd-horas {
        display              : grid;
        place-content        : center;
        grid-template-columns: repeat(7, 9rem);
      }
      .grd-registrados {
        display              : grid;
        grid-template-rows   : repeat(10, 2rem);
        grid-template-columns: repeat(3, 8rem);
      }
    `
  ]
})
export class HorasCalendarComponent implements OnInit {

  @Input() canchaSeleccionada      !: string;
  @Input() carga                   !: CargaMasivaCalendar[];

  tipoUsuario       !: string;
  rol               !: string | null;
  displayOpciones   : boolean = false;
  displayRegistrados: boolean = false;
  ruts             !: AllUsuarios[];
  horaDialog       !: string;
  modelRut         !: string;

  constructor(private cargaMasivaService: CargaMasivaService) { }

  ngOnInit(): void {
  }

  agendarHora(horas: CargaMasivaCalendar) {
    this.rol = localStorage.getItem('rol');
    if(this.rol === environment.administrador) {
      console.log('administrador',horas)
    }
    this.horaDialog = horas.rangoHorario;
    this.displayOpciones = true;
  }

  usuariosRegistrados() {
    this.displayRegistrados = true;
    this.displayOpciones = false;
  }

  getRutUserRegistrado(rut: any) {
    const rutValue = rut.target.value;
    this.cargaMasivaService.getUsersxRut(rutValue)
      .subscribe(
        ruts => this.ruts = ruts.splice(0, 6),
        (err) => this.ruts = [],
      );
  }

  getClickRut(setRut: string) {
    this.modelRut = setRut;
  }

  setDatesRuts() {
    console.log(this.modelRut);
  }

}
