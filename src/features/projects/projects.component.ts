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

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (project of projects; track project.id) {
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div class="h-48 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center">
                <div class="text-white text-6xl font-bold opacity-30">{{ project.icon }}</div>
              </div>
              <div class="p-6">
                <div class="mb-3">
                  <h3 class="text-xl font-bold text-gray-900 mb-2">{{ project.title }}</h3>
                  <span class="inline-block px-3 py-1 bg-[var(--color-primary)] bg-opacity-10 text-[var(--color-black)] text-sm font-semibold rounded-full">
                    {{ project.subtitle }}
                  </span>
                </div>
                <p class="text-gray-600 mb-4 line-clamp-3">{{ project.description }}</p>

                <div class="flex flex-wrap gap-2 mb-4">
                  @for (tech of project.technologies; track tech) {
                    <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">{{ tech }}</span>
                  }
                </div>
              </div>
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
      title: 'Enterprise Angular Application',
      subtitle: 'Angular + TypeScript',
      description: 'Large-scale enterprise application with complex state management, real-time updates, and advanced routing. Built with Angular 16+ and modern best practices.',
      icon: 'A',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'SASS'],
      link: 'http://www.foulidis.innosoft-dev.top/'
    },
    {
      id: 2,
      title: 'Smart TV Applications',
      subtitle: 'Tizen & WebOS',
      description: 'Cross-platform TV applications for Samsung Tizen and LG WebOS platforms with custom UI components and remote control navigation.',
      icon: 'TV',
      technologies: ['Tizen', 'WebOS', 'JavaScript', 'CSS'],
      link: 'http://www.foulidis.innosoft-dev.top/'
    },
    {
      id: 3,
      title: 'Mobile Hybrid Apps',
      subtitle: 'Cordova',
      description: 'Hybrid mobile applications using Cordova framework for iOS and Android platforms with native plugin integrations.',
      icon: 'M',
      technologies: ['Cordova', 'JavaScript', 'HTML5', 'CSS3'],
      link: 'http://www.foulidis.innosoft-dev.top/'
    },
    {
      id: 4,
      title: 'AR/VR Experience',
      subtitle: 'Unity',
      description: 'Immersive AR and VR applications built with Unity engine for educational and entertainment purposes.',
      icon: 'VR',
      technologies: ['Unity', 'C#', 'ARCore', 'ARKit'],
      link: 'http://www.foulidis.innosoft-dev.top/'
    },
    {
      id: 5,
      title: 'Full-Stack Web Platform',
      subtitle: 'MEAN Stack',
      description: 'Complete web platform with Node.js backend, Express REST API, MongoDB database, and Angular frontend.',
      icon: 'FS',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Angular'],
      link: 'http://www.foulidis.innosoft-dev.top/'
    },
    {
      id: 6,
      title: 'React Dashboard',
      subtitle: 'React + Redux',
      description: 'Modern admin dashboard with React, Redux for state management, and data visualization components.',
      icon: 'R',
      technologies: ['React', 'Redux', 'Chart.js', 'Material-UI'],
      link: 'http://www.foulidis.innosoft-dev.top/'
    }
  ];
}
