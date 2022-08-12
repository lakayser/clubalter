import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    nameUser: '',
    password: '',
    email: '',
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
        },
        err => { console.log(err); }
      )
  }

}
