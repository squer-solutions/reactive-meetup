import {combineLatest, startWith, Subject} from 'rxjs';

export function testCombineLatest(){
    // Filter Fields
    const categoryFilter$ = new Subject<string>();
    const priceFilter$ = new Subject<string>();
    const ratingFilter$ = new Subject<string>();

    combineLatest({
        category: categoryFilter$.pipe(startWith("")),
        price: priceFilter$.pipe(startWith("")),
        rating: ratingFilter$.pipe(startWith(""))
    }).subscribe(filters => {
        updateSearchResults(filters);
    })

    categoryFilter$.next('Electronics');
    priceFilter$.next('$100-$500');
    ratingFilter$.next('4+ stars');
    priceFilter$.next('$200-$600');
}

// Function to update search results
function updateSearchResults(currentFilters: Object) {
    console.log('Fetching search results with:', currentFilters);
}
