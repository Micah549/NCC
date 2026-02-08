import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-giving',
  standalone: true,
  template: `
    <div class="bg-[#2F5D62] text-white py-20 text-center">
        <h1 class="font-serif text-4xl font-bold mb-4">Generosity</h1>
        <p class="text-lg opacity-90 max-w-2xl mx-auto px-4">"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." <br><span class="text-sm italic mt-2 block opacity-70">— 2 Corinthians 9:7</span></p>
    </div>

    <div class="max-w-4xl mx-auto px-4 py-16 -mt-10">
        
        <!-- Giving Options -->
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div class="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                
                <!-- EFT -->
                <div class="p-8 md:p-12">
                    <h2 class="font-serif text-2xl font-bold text-[#2F5D62] mb-6">EFT / Bank Transfer</h2>
                    <p class="text-sm text-gray-500 mb-6">The most effective way to give. Please use the details below.</p>
                    
                    <div class="space-y-4 bg-[#F7F8F6] p-6 rounded-lg border border-gray-200">
                        <div class="flex justify-between items-center">
                            <span class="text-gray-500 text-sm">Bank</span>
                            <span class="font-bold text-[#2B2B2B]">Standard Bank</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-500 text-sm">Account Name</span>
                            <span class="font-bold text-[#2B2B2B]">North Community</span>
                        </div>
                        <div class="flex justify-between items-center group cursor-pointer" (click)="copy('123456789')">
                            <span class="text-gray-500 text-sm">Account No.</span>
                            <span class="font-bold text-[#2B2B2B] flex items-center">
                                123 456 789
                                <svg class="w-4 h-4 ml-2 text-gray-400 group-hover:text-[#D6A85F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                            </span>
                        </div>
                         <div class="flex justify-between items-center">
                            <span class="text-gray-500 text-sm">Branch Code</span>
                            <span class="font-bold text-[#2B2B2B]">051001</span>
                        </div>
                    </div>
                    
                    @if (copied()) {
                        <p class="text-green-600 text-xs text-center mt-2 font-medium animate-pulse">Account number copied!</p>
                    }
                </div>

                <!-- Other Ways -->
                <div class="p-8 md:p-12 flex flex-col justify-center bg-[#FDFDFD]">
                     <h2 class="font-serif text-2xl font-bold text-[#2F5D62] mb-6">Other Ways to Give</h2>
                     
                     <div class="space-y-6">
                         <div class="flex items-start">
                             <div class="w-10 h-10 rounded-full bg-[#D6A85F]/20 flex items-center justify-center text-[#D6A85F] mt-1 shrink-0">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                             </div>
                             <div class="ml-4">
                                 <h3 class="font-bold text-[#2B2B2B]">Sunday Service</h3>
                                 <p class="text-sm text-gray-600">Cash or card facilities are available at the info desk every Sunday.</p>
                             </div>
                         </div>
                         <div class="flex items-start">
                             <div class="w-10 h-10 rounded-full bg-[#D6A85F]/20 flex items-center justify-center text-[#D6A85F] mt-1 shrink-0">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                             </div>
                             <div class="ml-4">
                                 <h3 class="font-bold text-[#2B2B2B]">Recurring Giving</h3>
                                 <p class="text-sm text-gray-600">Set up a scheduled payment with your bank to give consistently.</p>
                             </div>
                         </div>
                         <div class="flex items-start">
                             <div class="w-10 h-10 rounded-full bg-[#D6A85F]/20 flex items-center justify-center text-[#D6A85F] mt-1 shrink-0">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                             </div>
                             <div class="ml-4">
                                 <h3 class="font-bold text-[#2B2B2B]">SnapScan</h3>
                                 <p class="text-sm text-gray-600">Scan our QR code in the foyer.</p>
                             </div>
                         </div>
                     </div>
                </div>

            </div>
        </div>

        <!-- Transparency -->
        <div class="text-center max-w-2xl mx-auto">
            <h3 class="font-serif text-2xl text-[#2F5D62] font-bold mb-4">Your Giving Matters</h3>
            <p class="text-gray-600 mb-8">Because of your generosity, we are able to support:</p>
            <div class="flex flex-wrap justify-center gap-3">
                <span class="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-600">Mobile Clinic</span>
                <span class="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-600">Soup Kitchen</span>
                <span class="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-600">Youth Ministry</span>
                <span class="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-600">Facility Upkeep</span>
                <span class="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-600">Pastoral Care</span>
            </div>
            <p class="mt-10 font-serif italic text-[#D6A85F] text-lg">Thank you for partnering with us.</p>
        </div>

    </div>
  `
})
export class GivingComponent {
  copied = signal(false);

  copy(text: string) {
    navigator.clipboard.writeText(text);
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 2000);
  }
}
