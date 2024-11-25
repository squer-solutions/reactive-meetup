import { BehaviorSubject } from 'rxjs';
import { logger } from '../logger/pretty-logger';

export function basicReactive() {
  const number$ = new BehaviorSubject(2);

  number$.subscribe(num => {
    logger.log(num * num);
  });
}
