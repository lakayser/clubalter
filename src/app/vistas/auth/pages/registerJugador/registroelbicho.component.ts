import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, NgForm, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/servicios/api/api.service';


@Component({
  selector: 'app-registroelbicho',
  templateUrl: './registroelbicho.component.html',
  styleUrls: ['./registroelbicho.component.css']
})
export class RegistroComponent implements OnInit {

  reactiveForm: FormGroup;
   IDX: any={};
   Rol: any={};

   
constructor(private router: Router, private formBuilder: FormBuilder, private registroService:ApiService) {
  this.reactiveForm = this.formBuilder.group({
    nameUser: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
    organization: ['623c92c697790a694cdc6959', ],
    rut: ['', [Validators.required, Validators.pattern('^[0-9]{1,8}-[0-9Kk]$')]],
    telefono: ['', [Validators.required]],
    email: ['', [Validators.required]],
  }, {
    validator: this.Mustmatch('password', 'confirmPassword')

  })
 }

ngOnInit(): void {
  let lol= '620c0d94b83e4a21f81253d6';
  let BN = '623c92c697790a694cdc6959';
  this.IDX = BN;
  this.Rol = lol;
  console.log(this.IDX)
  console.log(this.Rol)
}

Mustmatch(password: string, confirmPassword: string) {
  return (formGroup: FormGroup) => {
    const passwordcontrol = formGroup.controls[password];
    const confirmPasswordcontrol = formGroup.controls[confirmPassword];

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

getControl(name: any): AbstractControl | null {
  return this.reactiveForm.get(name)
}

submit() {
  this.registroService.singUp(this.reactiveForm.value).subscribe((res)=>{
    console.log(res);
    this.router.navigate(['/nombreclub'])
  })
}
goLogin(){
  this.router.navigate(['/auth/login'])
}
}
