import {concat, delay, of} from "rxjs";
import {logger} from "../../logger/pretty-logger";

export function testConcat() {
    concat(
        performTask(1),
        performTask(2),
        performTask(3)
    ).subscribe({
        next: val => logger.log(val, 'yellow'),
        error: err => logger.log(err, 'red'),
        complete: () => logger.log('All tasks executed', 'green')
    })
}

function performTask(taskNumber: number) {
    return of(`Task ${taskNumber} executed`).pipe(delay(1000));
}