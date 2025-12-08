import { Routes } from '@angular/router';
import { HomeComponent } from '../features/home/home.component';
import { ContactComponent } from '../features/contact/contact.component';
import { ProjectsComponent } from '../features/projects/projects.component';
import { AboutComponent } from '../features/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' } // fallback
];