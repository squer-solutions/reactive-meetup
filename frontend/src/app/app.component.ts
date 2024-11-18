import { Component, NgZone } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, scan, Subscriber, tap } from 'rxjs';
import { AsyncPipe, DatePipe, NgForOf } from '@angular/common';

type LogEntry = {
  level: string;
  timestamp: string;
  message: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, NgForOf, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactive-angular';

  logs: Observable<LogEntry[]>

  constructor(private httpClient: HttpClient, private zone: NgZone) {
    this.logs = this.connectToServerSentEvents<LogEntry>('http://localhost:8090').pipe(
      scan((acc, curr) => [...acc, curr], [] as LogEntry[]),
      tap(_ => window.scrollTo(0, document.body.scrollHeight + 1))
    );
  }

  getEventSource(url: string, options?: EventSourceInit): EventSource {
    return new EventSource(url, options);
  }

  /**
   * Method for establishing connection and subscribing to events from SSE
   * @param url - SSE server api path
   * @param options - configuration object for SSE
   * @param eventNames - all event names except error (listens by default) you want to listen to
   */
  connectToServerSentEvents<T>(url: string, options?: EventSourceInit): Observable<T> {
    const eventSource = this.getEventSource(url, options);

    return new Observable((subscriber: Subscriber<T>) => {
      eventSource.onerror = error => {
        this.zone.run(() => subscriber.error(error));
      };

      eventSource.addEventListener("message", data => {
        const parsed = JSON.parse(data.data) as T;
        this.zone.run(() => subscriber.next(parsed));
      });
    });
  }
}
