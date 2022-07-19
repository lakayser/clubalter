import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    nameUser: '',
    password: ''
  }

  constructor(private api   :ApiService,
              private router:Router) { }

  ngOnInit(): void {
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
          text: 'Usuario y/o contraseña incorrectos',
          timer:2500
        }); }
      )
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
