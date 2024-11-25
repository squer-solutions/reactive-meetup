import { interval, map, mergeMap, take } from "rxjs";
import { logger } from "../../logger/pretty-logger";

export function testMergeMap() {
    const names = ["alice", "bob", "gerald", "hans", "michael"];
    const namesStream$ = interval(3000).pipe(take(5), map(idx => names[idx]));

    namesStream$.pipe(
        mergeMap(name => {
            logger.log(`starting inner stream for ${name}`, 'yellow');
            return interval(1000).pipe(take(5), map(val => name + val))
        })
    ).subscribe(res => logger.log(res, 'blue'));
}