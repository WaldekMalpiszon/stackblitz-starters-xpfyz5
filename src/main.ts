import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<p [style.background-color]="kolor" [style.text-align]="jak">
Nazywam się {{imie}} {{nazwisko}}</p>
 <img src="src/baryka.jpg" [class.zdjecie]="aktywna">
 <button (click)="zmienKolor()" type="button" [class.przycisk]="aktywna">Zmień kolor tła</button>`,
  styles: [
    `
 .zdjecie {border: 2px solid #000; display: block; margin: auto;}
 .przycisk {border: none; color: green; background-color: inherit; padding:
10px; font-size: 12px; cursor: pointer; display: block; margin: 10px auto;}
 .przycisk:hover {background: #eee;}
 `,
  ],
})
export class AppComponent {
  imie: string = 'Cezary';
  nazwisko: string = 'Baryka';
  kolor: string = 'yellow';
  jak: string = 'center';
  aktywna: boolean = true;
  zmienKolor() {
    this.kolor = this.kolor === 'yellow' ? 'green' : 'yellow';
  }
}

bootstrapApplication(AppComponent);
