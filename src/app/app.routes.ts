import { Routes } from '@angular/router';
import { AuthHomeComponent } from './auth/auth-home.component';

export const routes: Routes = [
    {
        path: 'auth',
        component: AuthHomeComponent,
        title: 'Authentication - SoldAPP',
        loadChildren: () => import('./auth/auth.routes').then( r => r.auth_routes )
    },
];
