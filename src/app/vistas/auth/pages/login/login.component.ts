import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../servicios/api/api.service';
import { Router } from '@angular/router';
import { MailService } from 'src/app/servicios/mail.service';
import { UntypedFormBuilder, UntypedFormGroup, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Uruarioz: any;

  user = {
    nameUser: '',
    password: '',
    email: '',
  }
  reactiveForm: FormGroup;

  passwordForm!: UntypedFormGroup;
  constructor(private api: ApiService,
    private router: Router, public mailService: MailService, private readonly fb: UntypedFormBuilder,  private formBuilder: FormBuilder) { 
      this.reactiveForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      })
    }
    jk: any;
  ngOnInit(): void {
    this.passwordForm = this.initForm();
  }

  signin() {
    this.api.signIn(this.reactiveForm.value)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token,);
          localStorage.setItem('organization', res.organization,);
          localStorage.setItem('rol', res.rol);
          var orga = localStorage.getItem('organization');
          var rol = localStorage.getItem('rol');
          if (orga === '623c92c697790a694cdc6959') {
            if (rol === '620c0d94b83e4a21f81253d7') {
              this.router.navigate(['/mod/subodminio/dash-boardAdm'])

            } else {
              if (rol === '63111b712b21bfd30c4d9e02') {
                this.router.navigate(['/mod/subodminio/dash-boardSub']);
              } else {
                if (rol === '620c0d94b83e4a21f81253d6') {
                  this.router.navigate(['/canchaselbicho/dashboarduser'])
                }
              }
            }
          }
          if (orga === '624f01c7f0bc4892296abfe7') {
            this.router.navigate(['/mod/organizacion'])
          }



          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bienvenido',
            showConfirmButton: false,
            timer: 1200,
            timerProgressBar: true,


          }).then(() => {
            window.location.reload()});

        },
        err => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: err.error.message,
            timer: 2500
          });
        }
      )
  }
  onSubmit(): void {
    this.mailService.postEmail(this.passwordForm.value).subscribe((res) => {
      console.log(this.passwordForm.value);
    })
  }
  enviarEmail(form: NgForm) {
    this.mailService.postEmail(form.value).subscribe((res) => {
      console.log(res);
      form.reset();
    });;
  }
  initForm(): UntypedFormGroup {
    return this.fb.group({
      emailPersona: ['', [Validators.required]],
      mensaje: ['Esta Cuenta Intenta Recuperar Su Contraseña', [Validators.required]],
    })
  }


}
