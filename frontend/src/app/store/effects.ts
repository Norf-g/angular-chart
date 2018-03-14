import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { WeatherApiService } from '../services/weather.api.service';
import { of } from 'rxjs/observable/of';
import { mergeMap, catchError, map } from 'rxjs/operators';
import * as types from './constants';
import {
  fetchedTemperatureListSuccessAction,
  fetchedTemperatureListFailAction,
  fetchedPrecipitationListSuccessAction,
  fetchedPrecipitationListFailAction
} from './actions';

@Injectable()
export class WeatherEffects {
  @Effect()
  leadTemperature$ = this.actions$.ofType(types.FETCH_TEMPERATURE_LIST_START).pipe(
    mergeMap((action) => {
        return this.WeatherApiService.getTemperature().pipe(
          map((res) => fetchedTemperatureListSuccessAction(res)),
          catchError(error => of(fetchedTemperatureListFailAction(error))));
      }
    )
  );

  @Effect()
  leadPrecipitaions$ = this.actions$.ofType(types.FETCH_PRECIPITAION_LIST_START).pipe(
    mergeMap((action) => {
        return this.WeatherApiService.getPrecipitation().pipe(
          map((res) => fetchedPrecipitationListSuccessAction(res)),
          catchError(error => of(fetchedPrecipitationListFailAction(error))));
      }
    )
  );

  constructor(private actions$: Actions, private WeatherApiService: WeatherApiService) {

  }
}
