import {Injectable} from '@angular/core';
import {Observable, scan} from 'rxjs';
import {LogEntry} from '../model/log-entry.model';
import {ServerSentEventsRxjsService} from './server-sent-events-rxjs.service';

export interface LogSearchParams {
  status?: string;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LogClientService {

  private readonly LOG_BACKEND_SERVICE_URL = 'http://localhost:8090/';

  constructor(private readonly sseRxjsService: ServerSentEventsRxjsService) {
  }

  streamLogs(searchParams: LogSearchParams): Observable<LogEntry[]> {
    const url = this.addSearchParams(this.LOG_BACKEND_SERVICE_URL, searchParams);
    
    return this.sseRxjsService.getServerSentEvents<LogEntry>(url).pipe(
      scan((acc, curr) => [curr, ...acc], [] as LogEntry[])
    );
  }

  private addSearchParams(url: string, searchParams: LogSearchParams): string {
    if (searchParams?.status || searchParams?.message) {
      url += '?';
    }
    if (searchParams.status) {
      url += `status=${searchParams.status}&`;
    }
    if (searchParams.message) {
      url += `message=${searchParams.message}`;
    }
    return url;
  }
}
