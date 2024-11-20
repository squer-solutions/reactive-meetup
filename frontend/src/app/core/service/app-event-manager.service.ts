import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppEventManagerService {
  streamLogs$ = new Subject<string>();
  stopStream$ = new Subject<void>();

  constructor() {
  }
}
