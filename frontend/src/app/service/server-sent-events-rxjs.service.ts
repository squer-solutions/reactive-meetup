import { Injectable, NgZone } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerSentEventsRxjsService {

  constructor(private zone: NgZone) {
  }

  getServerSentEvents<T>(url: string): Observable<T> {
    return new Observable((observer: Subscriber<T>) => {
      const eventSource = new EventSource(url);

      eventSource.onmessage = (event) => {
        this.zone.run(() => {
          observer.next(JSON.parse(event.data) as T);
        });
      };

      eventSource.onerror = (error) => {
        this.zone.run(() => {
          observer.error(error);
        });
        eventSource.close();
      };

      return () => eventSource.close(); // Cleanup when unsubscribing
    });
  }
}
