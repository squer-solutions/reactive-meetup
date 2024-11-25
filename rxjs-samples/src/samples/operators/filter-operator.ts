import { from, filter } from 'rxjs';
import moment from 'moment';

class User {
  name: string;
  lastLoginDate: moment.Moment;
  hasPremium: boolean;
  constructor(name: string, lastLoginDate: moment.Moment, isActive: boolean) {
    this.name = name;
    this.lastLoginDate = lastLoginDate;
    this.hasPremium = isActive;
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
      filter(user => user.hasPremium && user.lastLoginDate.isAfter(moment().subtract(6, 'months')))
    )
    .subscribe(res => console.log(res));
}
