import {interval, map, Subscription, take} from "rxjs";
import { logger } from "../../logger/pretty-logger";

export function testSwitchMapProblem() {
    const names = ["alice", "bob", "gerald", "hans", "michael"];
    const namesStream$ = interval(3000).pipe(
        take(names.length),
        map(idx => names[idx])
    );

    let currentInnerSubscription: Subscription | null = null;

    namesStream$.subscribe(name => {
        logger.log(`starting inner stream for ${name}`, 'yellow');

        // Cancel the previous inner subscription if it exists
        if (currentInnerSubscription) {
            currentInnerSubscription.unsubscribe();
        }

        // Start a new inner stream
        currentInnerSubscription = interval(1000).pipe(
            take(5),
            map(num => name + num)
        ).subscribe(res => logger.log(res, 'blue'));
    });
}
