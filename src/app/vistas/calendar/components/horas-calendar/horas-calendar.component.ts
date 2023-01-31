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
  displaySiguiente  : boolean = false;
  ruts             !: AllUsuarios[];
  horaDialog       !: string;
  modelRut         !: string;
  useresRuts        : AllUsuarios[] = [];
  userEmail        !: string;
  userTelefono     !: string;
  userNombre       !: string;

  constructor(private cargaMasivaService: CargaMasivaService) { }

  ngOnInit(): void {
    this.cargaMasivaService.getUsers()
      .subscribe(users => {
        this.useresRuts = users;
      })
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
    this.useresRuts.map(user => {
      if(user.rut === this.modelRut) {
        this.userNombre = user.nameUser;
        this.userEmail = user.email;
        this.userTelefono = user.telefono;
        this.displaySiguiente = true;
        this.displayRegistrados = false;
      }
    })
  }

  buttonBack() {
    this.displaySiguiente = false;
    this.displayRegistrados = true;
  }

}
