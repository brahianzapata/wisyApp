import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {

  constructor(
    private router: Router
  ) {}

  onGoToPageForecast(type: string) {
    this.router.navigateByUrl(`/weather/${type}`);
  }

}
