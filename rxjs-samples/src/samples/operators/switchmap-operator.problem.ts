import {interval, map, Subscription, take} from "rxjs";
import { logger } from "../../logger/pretty-logger";

export function testSwitchMapProblem() {
    const userInput = ["S", "SQ", "SQU", "SQUE", "SQUER"];
    const userInputStream$ = interval(3000).pipe(
        take(userInput.length),
        map(idx => userInput[idx])
    );

    let currentInnerSubscription: Subscription | null = null;

    userInputStream$.subscribe(userInput => {
        logger.log(`starting inner stream for user input ${userInput}`, 'yellow');

        // Cancel the previous inner subscription if it exists
        if (currentInnerSubscription) {
            currentInnerSubscription.unsubscribe();
        }

        // Start a new inner stream
        currentInnerSubscription = interval(1000).pipe(
            take(5),
        ).subscribe(res => logger.log(res, 'blue'));
    });
}
