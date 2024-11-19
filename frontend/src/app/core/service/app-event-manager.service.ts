import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {LogSearchParams} from './log-client.service';

@Injectable({
  providedIn: 'root'
})
export class AppEventManagerService {
  streamLogs$ = new Subject<LogSearchParams>();
  stopStream$ = new Subject<void>();

  constructor() {
  }
}
