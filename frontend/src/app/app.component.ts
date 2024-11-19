import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LogSearchComponent} from './feature/log-search/log-search.component';
import {LogTableComponent} from './feature/log-table/log-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LogSearchComponent, LogTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
