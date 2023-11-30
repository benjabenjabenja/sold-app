import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './auth-home.component.html',
  styles: ``
})
export class AuthHomeComponent {
  constructor() { }
}
