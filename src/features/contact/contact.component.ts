import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvService } from '../../app/services/cv.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  template: `
  <section class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mx-auto mb-4"></div>
          <p class="text-xl text-gray-600">Let's discuss your next project</p>
        </div>

        <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                <a [href]="'mailto:' + cvData.email" class="text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors break-all">
                  {{ cvData.email }}
                </a>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                <a [href]="'tel:' + cvData.phone" class="text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors">
                  {{ cvData.phone }}
                </a>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-1">Location</h3>
                <p class="text-gray-600">{{ cvData.address }}</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-1">LinkedIn</h3>
                <a [href]="cvData.linkedin" target="_blank" class="text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors break-all">
                  {{ cvData.linkedin }}
                </a>
              </div>
            </div>
          </div>

          <div class="border-t pt-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Connect With Me</h3>
            <div class="flex justify-center space-x-6">
              <a [href]="cvData.linkedin" target="_blank"
                 class="w-14 h-14 bg-[var(--color-primary)] rounded-lg flex items-center justify-center hover:bg-[var(--color-secondary)] transition-all duration-200">
                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  cvService = inject(CvService);
  cvData = this.cvService.getCVData();
}
