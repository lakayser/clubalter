import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  constructor() { }
  step: any = 1;
  multistep = new FormGroup({
      nombreRazon: new FormControl(''),
      rut: new FormControl(''),
      giro: new FormControl(''),
      nombre: new FormControl(''),
      email: new FormControl(''),
      telefono: new FormControl(''),
      direccion: new FormControl(''),
 
      nombreNegocio: new FormControl(''),
      logo: new FormControl(''),
      fondo: new FormControl(''),
      administrador: new FormControl(''),
  
      nombreCancha: new FormControl(''),
      numeroCanchas: new FormControl(''),
      rangosHorarios: new FormControl(''),
      tieneHorario: new FormControl(''),
      horaCancha: new FormControl(''),
      rango: new FormControl(''),
      tieneClase:new FormControl(''),
      numProf: new FormControl(''),
      rutProf: new FormControl(''),
      participante: new FormControl(''),
      planMensual: new FormControl(''),
      detalles: new FormControl(''),
    })

  ngOnInit(): void {
  }
  submit() {
    this.step = this.step + 1;
    if(this.step == 5){
      console.log('form-> ', this.multistep.value);
    }
  }
  volver() {
    this.step = this.step - 1;
  }
}
