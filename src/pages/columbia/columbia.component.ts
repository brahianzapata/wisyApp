import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastedService } from '../../services/forecasted.service';
import { responseWeatherForecast } from '../../share/interfaces/weatherForecast.interface';
import { WeatherChartComponent } from '../../components/weather-chart/weather-chart.component';

@Component({
  selector: 'app-columbia',
  standalone: true,
  imports: [CommonModule, WeatherChartComponent],
  templateUrl: './columbia.component.html',
  styleUrl: './columbia.component.css'
})
export default class ColumbiaComponent implements OnInit {

  public names: string[] = [];
  public temperatures: number[] = [];
  public isLoading: boolean =  true;

  constructor(private forecastedService: ForecastedService) {}

  ngOnInit(): void {

    this.forecastedService.getWeatherForecast('LWX')
        .subscribe((response: responseWeatherForecast) => {

            response.properties.periods.forEach( period => {
              this.names.push(period.name);
              this.temperatures.push(period.temperature);
            });

            this.isLoading = false;
        });
  }

}
