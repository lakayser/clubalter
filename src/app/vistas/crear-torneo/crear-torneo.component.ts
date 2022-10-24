import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormularioService } from 'src/app/servicios/formulario.service';

@Component({
  selector: 'app-crear-torneo',
  templateUrl: './crear-torneo.component.html',
  styleUrls: ['./crear-torneo.component.css']
})
export class CrearTorneoComponent implements OnInit {


  torneo = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
    rut: new FormControl(''),
    fecha: new FormControl(''),
    telefono: new FormControl(''),
    contraseña: new FormControl(''),
    contraseña2: new FormControl('')

  })

  constructor(private route: Router, private readonly fb: FormBuilder, private formularioService: FormularioService) { }

  ngOnInit(): void {
    // this.multistep = this.initForm();
  }
  submit() {
    // console.log('form-> ', this.multistep.value);
    this.formularioService.enviarRegistro(this.torneo.value).subscribe((res) => {

      console.log(res);
    })

  }
  addRegistro(form: NgForm) {
    this.formularioService.enviarRegistro(form.value).subscribe((res) => {
      console.log(res)
    })
  }

}
