import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/servicios/api/api.service';


@Component({
  selector: 'app-registroelbicho',
  templateUrl: './registroelbicho.component.html',
  styleUrls: ['./registroelbicho.component.css']
})
export class RegistroelbichoComponent implements OnInit {


   IDX: any={};
   Rol: any={};

   player = new UntypedFormGroup({
      
    nameUser: new UntypedFormControl(''),
    password: new UntypedFormControl(''),
    organization: new UntypedFormControl(''),
    rut: new UntypedFormControl(''),
    telefono: new UntypedFormControl(''),
    email: new UntypedFormControl(''),
    // roles: new FormControl('')
})
constructor(private route:Router, private readonly fb:UntypedFormBuilder, private registroService:ApiService) { }

ngOnInit(): void {
  let lol= '620c0d94b83e4a21f81253d6';
  let BN = '623c92c697790a694cdc6959';
  this.IDX = BN;
  this.Rol = lol;
 this.player = this.initForm();
}

initForm(): UntypedFormGroup {
  return this.fb.group({
    nameUser: ['', [Validators.required]],
    password: ['', [Validators.required]],
    organization: [this.IDX, [Validators.required]],
    rut: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
    email: ['', [Validators.required]],
    // roles: [this.Rol, [Validators.required]],
  })
}


submit() {
  // console.log('form-> ', this.multistep.value);
  this.registroService.singUp(this.player.value).subscribe((res)=>{
    console.log(res);

  })  

}

}
