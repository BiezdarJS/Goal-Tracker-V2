import { AfterViewInit, Component, computed, ElementRef, inject, Input, Renderer2, signal, Signal, ViewChild, WritableSignal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ISelectOption } from './interfaces/select-option.interface';
import { NgClass } from '@angular/common';
/** Sharowany komponent do elementu formularza 'select' w aplikacji. */
// Select
declare function Select(): void;
@Component({
  selector: 'gt-select-shared',
  standalone: true,
  imports: [NgClass],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectComponent,
      multi: true
    }
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent implements ControlValueAccessor, AfterViewInit {
  private scriptElement: HTMLScriptElement | null = null;
  @Input() options: ISelectOption[] | undefined;
  @Input() customClasses: string | undefined;
  @ViewChild('selectElement') selectElement: ElementRef | undefined;

  private renderer = inject(Renderer2);
  private elementRef = inject(ElementRef);

  private _currentValue: WritableSignal<string> = signal('');
  public currentValue: Signal<string> = computed(() => this._currentValue());
  private onChange = (value: string) => {};
  private onTouched = (value: string) => {};

  writeValue(newValue: any): void {
      if (newValue) {
        this._currentValue.set(newValue);
      }
  }

  registerOnChange(fn: any): void {
      this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
      this.onTouched = fn;
  }


  // Lifecycle hook: After the view initializes
  ngAfterViewInit(): void {
    this.loadScript('./assets/libs/select.js')
      .then(() => this.initializeLibrary())
      .then(() => this.initializeSelect())
      .catch((error) => console.error('Script load error:', error));
  }

  // Dynamically load the script
  private loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        // Script already loaded
        resolve();
        return;
      }
      this.scriptElement = this.renderer.createElement('script');
      if (this.scriptElement) {
        this.scriptElement.src = src;
        this.scriptElement.type = 'text/javascript';
        this.scriptElement.onload = () => resolve();
        this.scriptElement.onerror = (error) => reject(error);
        this.renderer.appendChild(document.body, this.scriptElement);
      }
    });
  }


  // Initialize the library once the script is loaded
  private initializeLibrary(): void {
    // Assuming select.js exposes a global function `initializeSelect`
    if (typeof (window as any).initializeSelect === 'function') {
      (window as any).initializeSelect('#custom-select-container', {
        className: 'select',
        value: this.currentValue(),
        onChange: (newValue: any) => {
          this._currentValue.set(newValue);
          this.onChange(newValue);
        },
      });
    }
  }

  private initializeSelect() {
    new (Select as any)(this.selectElement?.nativeElement, {
      placeholder: 'Week'
    });
  }
}
