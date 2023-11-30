import { Component } from '@angular/core';

@Component({
	selector: 'app-register',
	standalone: true,
	imports: [],
	templateUrl: './register.component.html',
	styles: `
form {
	min-width: 500px;
	max-width: 700px;
}
.input {
	appearance: none;
	border: 1px solid #e2e8f0;
	padding: 0.5rem 1rem;
	width: 100%;
	border-radius: 999px;
	outline: none;
}
.btn {
	background-color: #4a90e2;
	color: white;
	padding: 0.5rem 1rem;
	border-radius: 999px;
	cursor: pointer;
	&:hover {
		background-color: #2a4d69;
	}
}
  `
})
export class RegisterComponent {
	show_icon: boolean = false;
	show_icon_confirm: boolean = false;
}
