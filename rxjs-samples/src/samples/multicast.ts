import { interval, share, take } from 'rxjs';
import { logger } from '../logger/pretty-logger';

export function testMulticast() {
  const unicast = interval(1000).pipe(take(10));
  const multicast = unicast.pipe(share());

  multicast.subscribe(value => logger.log(value * 10, 'yellow'));

  setTimeout(() => {
    multicast.subscribe(value => logger.log(value * 100, 'blue'));
  }, 4000);
}