import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetThemeService {

  public activeThemeSource: BehaviorSubject<string> = new BehaviorSubject('');
  activeTheme = this.activeThemeSource.asObservable();
  colors!: any;


  setTheme(themeName:string) {
    sessionStorage.setItem('theme', themeName);
    this.activeThemeSource.next(themeName);
    this.colors = sessionStorage.getItem('theme') === 'theme-light' ? 'theme-light' : 'theme-dark';
	}

  toggleTheme() {
		if (sessionStorage.getItem('theme') === 'theme-dark') {
			this.setTheme('theme-light');
		} else {
			this.setTheme('theme-dark');
		}
	}
}
