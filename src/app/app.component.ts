import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'sold-app';
  trigger_sidebar: boolean = false;
  constructor(){}

  toggleSidebar() {
    if (!this.trigger_sidebar) {
      const sidebar = document.querySelector('.lg\\:block') as HTMLElement;
      sidebar.classList.toggle('hidden');
      this.trigger_sidebar = true;
    }
    this.trigger_sidebar = !this.trigger_sidebar;
  }
}
