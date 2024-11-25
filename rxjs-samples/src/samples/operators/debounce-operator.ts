import { debounceTime, delay, from} from "rxjs";
import {logger} from "../../logger/pretty-logger";

export function testDebounce() {
    const userInput = ["h","he","hel", "hell", "hello"];
    const userInput$ = from(userInput).pipe(delay(300))

    userInput$.pipe(
        debounceTime(500)
    ).subscribe(val => {
        logger.log(val, "green");
    })
}