import { map, Subject} from 'rxjs';

export function basicReactive() {
  const number$ = new Subject<number>();

  number$.pipe(
      map(num => num * num)
  ).subscribe(
      result => console.log(result)
  );

  number$.next(2);
  number$.next(4);
  number$.next(5);
}
