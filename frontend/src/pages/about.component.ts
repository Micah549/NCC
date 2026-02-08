import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <header class="bg-[#2F5D62] text-white py-20 text-center relative overflow-hidden">
        <div class="absolute inset-0 bg-black/20 z-0"></div>
        <div class="relative z-10 max-w-4xl mx-auto px-4">
            <h1 class="font-serif text-4xl md:text-5xl font-bold mb-4">Who We Are</h1>
            <p class="text-xl opacity-90 font-light">Loving God. Loving People. Serving the City.</p>
        </div>
    </header>

    <div class="max-w-5xl mx-auto px-4 py-16 space-y-20">
        
        <!-- Vision -->
        <section class="grid md:grid-cols-2 gap-12 items-center">
             <div class="space-y-6">
                 <h2 class="font-serif text-3xl text-[#2F5D62] font-bold">Our Vision</h2>
                 <p class="text-gray-600 leading-relaxed text-lg">
                     We envision a church that is a home for the hurting, a training ground for the faithful, and a light to the city. We believe in building a community where everyone is welcome, no matter their background or story.
                 </p>
                 <div class="pl-4 border-l-4 border-[#D6A85F]">
                     <p class="text-[#2B2B2B] italic font-serif text-xl">"By this everyone will know that you are my disciples, if you love one another."</p>
                     <p class="text-sm text-gray-500 mt-1">— John 13:35</p>
                 </div>
             </div>
             <div>
                <img ngSrc="https://picsum.photos/600/400?church" width="600" height="400" class="rounded-xl shadow-lg" alt="Vision Image">
             </div>
        </section>

        <!-- Beliefs -->
        <section class="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
             <h2 class="font-serif text-3xl text-[#2F5D62] font-bold mb-8 text-center">What We Believe</h2>
             <div class="grid md:grid-cols-3 gap-8 text-center">
                 <div>
                     <div class="w-12 h-12 bg-[#F0F4F4] rounded-full flex items-center justify-center mx-auto mb-4 text-[#2F5D62]">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                     </div>
                     <h3 class="font-bold text-lg mb-2">The Bible</h3>
                     <p class="text-sm text-gray-600">The inspired and authoritative Word of God, our guide for faith and life.</p>
                 </div>
                 <div>
                     <div class="w-12 h-12 bg-[#F0F4F4] rounded-full flex items-center justify-center mx-auto mb-4 text-[#2F5D62]">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                     </div>
                     <h3 class="font-bold text-lg mb-2">God's Love</h3>
                     <p class="text-sm text-gray-600">God is love, revealed in the Father, Son, and Holy Spirit.</p>
                 </div>
                 <div>
                     <div class="w-12 h-12 bg-[#F0F4F4] rounded-full flex items-center justify-center mx-auto mb-4 text-[#2F5D62]">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                     </div>
                     <h3 class="font-bold text-lg mb-2">Community</h3>
                     <p class="text-sm text-gray-600">We are called to live in community, serving and encouraging one another.</p>
                 </div>
             </div>
        </section>

        <!-- Leadership -->
        <section>
            <h2 class="font-serif text-3xl text-[#2F5D62] font-bold mb-8 text-center">Our Leadership</h2>
            <div class="grid md:grid-cols-2 gap-8">
                 <div class="bg-white p-6 rounded-xl flex gap-6 items-center shadow-sm hover:shadow-md transition-shadow">
                     <img ngSrc="https://picsum.photos/150/150?man" width="150" height="150" class="rounded-full w-24 h-24 object-cover border-2 border-[#D6A85F]" alt="Pastor">
                     <div>
                         <h3 class="font-serif text-xl font-bold">John Doe</h3>
                         <p class="text-[#7C8C55] text-sm font-semibold uppercase tracking-wider">Lead Pastor</p>
                         <p class="text-gray-500 text-sm mt-2">Passionate about teaching and equipping.</p>
                     </div>
                 </div>
                 <div class="bg-white p-6 rounded-xl flex gap-6 items-center shadow-sm hover:shadow-md transition-shadow">
                     <img ngSrc="https://picsum.photos/150/150?woman" width="150" height="150" class="rounded-full w-24 h-24 object-cover border-2 border-[#D6A85F]" alt="Pastor">
                     <div>
                         <h3 class="font-serif text-xl font-bold">Sarah Doe</h3>
                         <p class="text-[#7C8C55] text-sm font-semibold uppercase tracking-wider">Executive Pastor</p>
                         <p class="text-gray-500 text-sm mt-2">Leading our teams and community care.</p>
                     </div>
                 </div>
            </div>
        </section>
    </div>
  `
})
export class AboutComponent {}
