import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../components/nav.component';
import { FooterComponent } from '../components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, FooterComponent],
  template: `
    <div class="flex flex-col min-h-screen bg-[#F7F8F6] text-[#2B2B2B]">
      <app-nav />
      <main class="flex-grow pt-16"> 
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `
})
export class AppComponent {}
