import { forEach, round } from 'lodash-es';
import { IWeatherData } from '../weather.types';

export const getAvegatesValues = (dataSet: IWeatherData[], count: number = 10) : IWeatherData[] => {
  const result = [];
  let averageValue = 0;
  let previousIndex = 0;

  const partLength = Math.ceil(dataSet.length / count);

  forEach(dataSet, (item, i) => {
    if ((i + 1) % partLength === 0) {
      result.push({
        t: dataSet[Math.floor((i + previousIndex) / 2)].t,
        v: round(averageValue / (i - previousIndex), 2)
      });
      averageValue = 0;
      previousIndex = i;
    } else {
      averageValue += item.v;
    }
  });

  return result;
}
