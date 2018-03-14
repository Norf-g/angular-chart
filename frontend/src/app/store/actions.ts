import * as types from './constants';

export const fetchTemperatureListStartAction  = () => ({
  type: types.FETCH_TEMPERATURE_LIST_START
});

export const fetchedTemperatureListSuccessAction = (payload?) => ({
  type: types.FETCH_TEMPERATURE_LIST_SUCCESS,
  payload
});

export const fetchedTemperatureListFailAction = (payload?) => ({
  type: types.FETCH_TEMPERATURE_LIST_FAIL,
  payload
});

export const fetchPrecipitationListStartAction  = () => ({
  type: types.FETCH_PRECIPITAION_LIST_START
});

export const fetchedPrecipitationListSuccessAction = (payload?) => ({
  type: types.FETCH_PRECIPITAION_LIST_SUCCESS,
  payload
});

export const fetchedPrecipitationListFailAction = (payload?) => ({
  type: types.FETCH_PRECIPITAION_LIST_FAIL,
  payload
});
