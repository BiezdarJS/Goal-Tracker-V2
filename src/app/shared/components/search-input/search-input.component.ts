import { Component, computed, ElementRef, Input, input, InputSignal, Renderer2, Signal, signal, ViewChild, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTypeEnum } from './enums/input-type.enum';
import { NgClass } from '@angular/common';
import { GT_ICONS_BASIC } from '@gtSharedComponents/icon/enums/gt-icons.basic';
import { IconComponent } from '@gtSharedComponents/icon/icon.component';
import { IconColorEnum } from '@gtShared/enums/icon-color.enum';

@Component({
  selector: 'gt-search-input',
  standalone: true,
  imports: [IconComponent, FormsModule, NgClass],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss'
})
export class SearchInputComponent {
  @ViewChild('formControlInput') formControlInput!: ElementRef;
  @Input() placeholder: string | undefined;
  public readonly currentValue: Signal<string | null> = computed(() =>
    this._currentValue()
  );
  private _currentValue: WritableSignal<string | null> = signal(null);

  /** Enum dla dostępnych ikon */
  protected readonly GT_ICONS_BASIC = GT_ICONS_BASIC;
  /** Enum dla dostępnych kolorów ikon */
  protected readonly IconColorEnum = IconColorEnum;

  public onChange: (value: string | null) => void = () => {};
  public onTouch: any = (): void => {};
  constructor(private _renderer: Renderer2) {}

  public writeValue(value: string): void {
    this._currentValue.set(value);
  }
  public registerOnChange(fn: (value: string | null) => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  public onInput(inputValue: string) {
    this._currentValue.set(inputValue);
    this._renderer.setProperty(
      this.formControlInput?.nativeElement,
      'value',
      this.currentValue()
    );
    this.onChange(this.currentValue());
  }

  /** Input przyjmujący informację o obecnie wyświetlanym widgecie */
    public inputType: InputSignal<InputTypeEnum | undefined> = input();
    /** Dodatkowe klasy dla obecnie wyświetlanego widgetu */
    public currentInputWrapperClasses: Signal<string> = computed(() => {
      switch(this.inputType()) {
        case(InputTypeEnum.SEARCH) :
          return 'form-field--search';
      }
      return '';
    });
    /** Dodatkowe klasy dla obecnie wyświetlanego widgetu */
    public currentInputClasses: Signal<string> = computed(() => {
      switch(this.inputType()) {
        case(InputTypeEnum.SEARCH) :
          return 'form-field__input--search';
      }
      return '';
    });
}
