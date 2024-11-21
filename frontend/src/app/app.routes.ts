import {Routes} from '@angular/router';
import {ReactiveUpdate} from './samples/reactive-update';
import {LogFeedComponent} from './log-feed/log-feed.component';
import {ReactiveApiCall} from './samples/reactive-api-call';

export const routes: Routes = [
  {path: '', component: LogFeedComponent, pathMatch: 'full'},
  {path: 'reactive-update', component: ReactiveUpdate, pathMatch: 'full'},
  {path: 'reactive-api-call', component: ReactiveApiCall, pathMatch: 'full'},
];
