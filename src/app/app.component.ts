import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './features/sidebar/sidebar.component';
import { MenuItem } from './infrastructure/entities/item-menu.types';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, RouterModule, SidebarComponent],
	templateUrl: './app.component.html',
	styles: ``,
})
export class AppComponent {

	title = 'sold-app';
	trigger_sidebar: boolean = false;

	menuItems: MenuItem[] = [
		{
			icon: '',
			label: 'Sign In',
			link: '/auth/signin',
			subItems: []
		},
		{
			icon: '',
			label: 'Sign Up',
			link: '/auth/signup',
			subItems: []
		},
		{
			icon: '',
			label: 'Salir',
			link: '/',
			subItems: []
		},
	];

	constructor() { }
}
