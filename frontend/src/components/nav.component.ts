import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="fixed w-full z-50 bg-[#F7F8F6]/90 backdrop-blur-md border-b border-[#2F5D62]/10 shadow-sm transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-20 items-center">
          
          <!-- Logo -->
          <a routerLink="/" class="flex items-center space-x-2 group">
             <div class="w-10 h-10 bg-[#2F5D62] rounded-full flex items-center justify-center text-white font-serif text-xl font-bold group-hover:bg-[#7C8C55] transition-colors">
               N
             </div>
             <span class="font-serif text-xl font-bold text-[#2F5D62] tracking-wide">North Community</span>
          </a>

          <!-- Desktop Menu -->
          <div class="hidden md:flex space-x-8 items-center">
            <a routerLink="/about" routerLinkActive="text-[#7C8C55]" class="text-[#2B2B2B] hover:text-[#2F5D62] transition-colors text-sm uppercase tracking-wider font-medium">About</a>
            <a routerLink="/ministries" routerLinkActive="text-[#7C8C55]" class="text-[#2B2B2B] hover:text-[#2F5D62] transition-colors text-sm uppercase tracking-wider font-medium">Ministries</a>
            <div class="relative group">
              <button class="text-[#2B2B2B] hover:text-[#2F5D62] transition-colors text-sm uppercase tracking-wider font-medium flex items-center">
                Community
                <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div class="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a routerLink="/soup-kitchen" class="block px-4 py-2 text-sm text-[#2B2B2B] hover:bg-[#F7F8F6] hover:text-[#2F5D62]">Soup Kitchen</a>
                <a routerLink="/mobile-clinic" class="block px-4 py-2 text-sm text-[#2B2B2B] hover:bg-[#F7F8F6] hover:text-[#2F5D62]">Mobile Clinic</a>
              </div>
            </div>
            <a routerLink="/contact" routerLinkActive="text-[#7C8C55]" class="text-[#2B2B2B] hover:text-[#2F5D62] transition-colors text-sm uppercase tracking-wider font-medium">Contact</a>
            
            <a routerLink="/giving" class="px-5 py-2.5 bg-[#2F5D62] text-white rounded-full hover:bg-[#7C8C55] transition-all duration-300 shadow-md hover:shadow-lg text-sm font-semibold">
              Give
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <div class="md:hidden flex items-center">
            <button (click)="toggleMenu()" class="text-[#2F5D62] hover:text-[#7C8C55] focus:outline-none p-2">
              @if (!isOpen()) {
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              } @else {
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              }
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu Dropdown -->
      @if (isOpen()) {
        <div class="md:hidden bg-[#F7F8F6] border-t border-gray-200 shadow-xl animate-fade-in-down">
          <div class="px-4 pt-4 pb-6 space-y-3 flex flex-col">
            <a (click)="closeMenu()" routerLink="/about" class="block px-3 py-2 rounded-md text-base font-medium text-[#2B2B2B] hover:bg-[#2F5D62] hover:text-white transition-colors">About Us</a>
            <a (click)="closeMenu()" routerLink="/ministries" class="block px-3 py-2 rounded-md text-base font-medium text-[#2B2B2B] hover:bg-[#2F5D62] hover:text-white transition-colors">Ministries</a>
            <div class="pl-3 space-y-2">
              <p class="text-xs text-[#7C8C55] font-semibold uppercase tracking-wider">Community</p>
              <a (click)="closeMenu()" routerLink="/mobile-clinic" class="block px-3 py-2 text-sm font-medium text-[#7C8C55] hover:text-[#2F5D62]">Mobile Clinic</a>
              <a (click)="closeMenu()" routerLink="/soup-kitchen" class="block px-3 py-2 text-sm font-medium text-[#7C8C55] hover:text-[#2F5D62]">Soup Kitchen</a>
            </div>
            <a (click)="closeMenu()" routerLink="/contact" class="block px-3 py-2 rounded-md text-base font-medium text-[#2B2B2B] hover:bg-[#2F5D62] hover:text-white transition-colors">Contact</a>
            <a (click)="closeMenu()" routerLink="/giving" class="block mt-4 text-center px-4 py-3 bg-[#D6A85F] text-white rounded-lg font-bold shadow-sm">Give Now</a>
          </div>
        </div>
      }
    </nav>
  `
})
export class NavComponent {
  isOpen = signal(false);

  toggleMenu() {
    this.isOpen.update(v => !v);
  }

  closeMenu() {
    this.isOpen.set(false);
  }
}
