import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { SetThemeService } from '../../core/services/set-theme.service';
import { HeaderDropdownComponent } from './header-dropdown/header-dropdown.component';
import { UserComponent } from "../../shared/components/user/user.component";
import { ThemeTogglerComponent } from '../../shared/components/theme-toggler/theme-toggler.component';

@Component({
  selector: 'gt-header',
  standalone: true,
  imports: [HeaderDropdownComponent, UserComponent, ThemeTogglerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() infoPopupEvent = new EventEmitter();
  @ViewChild('checkbox') checkbox!: ElementRef;
  public themeName!: string | null;
  // Welcome Name
  public welcomeName!:string | null;

  constructor(
    private setThemeService: SetThemeService,
  ) {}


  ngOnInit():void {
    this.setThemeService.activeTheme.subscribe(themeName => this.themeName = themeName);
    // Welcome Name
    this.welcomeName = sessionStorage.getItem('welcome-name');
  }


  ngAfterViewInit():void {
    if (sessionStorage.getItem('theme') === 'theme-dark') {
      this.checkbox.nativeElement.checked = true;
    } else {
      this.checkbox.nativeElement.checked = false;
    }
  }

  public handleInfoPopup() {
    this.infoPopupEvent.emit();
  }

  public toggleTheme() {
    this.setThemeService.toggleTheme();
  }
}
