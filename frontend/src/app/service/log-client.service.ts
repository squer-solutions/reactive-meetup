import { Injectable } from '@angular/core';
import { Observable, scan } from 'rxjs';
import { LogEntry } from '../model/log-entry.model';
import { SseClient } from './sse.client';

@Injectable({
  providedIn: 'root'
})
export class LogClientService {

  private readonly LOG_STREAM_BASE_URL = 'http://localhost:8090/';

  constructor(private readonly sseClient: SseClient) {
  }

  getLogStream(searchText: string): Observable<LogEntry[]> {
    const url = this.addSearchParams(this.LOG_STREAM_BASE_URL, searchText);

    return this.sseClient.get<LogEntry>(url).pipe(
        scan((acc, curr) => [curr, ...acc], [] as LogEntry[])
    );
  }

  private addSearchParams(url: string, searchText: string): string {
    const searchParams = new URLSearchParams({
        message: searchText.trim()
    });
    const uri = new URL(url);
    uri.search = searchParams.toString();

    return uri.toString();
  }
}
