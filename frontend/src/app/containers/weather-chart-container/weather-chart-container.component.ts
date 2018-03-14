import { Component, Input } from '@angular/core';
import { findIndex, findLastIndex, slice } from 'lodash-es';
import { WeatherApiService } from '../../services/weather.api.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { fetchTemperatureListStartAction, fetchPrecipitationListStartAction } from '../../store/actions';
import { getWeatherTemperatureList, getWeatherPrecipitaionList } from '../../store/selectors';
import { IWeatherData } from '../../weather.types';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { combineLatest } from 'rxjs/observable/combineLatest';
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

  dataForChart: IWeatherData[];
  temperatureList: IWeatherData[];
  precipitaionList: IWeatherData[];
  temperatures$: Observable<any>;
  precipitaion$: Observable<any>;

  constructor(private WeatherApiService: WeatherApiService, private store: Store<any>) {

  }

  ngOnInit() {
    this.store.dispatch(fetchTemperatureListStartAction());
    this.store.dispatch(fetchPrecipitationListStartAction());
    this.temperatures$ = this.store.select(getWeatherTemperatureList);
    this.precipitaion$ = this.store.select(getWeatherPrecipitaionList);

    combineLatest(this.temperatures$, this.precipitaion$)
      .subscribe((results: [IWeatherData[], IWeatherData[]]) => {
        this.temperatureList = results[0];
        this.precipitaionList = results[1];
        this.calculateDataForChart();
      });
  }

  ngOnChanges() {
    this.calculateDataForChart();
  }

  private calculateDataForChart(): void {
    const startDate = new Date().valueOf();

    if (this.dateFilter && this.sourceFilter && this.temperatureList) {
      let filteredData;
      if (this.sourceFilter === sourceTypes.temperature) {
        filteredData = this.getFilteredChartData(this.temperatureList);
      } else {
        filteredData = this.getFilteredChartData(this.precipitaionList);
      }
      this.dataForChart = getAvegatesValues(filteredData, 12);
    }

    console.log('calculation time = ', new Date().valueOf() - startDate);
  }

  private getFilteredChartData(data: IWeatherData[]): IWeatherData[] {
    const startPosition = findIndex(data, (item) => item.t.substr(0, 4) == this.dateFilter.dateFrom);
    const endPosition = findLastIndex(data, (item) => item.t.substr(0, 4) == this.dateFilter.dateTo);

    return slice(data, startPosition, endPosition);
  }

}
