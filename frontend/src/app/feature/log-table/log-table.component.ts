import {Component, OnDestroy, OnInit} from '@angular/core';
import {repeat, Subscription, switchMap, takeUntil, tap} from 'rxjs';
import {LogEntry} from '../../core/model/log-entry.model';
import {LogClientService} from '../../core/service/log-client.service';
import {DatePipe} from '@angular/common';
import {AppEventManagerService} from '../../core/service/app-event-manager.service';


@Component({
  selector: 'app-log-table',
  standalone: true,
  imports: [
    DatePipe,
  ],
  templateUrl: './log-table.component.html',
  styleUrl: './log-table.component.css'
})
export class LogTableComponent implements OnInit, OnDestroy {
  private readonly subs = new Subscription();
  logs: LogEntry[] = [];

  constructor(private readonly logService: LogClientService, private readonly eventService: AppEventManagerService) {
  }

  ngOnInit() {
    this.eventService.streamLogs$.pipe(
      tap(() => this.logs = []),
      switchMap(search => this.logService.streamLogs(search)),
      takeUntil(this.eventService.stopStream$),
      repeat(),
    ).subscribe(logEntry => {
      this.logs.unshift(logEntry);
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
