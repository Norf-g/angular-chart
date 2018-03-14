import { Action } from '@ngrx/store';
import *  as types from './constants';
import { IWeatherData, sourceTypes, IDatePeriod } from '../weather.types';

const initialState = {
  dateFilter: undefined,
  sourceFilter: undefined,
  temperatureList: [],
  precipitationList: []
};

export interface weatherState {
  temperatureList: IWeatherData[];
  precipitationList: IWeatherData[];
  sourceFilter: sourceTypes;
  dateFilter: IDatePeriod;
}

export function weatherReducer(state: weatherState = initialState, action) {
  switch (action.type) {
    case types.FETCH_TEMPERATURE_LIST_SUCCESS:
      return {
        ...state,
        temperatureList: action.payload
      };

    case types.FETCH_TEMPERATURE_LIST_FAIL:
      return {
        ...state,
        temperatureList: null
      };

    case types.FETCH_PRECIPITAION_LIST_SUCCESS:
      return {
        ...state,
        precipitationList: action.payload
      };

    case types.FETCH_PRECIPITAION_LIST_FAIL:
      return {
        ...state,
        precipitationList: null
      };

    default:
      return state;
  }
}
