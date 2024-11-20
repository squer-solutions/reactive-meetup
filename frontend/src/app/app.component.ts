import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LogSearchComponent} from './feature/log-search/log-search.component';
import {LogTableComponent} from './feature/log-table/log-table.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HeaderComponent} from './feature/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LogSearchComponent, LogTableComponent, MatToolbarModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
