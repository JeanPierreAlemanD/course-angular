import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/counter/counter-pages.component').then(
        (m) => m.CounterPagesComponent,
      ),
  },
  {
    path: 'hero',
    loadComponent: () =>
      import('./pages/hero-page/hero-page.component').then(
        (m) => m.HeroPageComponent,
      ),
  },
  {
    path: 'dragonball',
    loadComponent: () =>
      import('./pages/dragonball/dragonball.component').then(
        (m) => m.DragonballComponent,
      ),
  },
  {
    path: 'dragonball-super',
    loadComponent: () =>
      import('./pages/dragonball-super/dragonball-super.component').then(
        (m) => m.DragonballSuperComponent,
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
