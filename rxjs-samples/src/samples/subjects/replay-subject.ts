import {ReplaySubject } from "rxjs";
import { logger } from "../../logger/pretty-logger";

export function testReplaySubject() {
    const numbers$ = new ReplaySubject(3);

    numbers$.next(1);

    numbers$.subscribe(num => logger.log(num, "yellow"));

    numbers$.next(2);
    numbers$.next(3);

    numbers$.subscribe(num => logger.log(num, "blue"));

    numbers$.next(4);
    numbers$.next(5);
}