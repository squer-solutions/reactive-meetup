import { Subject } from 'rxjs';

export function testCombineLatestProblem(){
    // Filter Fields
    const categoryFilter$ = new Subject<string>();
    const priceFilter$ = new Subject<string>();
    const ratingFilter$ = new Subject<string>();

    // Variables to track the latest values of the filter fields
    const currentFilters = {
        category: '',
        price: '',
        rating: '',
    }

    // Subscribe to filter fields
    categoryFilter$.subscribe(category => {
        currentFilters.category = category;
        updateSearchResults(currentFilters);
    });

    priceFilter$.subscribe(price => {
        currentFilters.price = price;
        updateSearchResults(currentFilters);
    });

    ratingFilter$.subscribe(rating => {
        currentFilters.rating = rating;
        updateSearchResults(currentFilters);
    });

    categoryFilter$.next('Electronics');
    priceFilter$.next('$100-$500');
    ratingFilter$.next('4+ stars');
    priceFilter$.next('$200-$600');
}

// Function to update search results
function updateSearchResults(currentFilters: Object) {
    console.log('Fetching search results with:', currentFilters);
}
