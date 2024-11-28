import { Routes } from '@angular/router';
import { ReactiveUpdateComponent } from './_1samples/reactive-update.component';
import { LogFeedComponent } from './log-feed/log-feed.component';
import { ReactiveApiCallComponent } from './_1samples/reactive-api-call.component';
import {LiveSearchComponent} from './_1samples/live-search.component';
import {LiveSearchDemoComponent} from './_1samples/live-search-demo.component';

export const routes: Routes = [
  {path: '', component: LogFeedComponent, pathMatch: 'full'},
  {path: 'reactive-update', component: ReactiveUpdateComponent, pathMatch: 'full'},
  {path: 'reactive-api-call', component: ReactiveApiCallComponent, pathMatch: 'full'},
  {path: 'live-search', component: LiveSearchComponent, pathMatch: 'full'},
  {path: 'live-search-demo', component: LiveSearchDemoComponent, pathMatch: 'full'},
];
