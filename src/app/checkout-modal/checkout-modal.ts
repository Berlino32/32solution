import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkout-modal',
  standalone: true,
  templateUrl: './checkout-modal.html',
  styleUrl: './checkout-modal.css'
})
export class CheckoutModalComponent {
  // Questa è la proprietà Output
  @Output() close = new EventEmitter<void>();

  // Questa è la funzione che chiami dall'HTML
  closeModal() {
    this.close.emit(); // <--- Questo dice ad Angular di inviare il segnale di chiusura
  }

  copy(text: string) {
    navigator.clipboard.writeText(text);
    alert('Copiato negli appunti!');
  }

  onOverlayClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('modal-overlay')) {
      this.close.emit(); // Anche qui usiamo .emit()
    }
  }
}