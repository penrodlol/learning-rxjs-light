import { fromEvent } from 'rxjs';
import { throttleTime, map, scan } from 'rxjs/operators';

// Add current mouse position for every click with Vanilla JS.
let count = 0;
const rate = 10000;
let lastClick = Date.now() - rate;
document.addEventListener('click', event => {
    if (Date.now() - lastClick >= rate) {
        count += event.clientX;
        console.log(count);
        lastClick = Date.now();
    }
});

// Using map operator.
// Others include pluck, pairwise, sample, etc.
fromEvent(document, 'click')
    .pipe(
        throttleTime(1000),
        map((event: any) => event.clientX),
        scan((count, clientX) => count + clientX, 0)
    ).subscribe(count => console.log(count));