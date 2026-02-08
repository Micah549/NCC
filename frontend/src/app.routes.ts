import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { MinistriesComponent } from './pages/ministries.component';
import { MobileClinicComponent } from './pages/mobile-clinic.component';
import { SoupKitchenComponent } from './pages/soup-kitchen.component';
import { GivingComponent } from './pages/giving.component';
import { ContactComponent } from './pages/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'ministries', component: MinistriesComponent },
  { path: 'mobile-clinic', component: MobileClinicComponent },
  { path: 'soup-kitchen', component: SoupKitchenComponent },
  { path: 'giving', component: GivingComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
