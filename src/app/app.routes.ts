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
<<<<<<< HEAD
        path: 'courses',
        loadChildren: () => import('./features/courses/courses.routes').then(m => m.COURSES_ROUTES),
        canActivate: [AuthGuard]
    },
    {
=======
>>>>>>> 936adaf186c79057ed2c6fc37805da59bab88197
        path: 'error',
        loadChildren: () => import('./features/error-pages/error-pages.routes').then(m => m.ERROR_PAGES_ROUTES)
    },
    {
        path: '**',
        redirectTo: '/error/404'
    }
];
