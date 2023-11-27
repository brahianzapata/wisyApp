import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { responseWeatherForecast } from '../share/interfaces/weatherForecast.interface';

@Injectable({
  providedIn: 'root'
})
export class ForecastedService {

  private http = inject(HttpClient)

  constructor() { }

  getWeatherForecast(type: string) {
    const url = `https://api.weather.gov/gridpoints/${type}/31,80/forecast`;
    return this.http.get<responseWeatherForecast>(url);
  }
}
