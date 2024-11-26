import {delay, of} from "rxjs";
import {logger} from "../../logger/pretty-logger";

export function testConcatProblem() {
    performTask(1).subscribe((val) => {
        logger.log(val, 'yellow');
        performTask(2).subscribe((val) => {
            logger.log(val, 'yellow');
            performTask(3).subscribe((val) => {
                logger.log(val, 'yellow');
                console.log('All tasks executed');
            });
        });
    });
}

function performTask(taskNumber: number) {
    return of(`Task ${taskNumber} executed`).pipe(delay(1000));
}