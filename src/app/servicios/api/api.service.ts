import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private URL = "https://botmila-api.herokuapp.com/botmilaAPI/auth";
  private URL2 = "https://botmila-api.herokuapp.com/botmilaAPI/";

  constructor(private http: HttpClient, private router: Router) { }

  // loginByName(form:LoginI):Observable<responseI> {
  //   let direccion = this.url + "signin";
  //   return this.http.post<responseI>(direccion, form);
  // }

  profile () {
    this.http.get<any>(this.URL2 + '/profile');
  }

  signIn (user:any){
    return this.http.post<any>(this.URL + '/signin', user);
  }
  singUp(usuario:Usuario){
    return this.http.post(`${this.URL}/signup`, usuario);
  }

  loggedIn () {
    return !!localStorage.getItem('token');
  }

  getToken () {
    return localStorage.getItem('token');
  }

  logout () {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }
}
