import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public logout() {
    document.body.classList.remove('theme-light','theme-dark');
    sessionStorage.removeItem('theme');
    sessionStorage.removeItem('access-token');
    sessionStorage.removeItem('welcome-name');
    sessionStorage.removeItem('welcome-message');
  }
}
