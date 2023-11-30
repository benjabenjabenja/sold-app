import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from '../entities/item-menu.types';

@Component({
	selector: 'app-sidebar',
	standalone: true,
	imports: [RouterModule],
	templateUrl: './sidebar.component.html',
	styleUrls: ['sidebar.component.scss'],
	exportAs: 'app-sidebar'
})
export class SidebarComponent {
	@Input() menuItems: MenuItem[] = [];
	isSidebarOpen = false;

	toggleSidebar() {
		this.isSidebarOpen = !this.isSidebarOpen;
	}
}
