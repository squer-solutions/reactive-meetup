import {Component, OnInit} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  interval,
  map,
  Observable,
  of,
  scan,
  startWith,
  switchMap,
  take
} from 'rxjs';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'reactive-api-call',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgStyle,
  ],
  template: `
    <div [ngStyle]="{padding: '2rem'}">
      <form>
        <input [formControl]="searchFormControl" type="text"/>
      </form>
      @for (logEntry of logs; track logEntry) {
        <p>{{ logEntry }}</p>
      }
    </div>
  `
})
export class LiveSearchDemoComponent implements OnInit{

  searchFormControl = new FormControl<string>('', {nonNullable: true});
  logs: string[] = [];

  ngOnInit() {

  }

  streamLogs(value: string): Observable<string> {
    return interval(2000).pipe(
      map((num) => `Log entry from API for ${value}: ${num}`),
    );
  }
}
