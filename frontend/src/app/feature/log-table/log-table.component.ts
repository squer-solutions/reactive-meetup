import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, repeat, Subscription, switchMap, takeUntil} from 'rxjs';
import {LogEntry} from '../../core/model/log-entry.model';
import {LogClientService} from '../../core/service/log-client.service';
import {AsyncPipe, DatePipe} from '@angular/common';
import {AppEventManagerService} from '../../core/service/app-event-manager.service';


@Component({
  selector: 'app-log-table',
  standalone: true,
  imports: [
    DatePipe,
    AsyncPipe
  ],
  templateUrl: './log-table.component.html',
  styleUrl: './log-table.component.css'
})
export class LogTableComponent implements OnInit, OnDestroy {
  private readonly subs = new Subscription();
  logs$!: Observable<LogEntry[]>;

  constructor(private readonly logService: LogClientService, private readonly eventService: AppEventManagerService) {
  }

  ngOnInit() {
    this.logs$ = this.eventService.streamLogs$.pipe(
      switchMap(search => this.logService.streamLogs(search)),
      takeUntil(this.eventService.stopStream$),
      repeat(),
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
