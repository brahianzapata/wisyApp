import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-weather-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-chart.component.html',
  styleUrl: './weather-chart.component.css'
})
export class WeatherChartComponent implements OnInit {
  @Input() names: string[] = []; // Input para recibir los dias
  @Input() temperatures: number[] = []; // Input para recibir las temperaturas

  public chart: any;


  ngOnInit(): void {
    this.createChart(this.names, this.temperatures )
  }

  createChart(labels: string[], temperature: number[] ){

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Temperature (°F)',
            data: temperature,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
