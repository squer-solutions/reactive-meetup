import {Component, OnInit} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {AppEventManagerService} from '../../core/service/app-event-manager.service';
import {debounceTime} from 'rxjs';


@Component({
  selector: 'app-log-search',
  standalone: true,
  imports: [
    ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatDatepickerModule, MatButtonModule, MatIconModule
  ],
  templateUrl: './log-search.component.html',
  styleUrl: './log-search.component.css'
})
export class LogSearchComponent implements OnInit {
  searchControl = new FormControl<string>('');

  constructor(private readonly eventService: AppEventManagerService) {
  }

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe(val => this.eventService.streamLogs$.next(val as string))
  }

  search() {
    this.eventService.streamLogs$.next(this.searchControl.value as string);
  }

  stop() {
    this.eventService.stopStream$.next();
  }

}
