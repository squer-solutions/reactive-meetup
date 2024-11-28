import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, map, Observable } from 'rxjs';
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
export class ReactiveUpdateComponent {

  public formControl = new FormControl<string>('', {nonNullable: true});

  title$: Observable<string>;

  constructor() {
    this.title$ = this.formControl.valueChanges.pipe(
      map(value => value.trim()),
      map(value => value.toUpperCase()),
      debounceTime(600),
    );
  }
}
