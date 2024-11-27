import { interval, map, Subject, take } from "rxjs";
import { logger } from "../../logger/pretty-logger";

export function testMergeMapProblem() {
    const names = ["alice", "bob", "gerald", "hans", "michael"];
    const namesStream$ = interval(3000).pipe(
        take(5),
        map(idx => names[idx])
    );

    const a = new Subject();

    namesStream$.subscribe(name => {
        logger.log(`starting inner stream for ${name}`, 'yellow');
        interval(1000).pipe(
            take(5),
            map(val => name + val)
        ).subscribe(res => a.next(res));
    })

    a.subscribe(res => logger.log(res, 'blue'));
}