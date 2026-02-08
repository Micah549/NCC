import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-mobile-clinic',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  template: `
    <!-- Hero with Compassionate Tone -->
    <section class="relative bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <polygon points="50,0 100,0 50,100 0,100" />
                </svg>

                <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div class="sm:text-center lg:text-left">
                        <span class="inline-block py-1 px-3 rounded-full bg-[#E0F2F1] text-[#2F5D62] text-xs font-bold tracking-wider uppercase mb-4">Every Friday • 09:00 - 14:00</span>
                        <h1 class="text-4xl tracking-tight font-serif font-extrabold text-[#2F5D62] sm:text-5xl md:text-6xl">
                            <span class="block xl:inline">Healing Hands</span>
                            <span class="block text-[#7C8C55]">Mobile Clinic</span>
                        </h1>
                        <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            We believe that healthcare is a way to show God's love. Our mobile clinic provides basic health services, screenings, and compassionate care to our community, free of charge.
                        </p>
                        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div class="rounded-md shadow">
                                <a routerLink="/contact" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#2F5D62] hover:bg-[#254A4E] md:py-4 md:text-lg transition-colors">
                                    Visit this Friday
                                </a>
                            </div>
                            <div class="mt-3 sm:mt-0 sm:ml-3">
                                <a routerLink="/giving" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#2F5D62] bg-[#E0F2F1] hover:bg-[#B2DFDB] md:py-4 md:text-lg transition-colors">
                                    Support Us
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-50">
            <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full grayscale-[20%]" src="https://picsum.photos/1200/800?medical" alt="Nurse holding hands with patient">
            <div class="absolute inset-0 bg-[#2F5D62]/20 mix-blend-multiply lg:hidden"></div>
        </div>
    </section>

    <!-- Services & Info -->
    <section class="py-16 bg-[#F7F8F6]">
        <div class="max-w-6xl mx-auto px-4">
            
            <div class="grid md:grid-cols-2 gap-12">
                <!-- What We Offer -->
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 class="font-serif text-2xl font-bold text-[#2B2B2B] mb-6 flex items-center">
                        <svg class="w-6 h-6 mr-3 text-[#2F5D62]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                        Services Offered
                    </h2>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                            <span class="flex-shrink-0 h-6 w-6 rounded-full bg-[#E0F2F1] flex items-center justify-center text-[#2F5D62] font-bold text-xs mt-0.5">✓</span>
                            <span class="ml-3 text-gray-600">Basic health checks (Blood pressure, Glucose)</span>
                        </li>
                        <li class="flex items-start">
                            <span class="flex-shrink-0 h-6 w-6 rounded-full bg-[#E0F2F1] flex items-center justify-center text-[#2F5D62] font-bold text-xs mt-0.5">✓</span>
                            <span class="ml-3 text-gray-600">Primary healthcare advice & counseling</span>
                        </li>
                         <li class="flex items-start">
                            <span class="flex-shrink-0 h-6 w-6 rounded-full bg-[#E0F2F1] flex items-center justify-center text-[#2F5D62] font-bold text-xs mt-0.5">✓</span>
                            <span class="ml-3 text-gray-600">Minor wound care</span>
                        </li>
                        <li class="flex items-start">
                            <span class="flex-shrink-0 h-6 w-6 rounded-full bg-[#E0F2F1] flex items-center justify-center text-[#2F5D62] font-bold text-xs mt-0.5">✓</span>
                            <span class="ml-3 text-gray-600">Referrals to local clinics and hospitals</span>
                        </li>
                    </ul>
                </div>

                <!-- Who is it for -->
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 class="font-serif text-2xl font-bold text-[#2B2B2B] mb-6 flex items-center">
                        <svg class="w-6 h-6 mr-3 text-[#7C8C55]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        Who is Welcome?
                    </h2>
                    <p class="text-gray-600 mb-6">
                        Our services are open to <strong>everyone</strong> in the community. We provide a confidential, respectful, and safe environment.
                    </p>
                    <div class="bg-[#F9FAFB] p-4 rounded-lg border-l-4 border-[#7C8C55]">
                         <p class="font-semibold text-gray-800 text-sm">Location:</p>
                         <p class="text-gray-600 text-sm">North Community Church Parking Lot (Enter via Main Gate)</p>
                         <p class="font-semibold text-gray-800 text-sm mt-2">What to bring:</p>
                         <p class="text-gray-600 text-sm">ID Document (if available), Clinic Card (if you have one)</p>
                    </div>
                </div>
            </div>

            <!-- Scripture -->
            <div class="mt-16 text-center max-w-3xl mx-auto">
                <blockquote class="font-serif text-2xl italic text-[#2F5D62]">
                    "He heals the brokenhearted and binds up their wounds."
                </blockquote>
                <p class="mt-2 text-gray-500 font-medium">— Psalm 147:3</p>
            </div>
        </div>
    </section>

    <!-- Volunteer CTA -->
    <section class="bg-[#2F5D62] text-white py-12">
        <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <div class="mb-6 md:mb-0">
                <h3 class="text-2xl font-bold font-serif mb-2">Are you a medical professional?</h3>
                <p class="text-gray-300">We are always looking for doctors, nurses, and support staff to volunteer.</p>
            </div>
            <a routerLink="/contact" class="px-8 py-3 bg-white text-[#2F5D62] rounded-full font-bold hover:bg-[#D6A85F] hover:text-white transition-colors">
                Volunteer with Us
            </a>
        </div>
    </section>
  `
})
export class MobileClinicComponent {}
