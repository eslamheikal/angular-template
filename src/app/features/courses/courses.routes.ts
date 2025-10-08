import { Routes } from '@angular/router';
import { CoursesList } from './components/courses-list/courses-list';
import { TitleResolver } from '../../core/resolvers/title.resolver';

export const COURSES_ROUTES: Routes = [
    {
        path: '',
        component: CoursesList,
        resolve: { title: TitleResolver },
        data: {
            subtitle: 'courses.all'
        }
    }
];
