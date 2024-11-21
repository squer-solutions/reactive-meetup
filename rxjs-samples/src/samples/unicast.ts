import { interval, take } from 'rxjs';

export function testUnicast() {
  const unicast = interval(1000).pipe(take(10));

  unicast.subscribe(value => console.log(value * 10));

  setTimeout(() => {
    unicast.subscribe(value => console.log(value * 100));
  }, 4000);
}


