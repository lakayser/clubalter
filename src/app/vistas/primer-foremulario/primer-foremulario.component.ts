import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormularioService } from 'src/app/servicios/formulario.service';

import { MailService } from 'src/app/servicios/mail.service';

@Component({
  selector: 'app-primer-foremulario',
  templateUrl: './primer-foremulario.component.html',
  styleUrls: ['./primer-foremulario.component.css']
})
export class PrimerForemularioComponent implements OnInit {

  multistep = new FormGroup({
      
        nombre: new FormControl(''),
        // apellido: new FormControl(''),
        email: new FormControl(''),
        rut: new FormControl(''),
        fecha: new FormControl(''),
        telefono: new FormControl(''),
        contraseña: new FormControl(''),
        contraseña2: new FormControl('')
     
        
     
  })
  constructor(private route:Router, private readonly fb:FormBuilder, private formularioService:FormularioService) { }

  ngOnInit(): void {
    // this.multistep = this.initForm();
  }

  // initForm(): FormGroup {
  //   return this.fb.group({
  //     nombre: ['', [Validators.required, Validators.minLength(5)]],
  //     apellido: ['', [Validators.required, Validators.minLength(5)]]

  //   })
  // }

  submit() {
      // console.log('form-> ', this.multistep.value);
      this.formularioService.enviarRegistro(this.multistep.value).subscribe((res)=>{

        console.log(res);
      })  

  }
 addRegistro(form:NgForm){
  this.formularioService.enviarRegistro(form.value).subscribe((res)=>{
    console.log(res)
  })
 }
 
}
