import { AfterViewInit, ChangeDetectionStrategy, Component, computed, ElementRef, EventEmitter, OnInit, Output, signal, Signal, ViewChild, WritableSignal } from '@angular/core';
import { HeaderDropdownComponent } from './user-dropdown/user-dropdown.component';
import { UserComponent } from "./user/user.component";
import { ThemeTogglerComponent } from '../../shared/components/theme-toggler/theme-toggler.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { GT_ICONS_BASIC } from '../../shared/components/icon/enums/gt-icons.basic';
import { IconColorEnum } from '../../shared/enums/icon-color.enum';
import { SearchInputComponent } from '@gtSharedComponents/search-input/search-input.component';
import { InputTypeEnum } from '@gtSharedComponents/search-input/enums/input-type.enum';
/** Komponent headera aplikacji */
@Component({
  selector: 'gt-header',
  standalone: true,
  imports: [
    IconComponent,
    HeaderDropdownComponent,
    ThemeTogglerComponent,
    UserComponent,
    SearchInputComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, AfterViewInit {
  /** Event do wyświetlania popupu powitalnego */
  @Output() infoPopupEvent = new EventEmitter();
  /** Checkbox sprawdzający aktywny motyw light/dark */
  @ViewChild('checkbox') checkbox!: ElementRef;
  /** Imię Usera - prywatne */
  private _welcomeName: WritableSignal<string | null> = signal(null);
  /** Imię Usera - publiczne */
  public welcomeName: Signal<string | null> = computed(() => this._welcomeName());
  /** Enum dla dostępnych ikon */
  protected readonly GT_ICONS_BASIC = GT_ICONS_BASIC;
  /** Enum dla dostępnych kolorów ikon */
  protected readonly IconColorEnum = IconColorEnum;
  /** Enum dla dostępnych kolorów ikon */
  protected readonly InputTypeEnum = InputTypeEnum;

  /** OnInit */
  ngOnInit():void {
    this._welcomeName.set(sessionStorage.getItem('welcome-name'));
  }

  /** AfterViewInit */
  ngAfterViewInit():void {
    // if (sessionStorage.getItem('theme') === 'theme-dark') {
    //   this.checkbox.nativeElement.checked = true;
    // } else {
    //   this.checkbox.nativeElement.checked = false;
    // }
  }

  /** Wyświetla komunikat powitalny z instrukcjami */
  public handleInfoPopup() {
    this.infoPopupEvent.emit();
  }
}
