import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class PermissionAccessService {

    private authService = inject(AuthService);

    get canViewSideNav() {
        return {
            courses: this.authService.isAdmin,
        };
    }

    get canExport() {
        return {
            exportCoursesPdf: this.authService.isAdmin || this.authService.isEmployee || this.authService.isStudent
        };
    }

    get canView() {
        return {
            courseProfile: this.authService.isAdmin || this.authService.isEmployee,
        };
    }

    get canAdd() {
        return {
            course: this.authService.isAdmin || this.authService.isEmployee,
        };
    }

    get canEdit() {
        return {
            course: this.authService.isAdmin || this.authService.isEmployee,
        };
    }

    get canDelete() {
        return {
            course: this.authService.isAdmin,
        };
    }

    get canActivate() {
        return {
            course: this.authService.isAdmin,
        };
    }

    get canDeactivate() {
        return {
            course: this.authService.isAdmin,
        };
    }
}
