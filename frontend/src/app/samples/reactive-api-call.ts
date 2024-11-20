import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, Observable, of, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'reactive-update',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe
  ],
  template: `
    <form>
      <input [formControl]="formControl" id="input"/>
      {{ title$ | async }}
    </form>
  `
})
export class ReactiveUpdate {

  public formControl = new FormControl<string>('', {nonNullable: true});

  response$: Observable<object>;

  constructor() {
    this.response$ = this.formControl.valueChanges.pipe(
      map(value => value.trim()),
      map(value => value.toUpperCase()),
      debounceTime(600),
      distinctUntilChanged(),
      switchMap(this.callApi)
    );
  }

  callApi(value: string): Observable<object> {
    return of({})
  }

}
