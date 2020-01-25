import { fromEvent } from 'rxjs';

// Native JS
document.addEventListener('click', () => console.log('clicked'));

// RxJS 'fromEvent' Observable
fromEvent(document, 'click').subscribe(() => console.log('click'));