import { interval, map, merge, take } from "rxjs";
import { logger } from "../../logger/pretty-logger";

export function testMerge() {
    const names1 = ["alice", "bob", "gerald", "hans", "michael"];
    const namesStream1$ = interval(3000).pipe(take(5), map(idx => names1[idx]));

    const names2 = ["caesar", "dylan", "emil", "frank", "john"];
    const namesStream2$ = interval(2500).pipe(take(5), map(idx => names2[idx]));

    merge([namesStream1$, namesStream2$]).subscribe(res => logger.log(res, 'blue'));
}