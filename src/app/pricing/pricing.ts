import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutModalComponent } from '../checkout-modal/checkout-modal'; 

@Component({
  selector: 'app-pricing',
  standalone: true,
  // Aggiungi CheckoutModalComponent negli imports per renderlo noto al template
  imports: [CommonModule, CheckoutModalComponent], 
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
})
export class Pricing {
  isCheckoutOpen: boolean = false;

  openCheckout() {
    console.log("Bottone cliccato!"); 
    this.isCheckoutOpen = true;
  }

  // Questa funzione viene chiamata quando emetti l'evento (close) dal modale
  closeCheckout() {
    this.isCheckoutOpen = false;
  }
}