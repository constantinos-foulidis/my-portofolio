import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CvService } from '../../app/services/cv.service';
import { ThemeService, ThemeColor } from '../../app/services/theme.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule],
  template: `
  <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
    <div class="container mx-auto px-6 py-20">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <div class="inline-block px-4 py-2 bg-[var(--color-primary)] bg-opacity-10 rounded-full">
              <span class="text-[var(--color-primary)] font-semibold">Lead Front-end Developer</span>
            </div>
            <h1 class="text-5xl md:text-6xl font-bold text-gray-900">
              <span class="text-gray-900">Hi, I'm</span><br>
              <span class="text-[var(--color-primary)]">
                Konstantinos
              </span>
            </h1>
            <p class="text-xl text-gray-600 leading-relaxed">
              Angular specialist with 6+ years of experience building scalable web applications.
              Passionate about creating exceptional user experiences and leading development teams.
            </p>

            <div class="flex flex-wrap gap-4">
              <a routerLink="/projects"
                 class="px-8 py-4 bg-[var(--color-primary)] text-white rounded-lg font-semibold hover:bg-[var(--color-secondary)] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                View My Work
              </a>
              <button (click)="downloadCV()"
                      class="px-8 py-4 bg-white text-[var(--color-primary)] border-2 border-[var(--color-primary)] rounded-lg font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Download CV
              </button>
            </div>

            <div class="pt-6">
              <p class="text-sm text-gray-700 mb-3 font-medium">Choose CV Color Theme:</p>
              <div class="flex flex-wrap gap-3">
                @for (theme of themes; track theme.name) {
                  <button (click)="selectTheme(theme)"
                          [style.background-color]="theme.primary"
                          [class.ring-4]="selectedTheme.name === theme.name"
                          class="w-12 h-12 rounded-full shadow-md hover:shadow-lg transition-all duration-200 ring-offset-2 ring-[var(--color-primary)] transform hover:scale-110"
                          [title]="theme.name">
                  </button>
                }
              </div>
              <p class="text-sm text-gray-700 mt-2 font-medium">Selected: {{ selectedTheme.name }}</p>
            </div>
          </div>

          <div class="relative">
            <div class="w-full aspect-square rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
              <img src="assets/profile.jpg"
                   onerror="this.onerror=null; this.style.display='none'; this.parentElement.innerHTML='<div class=\'text-white text-9xl font-bold\'>KF</div>';"
                   alt="Konstantinos Foulidis"
                   class="w-full h-full object-cover" />
            </div>
            <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--color-accent)] rounded-3xl shadow-xl"></div>
            <div class="absolute -top-6 -left-6 w-24 h-24 bg-[var(--color-secondary)] rounded-full shadow-xl"></div>
          </div>
        </div>

        <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-[var(--color-primary)]">6+</div>
            <div class="text-gray-600 mt-2">Years Experience</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-[var(--color-primary)]">20+</div>
            <div class="text-gray-600 mt-2">Projects Completed</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-[var(--color-primary)]">10+</div>
            <div class="text-gray-600 mt-2">Technologies</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-[var(--color-primary)]">2</div>
            <div class="text-gray-600 mt-2">Companies</div>
          </div>
        </div>
      </div>
    </div>
  </section>`,
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  cvService = inject(CvService);
  themeService = inject(ThemeService);

  themes = this.themeService.getThemes();
  selectedTheme: ThemeColor = this.themes[0];

  selectTheme(theme: ThemeColor): void {
    this.selectedTheme = theme;
    this.themeService.setTheme(theme);
  }

  async downloadCV(): Promise<void> {
    const cvData = this.cvService.getCVData();
    await this.cvService.generatePDF(cvData, this.selectedTheme.primary);
  }
}
