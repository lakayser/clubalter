import { Injectable }   from '@angular/core';
import { CanActivate }  from '@angular/router';
import { ApiService }   from './servicios/api/api.service';
import { Router }       from '@angular/router';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private apiService: ApiService,
               private router: Router) {}

  canActivate (): boolean {
    if (this.apiService.loggedIn()) {
      return true;
    }
    this.router.navigate(['/login'])
    return false;
  }
    
  }
