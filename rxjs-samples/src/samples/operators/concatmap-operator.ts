import { concatMap, interval, map, take } from "rxjs";
import { logger } from "../../logger/pretty-logger";

export function testConcatMap() {
    const names = ["alice", "bob", "gerald", "hans", "michael"];
    const namesStream$ = interval(3000).pipe(
        take(names.length),
        map(idx => names[idx])
    );

    namesStream$.pipe(
        concatMap(name => {
            logger.log(`starting inner stream for ${name}`, 'yellow');
            return interval(1000).pipe(
                take(5),
                map(val => name + val)
            )
        })
    ).subscribe(res => logger.log(res, 'blue'));
}