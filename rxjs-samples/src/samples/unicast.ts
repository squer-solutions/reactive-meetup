import { interval, take } from 'rxjs';
import { logger } from '../logger/pretty-logger';

export function testUnicast() {
  const unicast = interval(1000).pipe(take(10));

  // This subscriber is going to log out YELLOW messages
  unicast.subscribe(value => logger.log(value * 10, 'yellow'));

  setTimeout(() => {
    logger.log('Subscribing again...', 'blue');
    // This subscriber is going to log out BLUE messages
    unicast.subscribe(value => logger.log(value * 100, 'blue'));
  }, 4000);
}


