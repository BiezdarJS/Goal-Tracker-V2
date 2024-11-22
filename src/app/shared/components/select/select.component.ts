import { AfterViewInit, Component, computed, ElementRef, EventEmitter, inject, Input, Output, Renderer2, signal, Signal, ViewChild, WritableSignal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ISelectOption } from './interfaces/select-option.interface';
import { NgClass } from '@angular/common';
import { ScriptLoaderService } from '@gtCoreServices/script-loader.service';
/** Sharowany komponent do elementu formularza 'select' w aplikacji. */
@Component({
  selector: 'gt-select-shared',
  standalone: true,
  imports: [NgClass],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectComponent,
      multi: true
    },
    ScriptLoaderService
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent implements ControlValueAccessor, AfterViewInit {
  /** Przyjmuje opcje dla tej instancji select */
  @Input() options: ISelectOption[] | undefined;
  /** Przyjmuje customowe klasy dla tej instancji select */
  @Input() customClasses: string | undefined;
  /** Emituje referencję do tej instancji select */
  @ViewChild('selectElement') selectElement: ElementRef | undefined;
  /** Emituje referencję do tej instancji select */
  @Output() initializeSelectEmitter = new EventEmitter<ElementRef<any>>;

  private _currentValue: WritableSignal<string> = signal('');
  public currentValue: Signal<string> = computed(() => this._currentValue());
  private onChange = (value: string) => {};
  private onTouched = (value: string) => {};

  constructor(private scriptLoaderService: ScriptLoaderService) {}

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
    this.scriptLoaderService.loadScript('./assets/libs/select.js')
      .then(() => {
        if ((window as any).Select) {
          this.initializeLibrary();
        } else {
          throw new Error('Select.js did not initialize correctly');
        }
      })
      .then(() => this.emitSelectElement())
      .catch((error) => console.error('Script load error:', error));
  }


  // Initialize the library once the script is loaded
  private initializeLibrary(): Promise<void> {
    return new Promise((resolve, reject) => {
      // Check if `Select` is available in the global scope
      if (typeof (window as any).Select === 'undefined') {
        reject(new Error('Select is not defined.'));
        return;
      }

      // If `Select` is defined, proceed with initialization
      try {
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
        resolve(); // Indicate successful initialization
      } catch (error) {
        console.error('Error during library initialization:', error);
        reject(error); // Reject the promise if an error occurs
      }
    });
  }


  private emitSelectElement() {
    this.initializeSelectEmitter.emit(this.selectElement?.nativeElement);
  }
}
