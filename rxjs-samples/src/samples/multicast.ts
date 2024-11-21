import { interval, share, take } from 'rxjs';

export function testMulticast() {
  const unicast = interval(1000).pipe(take(10));
  const multicast = unicast.pipe(share());

  multicast.subscribe(value => console.log(value * 10));

  setTimeout(() => {
    multicast.subscribe(value => console.log(value * 100));
  }, 4000);
}