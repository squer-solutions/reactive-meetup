import { interval, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { logger } from '../../logger/pretty-logger';

interface SensorData {
    area: string;
    airQualityIndex: number;
}

const sensors: SensorData[] = [
    { area: "Innere Stadt", airQualityIndex: 25 },
    { area: "Leopoldstadt", airQualityIndex: 72 },
    { area: "Landstraße", airQualityIndex: 65 },
    { area: "Favoriten", airQualityIndex: 38 },
    { area: "Simmering", airQualityIndex: 15 },
];

const aqiSensorData$ = interval(1000).pipe(
    take(sensors.length),
    map(idx => sensors[idx])
);

const RISKY_AQI_THRESHOLD = 50;

export function testMapAndFilter() {
    const filteredData$ = new Subject<SensorData>();

    aqiSensorData$.subscribe(data => {
        if (data.airQualityIndex >= RISKY_AQI_THRESHOLD) {
            filteredData$.next(data);
        }
    });

    const alert$ = new Subject<string>();

    filteredData$.subscribe(data => {
        alert$.next(`ALERT: Sensor at area [${data.area}] reporting high Air Quality Index: ${data.airQualityIndex}`);
    });

    alert$.subscribe(alert => {
        logger.log(alert);
    });
}

