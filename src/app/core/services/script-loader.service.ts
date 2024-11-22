import { Injectable, Renderer2 } from '@angular/core';
/** Serwis do ładowania skryptów */
@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {

  constructor(private renderer: Renderer2) {}

  /** Metoda do ładowania skryptów */
  public loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      // Dynamically load the script
      const scriptElement = this.renderer.createElement('script');
      scriptElement.src = src;
      scriptElement.type = 'text/javascript';
      scriptElement.onload = () => {
        // Add a small delay before checking `Select`
        if (typeof (window as any).Select !== 'undefined') {
          resolve(); // Successfully loaded the script and `Select` is defined
        } else {
          reject(new Error('Select is not defined after script load.'));
        }
      };
      scriptElement.onerror = () => {
        reject(new Error('Failed to load script: ' + src));
      };

      this.renderer.appendChild(document.body, scriptElement);
    });
  }
}
