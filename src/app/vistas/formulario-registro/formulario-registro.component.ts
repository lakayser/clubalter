import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormularioService } from 'src/app/servicios/formulario.service';


@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  constructor(private route: Router, private formularioService:FormularioService) { }
 
  multistep = new UntypedFormGroup({
      nombreRazon: new UntypedFormControl(''),
      rut: new UntypedFormControl(''),
      giro: new UntypedFormControl(''),
      nombre: new UntypedFormControl(''),
      email: new UntypedFormControl(''),
      telefono: new UntypedFormControl(''),
      direccion: new UntypedFormControl(''),
 
      nombreNegocio: new UntypedFormControl(''),
      logo: new UntypedFormControl(''),
      fondo: new UntypedFormControl(''),
      administrador: new UntypedFormControl(''),
  
      // nombreCancha: new FormControl(''),
      numeroCanchas: new UntypedFormControl(''),
    
      rangoHorario1: new UntypedFormControl(''),
      rangoHorario2: new UntypedFormControl(''),
      rangoHorario3: new UntypedFormControl(''),

      tieneHorario: new UntypedFormControl(''),
      horaCancha: new UntypedFormControl(''),
      horaCanchaAM: new UntypedFormControl(''),
      horaCanchaPM: new UntypedFormControl(''),
      tieneClase:new UntypedFormControl(''),
      numClases: new UntypedFormControl(''),
      canchaClases: new UntypedFormControl(''),
      detalleHorario: new UntypedFormControl(''),
      participante: new UntypedFormControl(''),
      valorClase: new UntypedFormControl(''),
      horarioClase: new UntypedFormControl('')
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
