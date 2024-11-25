import { Subject } from "rxjs";
import { logger } from "../../logger/pretty-logger";

export function testSubject() {
    const numbers$ = new Subject();

    numbers$.next(1);

    numbers$.subscribe(num => logger.log(num, "yellow"));

    numbers$.next(2);
    numbers$.next(3);

    numbers$.subscribe(num => logger.log(num, "blue"));

    numbers$.next(4);
    numbers$.next(5);
}