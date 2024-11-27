import {interval, map, of, take, zip} from "rxjs";

export function testZip() {
    const namesList = ['Bobby', 'Leslie', 'Ben', 'April'];

    // Simulate the source observables

    let name$ = interval(1000).pipe(
        take(namesList.length),
        map(idx => namesList[idx])
    );

    let age$ = interval(1500).pipe(
        take(namesList.length),
        map(idx => idx + 25)
    );

    let hasPremium$ = interval(2000).pipe(
        take(namesList.length),
        map(idx => idx % 2 === 0)
    );

    zip(age$, name$, hasPremium$)
        .pipe(
            map(([age, name, hasPremium]) => {
                return {age, name, hasPremium};
            })
        )
        .subscribe(
            result => console.log(result)
        );
}