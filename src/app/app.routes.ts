import { Routes } from '@angular/router';
import { Home } from './home/home'; 
import { Pricing } from './pricing/pricing'; 
import { Showcase } from './showcase/showcase';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'pricing',
    component: Pricing
  }, 
  {
    path: 'showcase',
    component: Showcase
  }
];