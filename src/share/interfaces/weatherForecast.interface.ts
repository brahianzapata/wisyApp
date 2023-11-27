
export interface responseWeatherForecast {
  geometry: any,
  properties: WeatherForecast
}

export interface WeatherForecast {
  updated: string;
  units: string;
  periods: WeatherPeriod[];
}

export interface WeatherPeriod {
  number: number;
  name: string;
  startTime: string;
  endTime: string;
  isDaytime: boolean;
  temperature: number;
  temperatureUnit: string;
}
