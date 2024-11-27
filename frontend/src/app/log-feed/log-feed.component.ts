import { Component, OnInit } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { debounceTime, distinctUntilChanged, Observable, startWith, switchMap } from 'rxjs';
import { LogEntry } from '../model/log-entry.model';
import { LogClientService } from '../service/log-client.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-log-feed',
  standalone: true,
  imports: [
    AsyncPipe,
    DatePipe,
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule
  ],
  templateUrl: './log-feed.component.html',
  styleUrl: './log-feed.component.css'
})
export class LogFeedComponent implements OnInit {

  searchControl = new FormControl<string>('', {nonNullable: true});
  logs$!: Observable<LogEntry[]>;

  constructor(private readonly logService: LogClientService) {
  }

  ngOnInit() {
    this.logs$ = this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(search => this.logService.getLogStream(search)),
    )
  }

}
