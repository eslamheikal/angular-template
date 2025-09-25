import { Component, inject } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { TeacherDashboard } from "../teacher-dashboard/teacher-dashboard";
import { StudentDashboard } from "../student-dashboard/student-dashboard";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout-dashboard',
  imports: [CommonModule, TeacherDashboard, StudentDashboard],
  templateUrl: './layout-dashboard.html',
  styleUrl: './layout-dashboard.scss'
})
export class LayoutDashboard {

  public authService = inject(AuthService);
}
