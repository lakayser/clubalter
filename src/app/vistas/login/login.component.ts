import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';
import { MailService } from 'src/app/servicios/mail.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    nameUser: '',
    password: '',
    email: ''
  }
   passwordForm!: FormGroup;
  constructor(private api   :ApiService,
              private router:Router, public mailService: MailService, private readonly fb:FormBuilder ) { }

  ngOnInit(): void {
    this.passwordForm = this.initForm();
  }

  signin (){
    this.api.signIn(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/canchasGestion']);

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bienvenido',
            showConfirmButton: false,
            timer: 1200,
            timerProgressBar: true,
            
            
          })

        },
        err => { Swal.fire({
          icon: 'error',
          title: 'Error',
          text: err.error.message,
          timer:2500
        }); }
      )
  }
  onSubmit():void{
    this.mailService.postEmail(this.passwordForm.value).subscribe((res)=>{
 console.log(this.passwordForm.value);
    })
  }
  enviarEmail(form:NgForm)
  {
      this.mailService.postEmail(form.value).subscribe((res)=>{
        console.log(res);
        form.reset();
    });;
  }
  initForm(): FormGroup{
    return this.fb.group({
      emailPersona:['',[Validators.required]],
      mensaje:['Esta Cuenta Intenta Recuperar Su Contraseña',[Validators.required]],
    })
  }

  // showModal() {
  //   this.api.signIn(this.user)
  //   .subscribe(
  //     res => {
  //       console.log(res);
  //       localStorage.setItem('token', res.token);
  //       this.router.navigate(['/canchasGestion']);
  //     },
  //     err => { Swal.fire({
  //       title: 'Error!',
  //       text: 'Credenciales incorrectas',
  //       timer:2000
  //     }); }
  //   )
    
  // }

}
