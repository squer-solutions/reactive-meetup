import { BehaviorSubject } from 'rxjs';

export function basicReactive() {
  const number$ = new BehaviorSubject(2);

  number$.subscribe(num => {
    console.log(num * num);
  });

  number$.next(5);
  number$.next(8);
}
