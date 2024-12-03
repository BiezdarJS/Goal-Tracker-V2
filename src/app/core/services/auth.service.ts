import { Injectable } from '@angular/core';
/** Serwis z narzędzami do autoryzacji użytkownika */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /** Akcja wylogowania */
  public logout() {
    document.body.classList.remove('theme-light','theme-dark');
    sessionStorage.removeItem('theme');
    sessionStorage.removeItem('access-token');
    sessionStorage.removeItem('welcome-name');
    sessionStorage.removeItem('welcome-message');
  }
}
