import { Component, Input } from '@angular/core';
import { filter, findIndex, findLastIndex, slice } from 'lodash-es';
import { WeatherApiService } from '../../services/weather.api.service';
import { IWeatherData } from '../../weather.types';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { getAvegatesValues } from '../../services/weather.service';
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
      this.getDataForChart();
    });
  }

  ngOnChanges() {
    this.getDataForChart();
  }

  private getDataForChart() {
    if (this.dateFilter && this.sourceFilter && this.temperatures) {
      let filteredData;
      if (this.sourceFilter === sourceTypes.temperature) {
        filteredData = this.getFilteredChartData(this.temperatures);
      } else {
        filteredData = this.getFilteredChartData(this.precipitation);
      }
      this.dataForChart = getAvegatesValues(filteredData, 100);
    }
  }

  private getFilteredChartData(data) {
    const startPosition = findIndex(data, (item) => item.t.substr(0,4) == this.dateFilter.dateFrom);
    const endPosition = findLastIndex(data, (item) => item.t.substr(0,4) == this.dateFilter.dateTo);
    return slice(data, startPosition, endPosition);
  }

}
