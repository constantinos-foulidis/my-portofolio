import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  template: `
  <section class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mx-auto mb-4"></div>
          <p class="text-xl text-gray-600">A showcase of my recent work and achievements</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          @for (project of projects; track project.id) {
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
              <div class="h-48 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center">
                <div class="text-white text-6xl font-bold opacity-30">{{ project.icon }}</div>
              </div>
              <div class="p-6 flex flex-col flex-1">
                <div class="mb-3">
                  <h3 class="text-xl font-bold text-gray-900 mb-2">{{ project.title }}</h3>
                  <span class="inline-block px-3 py-1 bg-[var(--color-primary)] bg-opacity-10 text-[var(--color-black)] text-sm font-semibold rounded-full">
                    {{ project.subtitle }}
                  </span>
                </div>
                <p class="text-gray-600 mb-4 line-clamp-3 flex-1">{{ project.description }}</p>

                <div class="flex flex-wrap gap-2 mb-4">
                  @for (tech of project.technologies; track tech) {
                    <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">{{ tech }}</span>
                  }
                </div>

                @if (project.link) {
                  <a [href]="project.link" target="_blank"
                     class="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-white text-sm font-semibold rounded-lg hover:bg-[var(--color-secondary)] transition-colors duration-200 self-start">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                    View Live
                  </a>
                }
              </div>
            </div>
          }
        </div>

        <!-- Clients Section -->
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Clients I've Contributed To</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mx-auto mb-4"></div>
          <p class="text-lg text-gray-600">European organisations I've delivered solutions for</p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          @for (client of clients; track client.name) {
            <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 flex flex-col items-center justify-center gap-3">
              <div class="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg"
                   [style.background-color]="client.color">
                {{ client.initials }}
              </div>
              <span class="text-gray-800 font-semibold text-sm text-center">{{ client.name }}</span>
              <span class="text-gray-400 text-xs text-center">{{ client.industry }}</span>
            </div>
          }
        </div>
      </div>
    </div>
  </section>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      title: 'BetPilot',
      subtitle: 'Sports Betting Platform',
      description: 'A modern sports betting platform with real-time odds, live event tracking, and a clean guest-accessible interface. Contributed to the frontend architecture and UI development.',
      icon: 'BP',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'SASS'],
      link: 'https://www.betpilot.club/guest'
    },
    {
      id: 2,
      title: 'Enterprise Angular Application',
      subtitle: 'Angular + TypeScript',
      description: 'Large-scale enterprise application with complex state management, real-time updates, and advanced routing. Built with Angular 16+ and modern best practices.',
      icon: 'A',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'SASS'],
    },
    {
      id: 3,
      title: 'Smart TV Applications',
      subtitle: 'Tizen & WebOS',
      description: 'Cross-platform TV applications for Samsung Tizen and LG WebOS platforms with custom UI components and remote control navigation.',
      icon: 'TV',
      technologies: ['Tizen', 'WebOS', 'JavaScript', 'CSS'],
    },
    {
      id: 4,
      title: 'Mobile Hybrid Apps',
      subtitle: 'Cordova',
      description: 'Hybrid mobile applications using Cordova framework for iOS and Android platforms with native plugin integrations.',
      icon: 'M',
      technologies: ['Cordova', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      id: 5,
      title: 'AR/VR Experience',
      subtitle: 'Unity',
      description: 'Immersive AR and VR applications built with Unity engine for educational and entertainment purposes.',
      icon: 'VR',
      technologies: ['Unity', 'C#', 'ARCore', 'ARKit'],
    },
    {
      id: 6,
      title: 'Custom Angular Component Library',
      subtitle: 'Angular Library',
      description: 'Designed and maintained a reusable internal Angular component library used across multiple enterprise projects. The library encapsulates shared UI components, directives, pipes, and services — enforcing consistent design patterns, reducing duplication, and accelerating delivery across teams.',
      icon: 'LIB',
      technologies: ['Angular', 'TypeScript', 'SASS', 'ng-packagr', 'Storybook'],
    },
    {
      id: 7,
      title: 'Full-Stack Web Platform',
      subtitle: 'MEAN Stack',
      description: 'Complete web platform with Node.js backend, Express REST API, MongoDB database, and Angular frontend.',
      icon: 'FS',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Angular'],
    }
  ] as { id: number; title: string; subtitle: string; description: string; icon: string; technologies: string[]; link?: string }[];

  clients = [
    {
      name: 'OPAP',
      initials: 'OP',
      industry: 'Gaming & Lottery',
      color: '#e63946'
    },
    {
      name: 'Ethniki',
      initials: 'EN',
      industry: 'Insurance',
      color: '#1d3557'
    },
    {
      name: 'Cosmote',
      initials: 'CO',
      industry: 'Telecommunications',
      color: '#2dc653'
    },
    {
      name: 'Cyta',
      initials: 'CY',
      industry: 'Telecommunications',
      color: '#f4a261'
    },
    {
      name: 'Vodafone',
      initials: 'VF',
      industry: 'Telecommunications',
      color: '#e63946'
    }
  ];
}
