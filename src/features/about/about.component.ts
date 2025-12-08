import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvService } from '../../app/services/cv.service';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  template: `
  <section class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mx-auto"></div>
        </div>

        <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h3>

          <div class="space-y-8">
            @for (exp of cvData.experience; track exp.company) {
              <div class="border-l-4 border-[var(--color-primary)] pl-6 py-2">
                <div class="flex flex-wrap items-baseline justify-between mb-3">
                  <h4 class="text-xl font-bold text-[var(--color-primary)]">{{ exp.company }}</h4>
                  <span class="text-sm text-gray-500 font-medium">{{ exp.period }}</span>
                </div>
                <p class="text-lg font-semibold text-gray-700 mb-4">{{ exp.position }}</p>

                <ul class="space-y-2">
                  @for (resp of exp.responsibilities; track resp) {
                    <li class="flex items-start">
                      <svg class="w-5 h-5 text-[var(--color-primary)] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      <span class="text-gray-600">{{ resp }}</span>
                    </li>
                  }
                </ul>
              </div>
            }
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white rounded-2xl shadow-xl p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            @for (edu of cvData.education; track edu.institution) {
              <div class="mb-4">
                <p class="text-[var(--color-primary)] font-semibold mb-2">{{ edu.period }}</p>
                <p class="text-gray-700 leading-relaxed">{{ edu.institution }}</p>
              </div>
            }
          </div>

          <div class="bg-white rounded-2xl shadow-xl p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Skills & Expertise</h3>

            <div class="space-y-6">
              <div>
                <h4 class="font-semibold text-[var(--color-primary)] mb-3">Front-end</h4>
                <div class="flex flex-wrap gap-2">
                  @for (skill of cvData.skills.frontend; track skill) {
                    <span class="px-3 py-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white text-sm rounded-full">
                      {{ skill }}
                    </span>
                  }
                </div>
              </div>

              <div>
                <h4 class="font-semibold text-[var(--color-primary)] mb-3">Mobile</h4>
                <div class="flex flex-wrap gap-2">
                  @for (skill of cvData.skills.mobile; track skill) {
                    <span class="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">
                      {{ skill }}
                    </span>
                  }
                </div>
              </div>

              <div>
                <h4 class="font-semibold text-[var(--color-primary)] mb-3">Other Technologies</h4>
                <div class="flex flex-wrap gap-2">
                  @for (skill of cvData.skills.other; track skill) {
                    <span class="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">
                      {{ skill }}
                    </span>
                  }
                </div>
              </div>

              <div>
                <h4 class="font-semibold text-[var(--color-primary)] mb-3">TV Platforms</h4>
                <div class="flex flex-wrap gap-2">
                  @for (skill of cvData.skills.tv; track skill) {
                    <span class="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">
                      {{ skill }}
                    </span>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  cvService = inject(CvService);
  cvData = this.cvService.getCVData();
}
