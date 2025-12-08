import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  template: `
  <footer class="bg-gray-900 text-white py-8">
    <div class="container mx-auto px-6">
      <div class="text-center">
        <p class="text-gray-300">© 2025 Konstantinos Foulidis. All rights reserved.</p>
        <p class="text-gray-400 text-sm mt-2">Built with Angular 19 & Tailwind CSS</p>
      </div>
    </div>
  </footer>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent { }
