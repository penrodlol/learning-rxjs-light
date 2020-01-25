import { fromEvent } from 'rxjs';
import { scan } from 'rxjs/operators';

// Impure function to capture total clicks.
// count is mutable and can be reassigned within other portions of a code block's scope.
let count = 0;
document.addEventListener('click', () => console.log(`Clicked ${++count} times`));

// RxJS isolates the state within subscription.
// 'scan' operator is like reduce for arrays. It takes the value which is exposed to a callback.
// The returned value of the callback will then become the next value exposed the next time the callback runs. 
fromEvent(document, 'click')
    .pipe(scan(count => count + 1, 0))
    .subscribe(count => console.log(`Clicked ${count} times`));