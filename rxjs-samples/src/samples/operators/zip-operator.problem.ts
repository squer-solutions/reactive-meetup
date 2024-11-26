import {interval, map, take} from 'rxjs';

export function testZipProblem() {
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

    // Manual arrays to collect emitted values
    let lastEmittedAges: number[] = [];
    let lastEmittedNames: string[] = [];
    let lastEmittedPremiums: boolean[] = [];

    // Function to check if all data streams have emitted values
    const canEmitCombinedValue = () =>
        lastEmittedAges.length
            && lastEmittedNames.length
            && lastEmittedPremiums.length;

// Function to combine and emit values manually
    const emitCombinedValue = () => {
        if (canEmitCombinedValue()) {
            const combined = {
                age: lastEmittedAges.shift(),
                name: lastEmittedNames.shift(),
                hasPremium: lastEmittedPremiums.shift(),
            };
            console.log(combined);
        }
    };

// Subscribe to each observable and push values into arrays
    age$.subscribe(age => {
        lastEmittedAges.push(age);
        emitCombinedValue(); // Attempt to combine whenever a value is emitted
    });

    name$.subscribe(name => {
        lastEmittedNames.push(name);
        emitCombinedValue();
    });

    hasPremium$.subscribe(hasPremium => {
        lastEmittedPremiums.push(hasPremium);
        emitCombinedValue();
    });
}


