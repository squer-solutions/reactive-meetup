import {Component} from '@angular/core';
import {LogSearchComponent} from '../feature/log-search/log-search.component';
import {LogTableComponent} from '../feature/log-table/log-table.component';

@Component({
  selector: 'app-log-feed',
  standalone: true,
  imports: [
    LogSearchComponent,
    LogTableComponent
  ],
  templateUrl: './log-feed.component.html',
})
export class LogFeedComponent {
}
