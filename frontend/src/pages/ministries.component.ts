import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-ministries',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  template: `
    <div class="max-w-7xl mx-auto px-4 py-16">
        <h1 class="text-4xl md:text-5xl font-serif text-[#2F5D62] font-bold text-center mb-16">Our Ministries</h1>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Kids -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div class="h-48 overflow-hidden">
                    <img ngSrc="https://picsum.photos/400/300?kids" width="400" height="300" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Kids">
                </div>
                <div class="p-8">
                    <h3 class="font-serif text-2xl font-bold text-[#2B2B2B] mb-3">North Kids</h3>
                    <p class="text-gray-600 mb-6">A fun, safe environment for children to learn about God's love.</p>
                    <span class="text-[#7C8C55] font-semibold text-sm uppercase tracking-wide">Sundays &#64; 9am & 11am</span>
                </div>
            </div>

            <!-- Youth -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div class="h-48 overflow-hidden">
                    <img ngSrc="https://picsum.photos/400/300?youth" width="400" height="300" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Youth">
                </div>
                <div class="p-8">
                    <h3 class="font-serif text-2xl font-bold text-[#2B2B2B] mb-3">Elevate Youth</h3>
                    <p class="text-gray-600 mb-6">Empowering the next generation to live with purpose.</p>
                    <span class="text-[#7C8C55] font-semibold text-sm uppercase tracking-wide">Fridays &#64; 7pm</span>
                </div>
            </div>

            <!-- Worship -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div class="h-48 overflow-hidden">
                    <img ngSrc="https://picsum.photos/400/300?music" width="400" height="300" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Worship">
                </div>
                <div class="p-8">
                    <h3 class="font-serif text-2xl font-bold text-[#2B2B2B] mb-3">Worship Team</h3>
                    <p class="text-gray-600 mb-6">Leading our congregation in spirit and truth.</p>
                    <span class="text-[#7C8C55] font-semibold text-sm uppercase tracking-wide">Auditions Quarterly</span>
                </div>
            </div>

            <!-- Mobile Clinic -->
            <div class="bg-[#F0F4F4] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group md:col-span-2 lg:col-span-1 border border-[#2F5D62]/10">
                <div class="h-48 overflow-hidden">
                    <img ngSrc="https://picsum.photos/400/300?doctor" width="400" height="300" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Mobile Clinic">
                </div>
                <div class="p-8">
                    <h3 class="font-serif text-2xl font-bold text-[#2F5D62] mb-3">Mobile Clinic</h3>
                    <p class="text-gray-600 mb-6">Serving our community's health needs with compassion.</p>
                    <a routerLink="/mobile-clinic" class="inline-block px-6 py-2 bg-[#2F5D62] text-white rounded-lg hover:bg-[#254A4E] transition-colors text-sm font-semibold">View Details</a>
                </div>
            </div>

             <!-- Soup Kitchen -->
            <div class="bg-[#F7F8F6] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group md:col-span-2 lg:col-span-1 border border-[#7C8C55]/10">
                <div class="h-48 overflow-hidden">
                    <img ngSrc="https://picsum.photos/400/300?bread" width="400" height="300" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Soup Kitchen">
                </div>
                <div class="p-8">
                    <h3 class="font-serif text-2xl font-bold text-[#7C8C55] mb-3">Soup Kitchen</h3>
                    <p class="text-gray-600 mb-6">Feeding the hungry and building relationships.</p>
                    <a routerLink="/soup-kitchen" class="inline-block px-6 py-2 bg-[#7C8C55] text-white rounded-lg hover:bg-[#687645] transition-colors text-sm font-semibold">View Details</a>
                </div>
            </div>
        </div>
    </div>
  `
})
export class MinistriesComponent {}
