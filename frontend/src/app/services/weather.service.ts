import { map } from 'lodash-es';
import { IWeatherData } from '../weather.types';

export const getAvegateValueByYear = (dataSet: IWeatherData[]) : IWeatherData[] => {
  const result = [...dataSet];
  console.log(map(result, (item) => item.t));


  return result;
}
