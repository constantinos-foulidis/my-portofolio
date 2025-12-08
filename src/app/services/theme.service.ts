import { Injectable, signal } from '@angular/core';

export interface ThemeColor {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themes: ThemeColor[] = [
    {
      name: 'Ocean Blue',
      primary: '#0ea5e9',
      secondary: '#0284c7',
      accent: '#38bdf8'
    },
    {
      name: 'Professional Gray',
      primary: '#4a5568',
      secondary: '#2d3748',
      accent: '#718096'
    },
    {
      name: 'Forest Green',
      primary: '#10b981',
      secondary: '#059669',
      accent: '#34d399'
    },
    {
      name: 'Royal Purple',
      primary: '#8b5cf6',
      secondary: '#7c3aed',
      accent: '#a78bfa'
    },
    {
      name: 'Sunset Orange',
      primary: '#f97316',
      secondary: '#ea580c',
      accent: '#fb923c'
    },
    {
      name: 'Deep Red',
      primary: '#dc2626',
      secondary: '#b91c1c',
      accent: '#ef4444'
    }
  ];

  currentTheme = signal<ThemeColor>(this.themes[0]);

  getThemes(): ThemeColor[] {
    return this.themes;
  }

  setTheme(theme: ThemeColor): void {
    this.currentTheme.set(theme);
    this.applyTheme(theme);
  }

  private applyTheme(theme: ThemeColor): void {
    document.documentElement.style.setProperty('--color-primary', theme.primary);
    document.documentElement.style.setProperty('--color-secondary', theme.secondary);
    document.documentElement.style.setProperty('--color-accent', theme.accent);
  }

  getCurrentTheme(): ThemeColor {
    return this.currentTheme();
  }
}
