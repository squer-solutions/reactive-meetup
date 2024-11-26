import { map, from } from 'rxjs';

class User {
  name: string;
  email: string;
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

export function testMapOperator() {
  const users$ = from([
    new User('alice ', 'ALICE@Example.com'),
    new User('  bob   ', 'BOB@TEsT.cOm  '),
  ]);

  users$
    .pipe(
      map(user => new User(
          user.name.trim(),
          user.email.trim().toLowerCase()
      )))
    .subscribe(res => console.log(res));
}
