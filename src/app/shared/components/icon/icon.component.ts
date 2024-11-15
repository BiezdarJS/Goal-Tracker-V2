import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import { NgStyle } from '@angular/common';
import { GT_ICONS_BASIC } from './enums/gt-icons.basic';
/** Globalny komponent do wyświetlania ikon w aplikacji. */
@Component({
    selector: 'gt-icon',
    standalone: true,
    imports: [NgStyle],
    template: ` <div
        class="gt-icon"
        [ngStyle]="{
      '--gt-icon-size': size + 'px',
      '--gt-icon-fill-color': fillColor ? fillColor : 'none',
      '--gt-icon-stroke-color': strokeColor ? strokeColor : 'none'
    }">
        <span #icon class="gt-icon--span"></span>
    </div>`,
    styleUrl: './icon.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements AfterViewInit, OnChanges {
    /** Rodzaj ikony. */
    @Input() icon!: GT_ICONS_BASIC;
    /** Wielkość ikony. */
    @Input() size: 50 | 48 | 40 | 32 | 30 | 24 | 22 | 20 | 19 | 18 | 17 | 16 | 14 | 12 = 24;
    @Input() fillColor!: string;
    @Input() strokeColor!: string;
    /** Referencja elementu ikony. */
    @ViewChild('icon') iconRef!: ElementRef;

    private importIcon(path: string, icon: string): Promise<any> {
        return import(`./${path}/${icon}/index.js`);
    }

    /** AfterViewInit. */
    ngAfterViewInit(): void {
        if (this.iconRef) {
          this.loadIcon();
        }
    }
    /** OnChanges. */
    ngOnChanges(changes: SimpleChanges): void {
        if (changes['icon']) {
            this.loadIcon();
        }
    }

    /** Ładuje ikonę na podstawie danych wejściowych. */
    private loadIcon(): void {
        const path = this.getFilePath();
        if (path && this.icon) {
            this.importIcon(path, this.icon).then(module => {
                (this.iconRef?.nativeElement as HTMLElement).innerHTML = module.default;
            });
        }
    }

    /** Pobiera ścieżkę pliku. */
    private getFilePath(): string | null {
        if (Object.values(GT_ICONS_BASIC).includes(this.icon as GT_ICONS_BASIC)) {
            return 'icons-basic';
        }
        return null;
    }
}
