import { Component, Input } from '@angular/core';
import { filter, findIndex, findLastIndex, slice } from 'lodash-es';
import { WeatherApiService } from '../../services/weather.api.service';
import { IWeatherData } from '../../weather.types';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { getAvegateValueByYear } from '../../services/weather.service';
import { sourceTypes } from '../../weather.types';

@Component({
  selector: 'weather-chart-container',
  templateUrl: './weather-chart-container.component.html',
  styleUrls: ['./weather-chart-container.component.css']
})

export class WeatherChartContainerComponent {
  @Input() dateFilter: any;
  @Input() sourceFilter: any;

  temperatures: IWeatherData[];
  precipitation: IWeatherData[];
  dataForChart: IWeatherData[];

  constructor(private WeatherApiService: WeatherApiService) {

  }

  ngOnInit() {
    forkJoin([this.WeatherApiService.getTemperature(), this.WeatherApiService.getPrecipitation()]).subscribe((results) => {
      this.temperatures = results[0] as IWeatherData[];
      this.precipitation = results[1] as IWeatherData[];
    });
  }

  ngOnChanges() {
    if (this.dateFilter && this.sourceFilter) {
      if (this.sourceFilter === sourceTypes.temperature) {
        this.dataForChart = this.getFilteredChartData(this.temperatures);
        console.log('ttt',this.dataForChart);
      } else {
        this.dataForChart = this.getFilteredChartData(this.precipitation);
        console.log('ppp',this.dataForChart);
      }
    }
  }

  private getFilteredChartData(data) {
    const startPosition = findIndex(data, (item) => item.t.substr(0,4) == this.dateFilter.dateFrom);
    const endPosition = findLastIndex(data, (item) => item.t.substr(0,4) == this.dateFilter.dataTo);

    return slice(data, startPosition, endPosition);
  }

}
