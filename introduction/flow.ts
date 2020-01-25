import { fromEvent } from 'rxjs';
import { throttleTime, scan } from 'rxjs/operators';

// Allow at most 1 click per second in vanilla JS.
let count = 0;
let rate = 1000;
let lastClick = Date.now() - rate;
document.addEventListener('click', () => {
    if (Date.now() - lastClick >= rate) {
        console.log(`Clicked ${++count} times`);
        lastClick = Date.now();
    }
});

// Using 'throttleTime' operator.
// Other flow operators include: filter, delay, debounceTime, take, takeUntil, distinct, distinctUntilChanged
fromEvent(document, 'click')
    .pipe(
        throttleTime(1000),
        scan(count => count + 1, 0)
    ).subscribe(count => console.log(`Clicked ${count} times`));