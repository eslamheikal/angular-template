import { Component, inject } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
<<<<<<< HEAD
import { AdminDashboard } from "../admin-dashboard/admin-dashboard";
=======
import { TeacherDashboard } from "../teacher-dashboard/teacher-dashboard";
import { StudentDashboard } from "../student-dashboard/student-dashboard";
>>>>>>> 936adaf186c79057ed2c6fc37805da59bab88197
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout-dashboard',
<<<<<<< HEAD
  imports: [CommonModule, AdminDashboard],
=======
  imports: [CommonModule, TeacherDashboard, StudentDashboard],
>>>>>>> 936adaf186c79057ed2c6fc37805da59bab88197
  templateUrl: './layout-dashboard.html',
  styleUrl: './layout-dashboard.scss'
})
export class LayoutDashboard {

  public authService = inject(AuthService);
}
