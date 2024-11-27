import { interval, take } from 'rxjs';
import { logger } from '../logger/pretty-logger';

export function testUnicast() {
  const unicast = interval(1000).pipe(take(10));

  unicast.subscribe(value => logger.log(value * 10, 'yellow'));

  setTimeout(() => {
    logger.log('Subscribing again...', 'blue');
    unicast.subscribe(value => logger.log(value * 100, 'blue'));
  }, 4000);
}


