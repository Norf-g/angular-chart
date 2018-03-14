export interface IWeatherData {
  t: string;
  v: number;
}

export enum sourceTypes {
  temperature = 'temperature',
  precipitation = 'precipitation'
}

export interface IDatePeriod {
  dateFrom: number;
  dateTo: number;
}
