import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { IWeatherData } from '../../weather.types';
import { sourceTypes } from '../../weather.types';

@Component({
  selector: 'weather-chart',
  templateUrl: './weather-chart.html',
  styleUrls: ['./weather-chart.css']
})

export class WeatherChartComponent {
  @Input() data: IWeatherData[];
  @Input() sourceType: string

  chart: any;

  constructor() {

  }

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: [],
        datasets: [
          {
            data: [],
            fill: false
          }
        ]
      },
      options: {
        pointBorderWidth: 0,
        elements: {
          line: {
            tension: 0,
            showLines: false,
            animation: {
              duration: 0, // general animation time
            },
            hover: {
              animationDuration: 0, // duration of animations when hovering an item
            },
            responsiveAnimationDuration: 0, // animation duration after a resize
          }
        }
      }
    });
  }

  ngOnChanges() {
    if (this.data) {
      this.updateChartConfig();
    }
  }

  private updateChartConfig() {
    this.chart.data.labels = this.data.map((item) => item.t);
    this.chart.data.datasets[0].data = this.data.map((item) => item.v);
    if (this.sourceType === sourceTypes.temperature) {
      this.chart.data.datasets[0].label = 'Среднее значение температуры';
    } else {
      this.chart.data.datasets[0].label = 'Среднее значение осадков';
    }

    this.chart.update();
  }
}
