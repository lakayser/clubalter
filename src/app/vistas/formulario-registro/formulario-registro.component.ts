import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormularioService } from 'src/app/servicios/formulario.service';


@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  constructor(private route: Router, private formularioService:FormularioService) { }
 
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
  
      // nombreCancha: new FormControl(''),
      numeroCanchas: new FormControl(''),
    
      rangoHorario1: new FormControl(''),
      rangoHorario2: new FormControl(''),
      rangoHorario3: new FormControl(''),

      tieneHorario: new FormControl(''),
      horaCancha: new FormControl(''),
      horaCanchaAM: new FormControl(''),
      horaCanchaPM: new FormControl(''),
      tieneClase:new FormControl(''),
      numClases: new FormControl(''),
      canchaClases: new FormControl(''),
      detalleHorario: new FormControl(''),
      participante: new FormControl(''),
      valorClase: new FormControl(''),
      horarioClase: new FormControl('')
      // canchaClase: new FormControl(''),
      // planMensual: new FormControl(''),
      // detalles: new FormControl(''),
    }) 

  ngOnInit(): void {
  }

  submit() {
    this.formularioService.enviarFormulario(this.multistep.value).subscribe((res)=>{
      console.log(res);
    });
      // this.route.navigate(['/Gracias'])
  }

  addFormu(form:NgForm){
    this.formularioService.enviarFormulario(form.value).subscribe((res)=>{
      console.log(res);
    });
  }
}
