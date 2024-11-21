import {Injectable} from '@angular/core';
import {Observable, scan} from 'rxjs';
import {LogEntry} from '../model/log-entry.model';
import {ServerSentEventsRxjsService} from './server-sent-events-rxjs.service';

@Injectable({
  providedIn: 'root'
})
export class LogClientService {

  private readonly LOG_BACKEND_SERVICE_URL = 'http://localhost:8090/';

  constructor(private readonly sseRxjsService: ServerSentEventsRxjsService) {
  }

  streamLogs(searchText: string): Observable<LogEntry[]> {
    const url = this.addSearchParams(this.LOG_BACKEND_SERVICE_URL, searchText);
    return this.sseRxjsService.getServerSentEvents<LogEntry>(url).pipe(scan((acc, curr) => [curr, ...acc], [] as LogEntry[]));
  }

  private addSearchParams(url: string, searchText: string): string {
    if (searchText.trim()) {
      url += `?message=${searchText.trim()}`;
    }
    return url;
  }
}
