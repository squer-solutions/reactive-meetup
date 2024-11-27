import { map, Subject} from 'rxjs';

export function testBasicReactive() {
  const number$ = new Subject<number>();

  number$.pipe(
      map(num => num * num)
  ).subscribe(
      result => console.log(result)
  );
}