import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'weather-chart',
  templateUrl: './weather-chart.html',
  styleUrls: ['./weather-chart.css']
})

export class WeatherChartComponent {
  @Input() data: any;
  chart: any;
  labels: string[];
  values: number[];

  constructor() {

  }

  ngOnChanges() {
    if (this.data) {
      this.labels = this.data.map((item) => item.t);
      this.values = this.data.map((item) => item.v);

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.labels,
          datasets: [
            {
              label: 'Средняя температура',
              data: this.values,
              fill: false
            }
          ]
        }
      });
    }
  }

  ngOnInit() {
    console.log('init weather-chart');
  }
}
