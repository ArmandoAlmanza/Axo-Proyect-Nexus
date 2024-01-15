import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matHome } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './landing-page.component.html',
  viewProviders: [provideIcons({ matHome })],
})
export class LandingPageComponent {}
