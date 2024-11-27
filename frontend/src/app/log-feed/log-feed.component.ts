import { Component, OnInit } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { LogEntry } from '../model/log-entry.model';
import { LogClientService } from '../service/log-client.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

  logs$!: Observable<LogEntry[]>;

  constructor(private readonly logService: LogClientService) {
  }

  ngOnInit() {}

}
