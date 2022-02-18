import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private URL = "http://localhost:3000/botmilaAPI/auth";
  private URL2 = "http://localhost:3000/botmilaAPI";

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

  loggedIn () {
    return !!localStorage.getItem('token');
  }

  getToken () {
    return localStorage.getItem('token');
  }

  logout () {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
