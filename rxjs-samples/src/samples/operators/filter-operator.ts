import { from, filter } from 'rxjs';
import moment from 'moment';

class User {
  name: string;
  lastLoginDate: moment.Moment;
  hasActiveSubscription: boolean;
  constructor(name: string, lastLoginDate: moment.Moment, isActive: boolean) {
    this.name = name;
    this.lastLoginDate = lastLoginDate;
    this.hasActiveSubscription = isActive;
  }
}

export function testFilterOperator() {
  const users$ = from([
    new User('alice', moment(), true),
    new User('bob', moment(), false),
    new User('gerald', moment().subtract(7, 'months'), true),
  ]);

  users$
    .pipe(
        //todo: change subscription to premium
      filter(user => user.hasActiveSubscription && user.lastLoginDate.isAfter(moment().subtract(6, 'months')))
    )
    .subscribe(res => console.log(res));
}
