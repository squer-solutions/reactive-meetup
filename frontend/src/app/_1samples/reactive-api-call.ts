import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, Observable, of, switchMap } from 'rxjs';
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
      <input [formControl]="formControl" id="input"/>
      {{ response$ | async }}
    </form>
  `
})
export class ReactiveApiCall {

  public formControl = new FormControl<string>('', {nonNullable: true});

  response$: Observable<string>;

  constructor() {
    this.response$ = this.formControl.valueChanges.pipe(
      map(value => value.trim()),
      map(value => value.toUpperCase()),
      debounceTime(600),
      distinctUntilChanged(),
      switchMap((val) => this.callApi(val))
    );
  }

  callApi(value: string): Observable<string> {
    return of("Response from API")
  }

}
