import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { SetThemeService } from '../../core/services/set-theme.service';
import { HeaderDropdownComponent } from './header-dropdown/header-dropdown.component';
import { UserComponent } from "./user/user.component";
import { ThemeTogglerComponent } from '../../shared/components/theme-toggler/theme-toggler.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { GT_ICONS_BASIC } from '../../shared/components/icon/enums/gt-icons.basic';

@Component({
  selector: 'gt-header',
  standalone: true,
  imports: [
    IconComponent,
    HeaderDropdownComponent,
    ThemeTogglerComponent,
    UserComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() infoPopupEvent = new EventEmitter();
  @ViewChild('checkbox') checkbox!: ElementRef;
  public themeName!: string | null;
  // Welcome Name
  public welcomeName!:string | null;

  protected readonly GT_ICONS_BASIC = GT_ICONS_BASIC;

  constructor(
    private setThemeService: SetThemeService,
  ) {}


  ngOnInit():void {
    this.setThemeService.activeTheme.subscribe(themeName => this.themeName = themeName);
    // Welcome Name
    this.welcomeName = sessionStorage.getItem('welcome-name');
  }


  ngAfterViewInit():void {
    // if (sessionStorage.getItem('theme') === 'theme-dark') {
    //   this.checkbox.nativeElement.checked = true;
    // } else {
    //   this.checkbox.nativeElement.checked = false;
    // }
  }

  public handleInfoPopup() {
    this.infoPopupEvent.emit();
  }

  public toggleTheme() {
    this.setThemeService.toggleTheme();
  }
}
