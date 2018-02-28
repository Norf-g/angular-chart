import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherApiService {

  baseUrl: string = '/api';

  constructor(private http: HttpClient) {
  }

  getTemperature() {
    return this.http.get(`${this.baseUrl}/temperature`);
  }

  getPrecipitation() {
    return this.http.get(`${this.baseUrl}/precipitation`);
  }
}
