import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

/**
 * Main Component
 * @example <app-root></app-root>
 */
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true 
})
export class AppComponent {
  title = 'angular19-storybook';
}
