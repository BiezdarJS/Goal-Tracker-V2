import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { AppThemeTypeEnum } from '../../shared/enums/app-theme-type.enum';
/** Serwis do zmiany i przechowywania danch o obecnie wyświetlanym motywie aplikacji -> light/dark */
@Injectable({
  providedIn: 'root'
})
export class ActiveThemeService {
  /** Obecnie wyświetalny rodzaj motywu -> light/dark - prywatne */
  private _activeTheme: WritableSignal<string | null> = signal(AppThemeTypeEnum.LIGHT);
  /** Obecnie wyświetalny rodzaj motywu -> light/dark - publiczne */
  public activeTheme: Signal<string | null> = computed(() => this._activeTheme());

  /** Obłsuga przełączania motywu light/dark */
  public setTheme(themeType:string): void {
    sessionStorage.setItem('theme', themeType);
    this._activeTheme.set(themeType);
	}

  /** Obłsuga przełączania motywu light/dark */
  public toggleTheme(): void {
		if (sessionStorage.getItem('theme') === AppThemeTypeEnum.DARK) {
			this.setTheme(AppThemeTypeEnum.LIGHT);
		} else {
			this.setTheme(AppThemeTypeEnum.DARK);
		}
	}
}
