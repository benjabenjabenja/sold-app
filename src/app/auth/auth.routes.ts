import { Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";

export const auth_routes: Routes = [
    {
        path: 'signin',
        component: LoginComponent,
        title: 'Sign In - SoldAPP'
    },
    {
        path: 'signup',
        component: RegisterComponent,
        title: 'Sign Up - SoldAPP'
    },
];