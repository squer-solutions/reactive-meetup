import {interval } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';
import { logger } from '../../logger/pretty-logger';

interface SensorData {
    area: string;
    airQualityIndex: number;
}

const sensors: SensorData[] = [
    { area: "Innere Stadt", airQualityIndex: 45 },
    { area: "Leopoldstadt", airQualityIndex: 72 },
    { area: "Landstraße", airQualityIndex: 65 },
    { area: "Favoriten", airQualityIndex: 38 },
    { area: "Simmering", airQualityIndex: 88 },
    { area: "Ottakring", airQualityIndex: 50 },
    { area: "Hietzing", airQualityIndex: 30 },
    { area: "Döbling", airQualityIndex: 55 },
    { area: "Brigittenau", airQualityIndex: 63 },
    { area: "Floridsdorf", airQualityIndex: 80 }
];

const aqiSensorData$ = interval(1000).pipe(take(10), map(idx => sensors[idx]));

const RISKY_AQI_THRESHOLD = 50;

export function testMapAndFilter() {
    aqiSensorData$.pipe(
        filter(data => data.airQualityIndex >= RISKY_AQI_THRESHOLD),
        map(data => `ALERT: Sensor at area [${data.area}] reporting high Air Quality Index: ${data.airQualityIndex}`)
      ).subscribe(alert => {
          // send to alerting system
        logger.log(alert); 
      });
}

