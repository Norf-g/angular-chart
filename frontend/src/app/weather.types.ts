export interface IWeatherData {
  t: string,
  v: number
}

export enum sourceTypes {
  temperature = 'temperature',
  precipitation = 'precipitation'
}
