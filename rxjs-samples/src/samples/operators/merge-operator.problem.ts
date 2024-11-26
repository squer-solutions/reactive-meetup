import { interval, map, Subject, take } from "rxjs";
import { logger } from "../../logger/pretty-logger";

export function testMerge() {
    const names1 = ["alice", "bob", "gerald", "hans", "michael"];
    const namesStream1$ = interval(3000).pipe(take(names1.length), map(idx => names1[idx]));

    const names2 = ["caesar", "dylan", "emil", "frank", "john"];
    const namesStream2$ = interval(2500).pipe(take(names2.length), map(idx => names2[idx]));

    const namesCombined$ = new Subject<string>();

    namesStream1$.subscribe(res => namesCombined$.next(res));
    namesStream2$.subscribe(res => namesCombined$.next(res));

    namesCombined$.subscribe(res => logger.log(res, 'blue'));
}