import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogEntry } from '../model/log-entry.model';

@Injectable({
  providedIn: 'root'
})
export class LogClientService {

  private readonly LOG_STREAM_BASE_URL = 'http://localhost:8090/';

  constructor() {
  }

  getLogStream(searchText: string): Observable<LogEntry[]> {
    throw new Error('Not implemented');
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
