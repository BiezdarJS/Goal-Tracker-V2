import { computed, inject, Injectable, Signal } from '@angular/core';
import { ActiveThemeService } from '@gtCoreServices/active-theme.service';
import { AppThemeTypeEnum } from '@gtShared/enums/app-theme-type.enum';
import { IChartColorPalette } from '@gtSharedInterfaces/chart-color-palette.interface';
/** Serwis przechowywujący globalne dane dla wykresów  */
@Injectable()
export class ChartDataStoreService {

  activeThemeService = inject(ActiveThemeService);

  public chartColors: Signal<IChartColorPalette | null> = computed(() => {
    const theme = this.activeThemeService.activeTheme();
    if (theme === AppThemeTypeEnum.LIGHT) {
        return {
            lightDark: '#455964',
            red: "#ffa38f",
            orange: "rgb(255, 159, 64)",
            yellow: "rgb(255, 205, 86)",
            green: "#8eefca",
            blue: "#aabeff",
            purple: "rgb(153, 102, 255)",
            grey: "rgb(231,233,237)",
            transparent: 'transparent'
        };
    } else if (theme === AppThemeTypeEnum.DARK) {
        return {
            lightDark: '#fff',
            red: "#ff8263",
            orange: "rgb(255, 159, 64)",
            yellow: "#fdd44f",
            green: "#42dea2",
            blue: "#718fff",
            purple: "rgb(153, 102, 255)",
            grey: "rgb(231,233,237)",
            transparent: 'transparent'
        };
    }
    return null;
});

}
