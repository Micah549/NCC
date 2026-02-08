import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-[#2F5D62] text-white pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <!-- Brand -->
          <div class="space-y-4">
            <h3 class="font-serif text-2xl font-bold">North Community</h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              Loving God, Loving People, Serving the City.
            </p>
            <div class="flex space-x-4 pt-2">
              <!-- Social Icons (Placeholders) -->
              <div class="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D6A85F] cursor-pointer transition-colors">
                 <span class="text-xs">FB</span>
              </div>
              <div class="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D6A85F] cursor-pointer transition-colors">
                 <span class="text-xs">IG</span>
              </div>
              <div class="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D6A85F] cursor-pointer transition-colors">
                 <span class="text-xs">YT</span>
              </div>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="font-serif text-lg font-semibold mb-6 text-[#D6A85F]">Explore</h4>
            <ul class="space-y-3 text-sm text-gray-200">
              <li><a routerLink="/about" class="hover:text-white hover:underline decoration-[#D6A85F]">Our Story</a></li>
              <li><a routerLink="/ministries" class="hover:text-white hover:underline decoration-[#D6A85F]">Ministries</a></li>
              <li><a routerLink="/events" class="hover:text-white hover:underline decoration-[#D6A85F]">Events Calendar</a></li>
              <li><a routerLink="/contact" class="hover:text-white hover:underline decoration-[#D6A85F]">Contact Us</a></li>
            </ul>
          </div>

          <!-- Outreach -->
          <div>
            <h4 class="font-serif text-lg font-semibold mb-6 text-[#D6A85F]">Community Care</h4>
            <ul class="space-y-3 text-sm text-gray-200">
              <li><a routerLink="/mobile-clinic" class="hover:text-white hover:underline decoration-[#D6A85F]">Mobile Clinic</a></li>
              <li><a routerLink="/soup-kitchen" class="hover:text-white hover:underline decoration-[#D6A85F]">Soup Kitchen</a></li>
              <li><a routerLink="/contact" class="hover:text-white hover:underline decoration-[#D6A85F]">Need Prayer?</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="font-serif text-lg font-semibold mb-6 text-[#D6A85F]">Visit Us</h4>
            <ul class="space-y-3 text-sm text-gray-200">
              <li class="flex items-start">
                <span class="mr-2 opacity-70">📍</span>
                124 Faith Avenue, North Hills<br>City Center, SA 8001
              </li>
              <li class="flex items-center">
                <span class="mr-2 opacity-70">📞</span>
                (021) 555-0123
              </li>
              <li class="flex items-center">
                <span class="mr-2 opacity-70">✉️</span>
                hello&#64;northcommunity.co.za
              </li>
            </ul>
          </div>

        </div>

        <div class="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; 2024 North Community Church. All rights reserved.</p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="hover:text-white">Privacy Policy</a>
            <a href="#" class="hover:text-white">POPIA</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
