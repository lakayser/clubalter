import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, NgForm, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FormularioService } from 'src/app/servicios/formulario.service';

import { MailService } from 'src/app/servicios/mail.service';

@Component({
  selector: 'app-primer-foremulario',
  templateUrl: './primer-foremulario.component.html',
  styleUrls: ['./primer-foremulario.component.css']
})
export class PrimerForemularioComponent implements OnInit {

  reactiveForm: FormGroup;
  constructor(private router:Router,private formBuilder: FormBuilder, private readonly fb:UntypedFormBuilder, private formularioService:FormularioService) { 
    this.reactiveForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      contraseña: ['', [Validators.required]],
      contraseña2: ['', [Validators.required]],
      rut: ['', [Validators.required, Validators.pattern('^[0-9]{1,8}-[0-9Kk]$')]],
      telefono: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      fecha: ['', [Validators.required]],
    }, {
      validator: this.Mustmatch('contraseña', 'contraseña2')
  
    })
  }

  ngOnInit(): void {

  }
  Mustmatch(contraseña: string, contraseña2: string) {
    return (formGroup: FormGroup) => {
      const passwordcontrol = formGroup.controls[contraseña];
      const confirmPasswordcontrol = formGroup.controls[contraseña2];
  
      if (confirmPasswordcontrol.errors && !confirmPasswordcontrol.errors.mustMatch) {
        return;
      }
      if (passwordcontrol.value !== confirmPasswordcontrol.value) {
        confirmPasswordcontrol.setErrors({ mustMatch: true })
      } else {
        confirmPasswordcontrol.setErrors(null);
      }
    }
  }
  submit() {
      this.formularioService.enviarRegistro(this.reactiveForm.value).subscribe((res)=>{

        console.log(res);
      })  

  }
  getControl(name: any): AbstractControl | null {
    return this.reactiveForm.get(name)
  }
  
  goLogin(){
    this.router.navigate(['/auth/login'])
  }
 
}
