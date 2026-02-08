import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <div class="max-w-7xl mx-auto px-4 py-16">
        <div class="grid md:grid-cols-2 gap-16">
            
            <!-- Info -->
            <div>
                <h1 class="font-serif text-4xl font-bold text-[#2F5D62] mb-6">Get in Touch</h1>
                <p class="text-gray-600 mb-8 text-lg">Whether you have a prayer request, a question about an event, or just want to say hello, we'd love to hear from you.</p>
                
                <div class="space-y-6">
                    <div class="flex items-start">
                        <div class="w-10 h-10 bg-[#7C8C55]/10 rounded-full flex items-center justify-center text-[#7C8C55] shrink-0 mt-1">
                            <span class="text-xl">📍</span>
                        </div>
                        <div class="ml-4">
                            <h3 class="font-bold text-[#2B2B2B]">Visit Us</h3>
                            <p class="text-gray-600">124 Faith Avenue, North Hills<br>City Center, SA 8001</p>
                        </div>
                    </div>

                    <div class="flex items-start">
                        <div class="w-10 h-10 bg-[#7C8C55]/10 rounded-full flex items-center justify-center text-[#7C8C55] shrink-0 mt-1">
                             <span class="text-xl">📞</span>
                        </div>
                        <div class="ml-4">
                            <h3 class="font-bold text-[#2B2B2B]">Call Us</h3>
                            <p class="text-gray-600">(021) 555-0123</p>
                            <p class="text-xs text-gray-400 mt-1">Tue - Fri: 08:30 - 16:30</p>
                        </div>
                    </div>

                    <div class="flex items-start">
                        <div class="w-10 h-10 bg-[#7C8C55]/10 rounded-full flex items-center justify-center text-[#7C8C55] shrink-0 mt-1">
                             <span class="text-xl">💬</span>
                        </div>
                        <div class="ml-4">
                            <h3 class="font-bold text-[#2B2B2B]">WhatsApp</h3>
                            <p class="text-gray-600">082 123 4567</p>
                            <a href="#" class="text-[#2F5D62] text-sm font-semibold underline decoration-[#D6A85F] mt-1 block">Send a message</a>
                        </div>
                    </div>
                </div>

                <!-- Map Placeholder -->
                <div class="mt-10 h-64 bg-gray-200 rounded-xl w-full flex items-center justify-center text-gray-400">
                    <span class="font-serif italic">Google Maps Embed</span>
                </div>
            </div>

            <!-- Form -->
            <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 class="font-serif text-2xl font-bold text-[#2B2B2B] mb-6">Send a Message</h2>
                <form class="space-y-6">
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                            <input type="text" class="w-full rounded-md border-gray-300 shadow-sm p-3 border focus:ring-[#2F5D62] focus:border-[#2F5D62] outline-none transition-all" placeholder="John">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                            <input type="text" class="w-full rounded-md border-gray-300 shadow-sm p-3 border focus:ring-[#2F5D62] focus:border-[#2F5D62] outline-none transition-all" placeholder="Doe">
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" class="w-full rounded-md border-gray-300 shadow-sm p-3 border focus:ring-[#2F5D62] focus:border-[#2F5D62] outline-none transition-all" placeholder="john@example.com">
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <select class="w-full rounded-md border-gray-300 shadow-sm p-3 border focus:ring-[#2F5D62] focus:border-[#2F5D62] outline-none transition-all bg-white">
                            <option>General Inquiry</option>
                            <option>Prayer Request</option>
                            <option>Mobile Clinic Volunteer</option>
                            <option>Soup Kitchen Volunteer</option>
                            <option>Pastoral Care</option>
                        </select>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea rows="4" class="w-full rounded-md border-gray-300 shadow-sm p-3 border focus:ring-[#2F5D62] focus:border-[#2F5D62] outline-none transition-all" placeholder="How can we help?"></textarea>
                    </div>

                    <button type="button" class="w-full py-3 bg-[#2F5D62] text-white font-bold rounded-lg hover:bg-[#254A4E] transition-all transform hover:-translate-y-0.5 shadow-md">
                        Send Message
                    </button>
                </form>
            </div>

        </div>
    </div>
  `
})
export class ContactComponent {}
