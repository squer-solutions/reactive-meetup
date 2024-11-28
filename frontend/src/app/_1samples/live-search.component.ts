import { Component } from '@angular/core';
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
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'reactive-api-call',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe
  ],
  template: `
    <form>
      <input [formControl]="searchFormControl" type="text"/>
      @for (logEntry of logs$ | async; track logEntry) {
        <p>{{ logEntry }}</p>
      }
    </form>
  `
})
export class LiveSearchComponent {

  public searchFormControl = new FormControl<string>('', {nonNullable: true});

  logs$: Observable<string[]>;

  constructor() {
    this.logs$ = this.searchFormControl.valueChanges.pipe(
      startWith(''),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((val) => this.searchForLogs(val))
    );
  }

  searchForLogs(value: string): Observable<string[]> {
    return interval(1000).pipe(
      map((num) => `Log entry from API for ${value}: ${num}`),
      scan((acc, curr) => [curr, ...acc], <string[]>[])
    );
  }
}
