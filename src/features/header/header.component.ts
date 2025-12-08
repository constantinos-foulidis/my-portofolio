import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../app/services/theme.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  template: `
  <header class="sticky top-0 z-50 bg-white shadow-md">
    <nav class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <a routerLink="/" class="text-2xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
          Konstantinos Foulidis
        </a>

        <div class="hidden md:flex space-x-8">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"
             class="nav-link text-gray-700 hover:text-[var(--color-primary)] transition-colors duration-200 font-medium">
            Home
          </a>
          <a routerLink="/about" routerLinkActive="active"
             class="nav-link text-gray-700 hover:text-[var(--color-primary)] transition-colors duration-200 font-medium">
            About
          </a>
          <a routerLink="/projects" routerLinkActive="active"
             class="nav-link text-gray-700 hover:text-[var(--color-primary)] transition-colors duration-200 font-medium">
            Projects
          </a>
          <a routerLink="/contact" routerLinkActive="active"
             class="nav-link text-gray-700 hover:text-[var(--color-primary)] transition-colors duration-200 font-medium">
            Contact
          </a>
        </div>
      </div>
    </nav>
  </header>`,
  styles: [`
    .nav-link.active {
      color: var(--color-primary);
      border-bottom: 2px solid var(--color-primary);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  themeService = inject(ThemeService);
}
