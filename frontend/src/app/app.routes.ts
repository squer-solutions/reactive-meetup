import {Routes} from '@angular/router';
import {ReactiveUpdate} from './_1samples/reactive-update';
import {LogFeedComponent} from './log-feed/log-feed.component';
import {ReactiveApiCall} from './_1samples/reactive-api-call';
import {LogFeedDemoComponent} from './log-feed-demo/log-feed-demo.component';

export const routes: Routes = [
  {path: '', component: LogFeedComponent, pathMatch: 'full'},
  {path: 'demo', component: LogFeedDemoComponent, pathMatch: 'full'},
  {path: 'reactive-update', component: ReactiveUpdate, pathMatch: 'full'},
  {path: 'reactive-api-call', component: ReactiveApiCall, pathMatch: 'full'},
];
