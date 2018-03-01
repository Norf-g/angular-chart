import { forEach, round } from 'lodash-es';
import { IWeatherData } from '../weather.types';

export const getAvegatesValues = (dataSet: IWeatherData[], pointsCount: number = 10) : IWeatherData[] => {
  const result = [];
  let averageValue = 0;
  let previousValueIndex = 0;

  const partLength = Math.ceil(dataSet.length / pointsCount);

  forEach(dataSet, (item, i) => {
    averageValue += item.v;

    if ((i + 1) % partLength === 0) {
      result.push({
        t: dataSet[Math.floor((i + previousValueIndex) / 2)].t,
        v: round(averageValue / ((i - previousValueIndex) || 1), 2)
      });
      averageValue = 0;
      previousValueIndex = i;
    }
  });

  return result;
}
