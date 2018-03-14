import { weatherState } from './reducer';
import { createSelector } from '@ngrx/store';

export const getWeatherState = (state) => state.weather;
export const getWeatherTemperatureList = createSelector(getWeatherState, (state: weatherState) => state.temperatureList);
export const getWeatherPrecipitaionList = createSelector(getWeatherState, (state: weatherState) => state.precipitationList);
