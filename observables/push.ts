import { Observable, interval } from 'rxjs';

// The following is an Observable that pushes the values 1,2,3 immediately (synchronously) when subscribed,
//  and the value 4 after one second has passed since the subscribe call.

const observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
    }, 1000);
});

console.log('just before subscribe');
observable.subscribe({
    next(x) { console.log(`got value ${x}`); },
    error(err) { console.log(`something wrong occurred: ${err}`); },
    complete() { console.log('done'); }
});
console.log('just after subscribe');