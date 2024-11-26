import {interval, map, of, take, zip} from "rxjs";

export function testZip() {
    const namesList = ['Bobby', 'Leslie', 'Ben', 'April', 'Andy', 'Tom', 'Donna', 'Jerry', 'Chris', 'Ann'];

    // Simulate the source observables
    let age$ = interval(1000).pipe(
        take(namesList.length),
        map(idx => idx + 25)
    );

    let name$ = interval(2000).pipe(
        take(namesList.length),
        map(idx => namesList[idx])
    );

    let hasPremium$ = interval(3000).pipe(
        take(namesList.length),
        map(idx => idx % 2 === 0)
    );

    zip(age$, name$, hasPremium$)
        .pipe(
            map(([age, name, hasPremium]) => ({age, name, hasPremium}))
        )
        .subscribe(result => console.log(result));
}