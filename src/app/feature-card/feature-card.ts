import { Component, Input, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.css'
})
export class FeatureCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() tags: string[] = [];

  constructor(private el: ElementRef) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Posizione mouse relativa al centro del box
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Calcolo inclinazione: range -10 a 10 gradi
    const rotateX = ((mouseY - centerY) / centerY) * -10;
    const rotateY = ((mouseX - centerX) / centerX) * 10;
    
    // Applica variabili CSS per l'effetto 3D
    this.el.nativeElement.style.setProperty('--rotateX', `${rotateX}deg`);
    this.el.nativeElement.style.setProperty('--rotateY', `${rotateY}deg`);
    
    // Coordinate per l'effetto luce
    this.el.nativeElement.style.setProperty('--x', `${mouseX}px`);
    this.el.nativeElement.style.setProperty('--y', `${mouseY}px`);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // Reset inclinazione al mouse leave
    this.el.nativeElement.style.setProperty('--rotateX', '0deg');
    this.el.nativeElement.style.setProperty('--rotateY', '0deg');
  }
}