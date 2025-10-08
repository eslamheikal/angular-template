import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  imports: [],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss'
})
export class AdminDashboard {

  // private reportService = inject(ReportService);

  exportAttendance() {
    // this.reportService.download(0).subscribe(r => {});
  }
}
