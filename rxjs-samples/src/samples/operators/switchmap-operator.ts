import { interval, map, switchMap, take } from "rxjs";

export function testSwitchMap() {
    const names = ["alice", "bob", "gerald", "hans", "michael"];
    const namesStream$ = interval(3000).pipe(take(5), map(idx => names[idx]));

    namesStream$.pipe(
        switchMap(name => {
            console.log("starting inner stream for " + name);
            return interval(1000).pipe(take(5), map(val => name + val))
        })
    ).subscribe(res => console.log(res));
}