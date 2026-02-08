// src/app/pages/soup-kitchen.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-soup-kitchen',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  template: `
    <!-- Hero Section -->
    <div class="relative h-[60vh] flex items-center justify-center">
      <img 
        ngSrc="https://picsum.photos/1920/800?food,community" 
        width="1920" 
        height="800" 
        class="absolute inset-0 w-full h-full object-cover" 
        alt="Community Meal"
        priority
      >
      <div class="absolute inset-0 bg-gradient-to-r from-[#2B2B2B]/90 to-[#2B2B2B]/40"></div>
      
      <div class="relative z-10 text-center max-w-3xl px-4">
        <h1 class="font-serif text-5xl md:text-6xl text-white font-bold mb-6">A Seat at the Table</h1>
        <p class="text-xl text-gray-200 mb-8 font-light">
          Feeding the body and nourishing the soul. Everyone is welcome here.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            routerLink="/contact" 
            class="px-8 py-3 bg-[#7C8C55] text-white rounded-lg font-semibold hover:bg-[#687645] transition-colors"
          >
            Join us Thursday
          </a>
          <a 
            routerLink="/giving" 
            class="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#2B2B2B] transition-colors"
          >
            Donate Now
          </a>
        </div>
      </div>
    </div>

    <!-- About Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Community Kitchen</h2>
          <div class="w-20 h-1 bg-[#7C8C55] mx-auto"></div>
        </div>
        
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">Nourishing Our Community</h3>
            <p class="text-gray-600 mb-6">
              Every Thursday evening, we open our doors to provide warm, nutritious meals to anyone in need. 
              Our soup kitchen is more than just a meal service - it's a place of community, dignity, and hope.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-start">
                <svg class="h-6 w-6 text-[#7C8C55] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Free, nutritious meals every Thursday evening</span>
              </li>
              <li class="flex items-start">
                <svg class="h-6 w-6 text-[#7C8C55] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Open to all members of the community</span>
              </li>
              <li class="flex items-start">
                <svg class="h-6 w-6 text-[#7C8C55] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Volunteer opportunities available</span>
              </li>
            </ul>
          </div>
          <div class="rounded-lg overflow-hidden shadow-xl">
            <img 
              ngSrc="https://picsum.photos/800/600?kitchen" 
              width="800" 
              height="600" 
              class="w-full h-auto" 
              alt="Volunteers serving food"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- How to Help Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">How You Can Help</h2>
          <div class="w-20 h-1 bg-[#7C8C55] mx-auto mb-12"></div>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-md text-center">
            <div class="bg-[#F7F8F6] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="h-10 w-10 text-[#7C8C55]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Volunteer</h3>
            <p class="text-gray-600 mb-4">Join our team of dedicated volunteers who help prepare and serve meals.</p>
            <a routerLink="/volunteer" class="text-[#7C8C55] font-medium hover:underline">Learn more →</a>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-md text-center">
            <div class="bg-[#F7F8F6] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="h-10 w-10 text-[#7C8C55]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Donate Food</h3>
            <p class="text-gray-600 mb-4">Contribute non-perishable food items to support our kitchen.</p>
            <a routerLink="/donate-food" class="text-[#7C8C55] font-medium hover:underline">See our wishlist →</a>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-md text-center">
            <div class="bg-[#F7F8F6] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="h-10 w-10 text-[#7C8C55]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Financial Support</h3>
            <p class="text-gray-600 mb-4">Your monetary donations help us purchase fresh ingredients and supplies.</p>
            <a routerLink="/donate" class="text-[#7C8C55] font-medium hover:underline">Donate now →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Community Voices</h2>
          <div class="w-20 h-1 bg-[#7C8C55] mx-auto"></div>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gray-50 p-6 rounded-lg">
            <div class="flex items-center mb-4">
              <div class="text-[#7C8C55] text-4xl">"</div>
              <div class="ml-2">
                <p class="text-gray-900 font-medium">Sarah M.</p>
                <p class="text-sm text-gray-500">Community Member</p>
              </div>
            </div>
            <p class="text-gray-600 italic">
              "The soup kitchen has been a blessing for my family. The meals are delicious and the volunteers are so kind and welcoming."
            </p>
          </div>
          
          <div class="bg-gray-50 p-6 rounded-lg">
            <div class="flex items-center mb-4">
              <div class="text-[#7C8C55] text-4xl">"</div>
              <div class="ml-2">
                <p class="text-gray-900 font-medium">James T.</p>
                <p class="text-sm text-gray-500">Volunteer</p>
              </div>
            </div>
            <p class="text-gray-600 italic">
              "Volunteering here has been one of the most rewarding experiences. Seeing the smiles and gratitude makes it all worthwhile."
            </p>
          </div>
          
          <div class="bg-gray-50 p-6 rounded-lg md:col-span-2 lg:col-span-1">
            <div class="flex items-center mb-4">
              <div class="text-[#7C8C55] text-4xl">"</div>
              <div class="ml-2">
                <p class="text-gray-900 font-medium">Maria G.</p>
                <p class="text-sm text-gray-500">Local Business Owner</p>
              </div>
            </div>
            <p class="text-gray-600 italic">
              "Our business is proud to support the soup kitchen. It's amazing to see the positive impact it has on our community."
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-[#7C8C55] text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-6">Join Us in Making a Difference</h2>
        <p class="text-xl mb-8 max-w-3xl mx-auto">
          Whether you're looking to volunteer, donate, or just enjoy a warm meal, we welcome you with open arms.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            routerLink="/contact" 
            class="px-8 py-3 bg-white text-[#2B2B2B] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Involved
          </a>
          <a 
            routerLink="/about" 
            class="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Custom styles specific to this component */
    :host {
      display: block;
    }
  `]
})
export class SoupKitchenComponent {
  // Component logic can be added here if needed
}