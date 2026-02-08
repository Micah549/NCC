import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/home.component').then(m => m.HomeComponent),
    title: 'Home - North Community Church'
  },
  {
    path: 'about',
    loadComponent: () => import('../pages/about.component').then(m => m.AboutComponent),
    title: 'About - North Community Church'
  },
  {
    path: 'soup-kitchen',
    loadComponent: () => import('../pages/soup-kitchen.component').then(m => m.SoupKitchenComponent),
    title: 'Soup Kitchen - North Community Church'
  },
  {
    path: 'mobile-clinic',
    loadComponent: () => import('../pages/mobile-clinic.component').then(m => m.MobileClinicComponent),
    title: 'Mobile Clinic - North Community Church'
  },
  {
    path: 'ministries',
    loadComponent: () => import('../pages/ministries.component').then(m => m.MinistriesComponent),
    title: 'Ministries - North Community Church'
  },
  {
    path: 'giving',
    loadComponent: () => import('../pages/giving.component').then(m => m.GivingComponent),
    title: 'Giving - North Community Church'
  },
  {
    path: 'contact',
    loadComponent: () => import('../pages/contact.component').then(m => m.ContactComponent),
    title: 'Contact - North Community Church'
  },
  // Wildcard route for 404
  {
    path: '**',
    redirectTo: ''
  }
];
