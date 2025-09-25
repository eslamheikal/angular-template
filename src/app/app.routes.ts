import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),
        canActivate: [AuthGuard]
    },
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: 'error',
        loadChildren: () => import('./features/error-pages/error-pages.routes').then(m => m.ERROR_PAGES_ROUTES)
    },
    {
        path: '**',
        redirectTo: '/error/404'
    }
];
