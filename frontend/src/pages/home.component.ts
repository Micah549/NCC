import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  template: `
    <!-- Hero Section -->
    <div class="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img ngSrc="https://picsum.photos/1920/1080?grayscale&blur=2" width="1920" height="1080" priority class="object-cover w-full h-full opacity-60" alt="Church Interior" />
        <div class="absolute inset-0 bg-[#2F5D62]/30 mix-blend-multiply"></div>
      </div>
      
      <div class="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
        <p class="text-[#D6A85F] font-medium tracking-[0.2em] uppercase text-sm md:text-base animate-fade-in-up">Welcome Home</p>
        <h1 class="text-5xl md:text-7xl font-serif font-bold text-[#2B2B2B] leading-tight animate-fade-in-up delay-100 drop-shadow-sm">
          A Place to Belong,<br> <span class="italic text-[#2F5D62]">Believe</span>, and Become.
        </h1>
        <p class="text-lg md:text-xl text-[#2B2B2B]/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          Join us this Sunday as we gather to worship, grow, and serve our city together.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in-up delay-300">
          <a routerLink="/new-here" class="px-8 py-4 bg-[#2F5D62] text-white rounded-full font-semibold hover:bg-[#254A4E] transition-all hover:scale-105 shadow-lg">
            Plan Your Visit
          </a>
          <a routerLink="/sermons" class="px-8 py-4 bg-transparent border-2 border-[#2F5D62] text-[#2F5D62] rounded-full font-semibold hover:bg-[#2F5D62] hover:text-white transition-all hover:scale-105">
            Watch Sermons
          </a>
        </div>
      </div>
    </div>

    <!-- Service Times -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto text-center px-4">
        <h2 class="font-serif text-3xl md:text-4xl text-[#2F5D62] mb-8">Service Times</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="p-8 border border-gray-100 rounded-2xl shadow-sm bg-[#F7F8F6] hover:shadow-md transition-shadow">
            <h3 class="text-xl font-bold mb-2 font-serif">Sunday Morning</h3>
            <p class="text-[#7C8C55] font-semibold text-lg">09:00 AM & 11:00 AM</p>
            <p class="text-gray-500 mt-2 text-sm">Kids Ministry Available</p>
          </div>
          <div class="p-8 border border-gray-100 rounded-2xl shadow-sm bg-[#F7F8F6] hover:shadow-md transition-shadow">
            <h3 class="text-xl font-bold mb-2 font-serif">Youth Night</h3>
            <p class="text-[#7C8C55] font-semibold text-lg">Fridays &#64; 19:00 PM</p>
            <p class="text-gray-500 mt-2 text-sm">Grades 8 - 12</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Welcome Message -->
    <section class="py-24 bg-[#F7F8F6] relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-[#D6A85F]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-[#2F5D62]/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

        <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div class="relative">
                 <div class="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#D6A85F]/30 rounded-tl-3xl"></div>
                 <img ngSrc="https://picsum.photos/600/700" width="600" height="700" class="rounded-2xl shadow-xl object-cover h-[500px] w-full" alt="Pastor greeting people">
                 <div class="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#2F5D62]/30 rounded-br-3xl"></div>
            </div>
            <div class="space-y-6">
                <span class="text-[#7C8C55] font-bold tracking-wider text-sm uppercase">About Us</span>
                <h2 class="font-serif text-4xl text-[#2B2B2B] font-bold">We are a family on a mission.</h2>
                <p class="text-gray-600 leading-relaxed text-lg">
                    North Community Church exists to help you know God, find freedom, discover your purpose, and make a difference. Whether you've been a believer for years or are just exploring faith, there's a place for you here.
                </p>
                <div class="pt-4">
                    <a routerLink="/about" class="text-[#2F5D62] font-semibold hover:text-[#7C8C55] transition-colors inline-flex items-center">
                        Read Our Story
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Outreach Teasers -->
    <section class="py-20 bg-[#2F5D62] text-white">
      <div class="max-w-7xl mx-auto px-4">
         <div class="text-center mb-16">
            <h2 class="font-serif text-3xl md:text-4xl mb-4">Serving Our City</h2>
            <p class="text-gray-300 max-w-2xl mx-auto">We believe faith is active. Join us as we extend love and hope to our neighbors.</p>
         </div>

         <div class="grid md:grid-cols-2 gap-8">
            <!-- Mobile Clinic Card -->
            <div class="group relative overflow-hidden rounded-2xl bg-[#254A4E] hover:bg-[#1E3D40] transition-all duration-300 shadow-xl">
               <div class="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                   <img ngSrc="https://picsum.photos/600/400?medical" width="600" height="400" class="object-cover w-full h-full" alt="Medical Clinic">
               </div>
               <div class="relative p-10 h-full flex flex-col justify-end min-h-[300px]">
                  <h3 class="font-serif text-2xl font-bold mb-2">Mobile Clinic Ministry</h3>
                  <p class="text-gray-300 mb-6">Offering basic healthcare and hope every Friday.</p>
                  <a routerLink="/mobile-clinic" class="inline-block w-fit px-6 py-2 bg-[#D6A85F] text-white rounded-lg font-semibold text-sm hover:bg-[#C2954D] transition-colors">
                     Learn More
                  </a>
               </div>
            </div>

            <!-- Soup Kitchen Card -->
            <div class="group relative overflow-hidden rounded-2xl bg-[#254A4E] hover:bg-[#1E3D40] transition-all duration-300 shadow-xl">
               <div class="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                   <img ngSrc="https://picsum.photos/600/400?food" width="600" height="400" class="object-cover w-full h-full" alt="Soup Kitchen">
               </div>
               <div class="relative p-10 h-full flex flex-col justify-end min-h-[300px]">
                  <h3 class="font-serif text-2xl font-bold mb-2">Community Soup Kitchen</h3>
                  <p class="text-gray-300 mb-6">A warm meal and a safe space every Thursday.</p>
                  <a routerLink="/soup-kitchen" class="inline-block w-fit px-6 py-2 bg-[#7C8C55] text-white rounded-lg font-semibold text-sm hover:bg-[#687645] transition-colors">
                     Get Involved
                  </a>
               </div>
            </div>
         </div>
      </div>
    </section>

    <!-- Quick CTA -->
    <section class="py-24 bg-[#F7F8F6] text-center">
      <div class="max-w-2xl mx-auto px-4">
        <h2 class="font-serif text-3xl font-bold text-[#2B2B2B] mb-6">Ready to take the next step?</h2>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a routerLink="/giving" class="px-8 py-3 bg-[#2F5D62] text-white rounded-lg hover:bg-[#254A4E] transition-colors shadow-sm font-medium">Give Online</a>
            <a routerLink="/contact" class="px-8 py-3 bg-white text-[#2F5D62] border border-[#2F5D62] rounded-lg hover:bg-[#2F5D62] hover:text-white transition-colors shadow-sm font-medium">Contact Us</a>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {}
