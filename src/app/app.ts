import { Component, signal, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { CommonModule } from '@angular/common'; // Necessario per le direttive [style]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, CommonModule],
  template: `
    <div class="custom-cursor" 
         [style.left.px]="cursorX()" 
         [style.top.px]="cursorY()">
    </div>

    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('32solution');
  
  // Utilizziamo i segnali per la massima performance
  protected readonly cursorX = signal(0);
  protected readonly cursorY = signal(0);

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.cursorX.set(e.clientX);
    this.cursorY.set(e.clientY);
  }
}