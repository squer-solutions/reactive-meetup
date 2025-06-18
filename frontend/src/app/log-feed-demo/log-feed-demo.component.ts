import {Component, OnDestroy, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {LogClientService} from '../service/log-client.service';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {LogEntry} from '../model/log-entry.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-log-feed-demo',
  standalone: true,
  imports: [
    DatePipe,
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule
  ],
  templateUrl: './log-feed-demo.component.html',
  styleUrl: './log-feed-demo.component.css'
})
export class LogFeedDemoComponent implements OnInit, OnDestroy {
  readonly #subs = new Subscription();
  searchControl = new FormControl<string>('', {nonNullable: true});
  logs: LogEntry[] = [];

  constructor(private readonly logService: LogClientService) {
  }

  ngOnInit() {
    // add the outer subscription to subscriptions - for clean-up on destroy
    const outerSub = this.searchControl.valueChanges.subscribe(userInput => {
      const innerSub = this.logService.getLogStreamLocal(userInput)
        .subscribe(logs => this.logs = logs);
      // add the inner subscription to subscriptions - for clean-up on destroy
      this.#subs.add(innerSub);
    })
    this.#subs.add(outerSub);
  }

  ngOnDestroy() {
    this.#subs.unsubscribe();
  }
}
