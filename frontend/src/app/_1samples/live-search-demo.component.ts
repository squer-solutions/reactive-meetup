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

@Component({
  selector: 'reactive-api-call',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  template: `
    <form>
      <input [formControl]="searchFormControl" type="text"/>
    </form>
    @for (logEntry of logs; track logEntry) {
      <p>{{ logEntry }}</p>
    }
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
