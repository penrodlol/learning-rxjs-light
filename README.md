# Learning RxJS
![RxJS Logo](assets/rxjs-logo.png)

Official documentation: [Here](http://reactivex.io/rxjs/manual/overview.html#operators)
LeanRxJs documentation: [Here](https://www.learnrxjs.io/)

<style>
#snippets {background-color: #f3f3f3; border: 1px solid #9500ff; padding:10px; font-weight: bold}
</style>

<br>
<small id="snippets">* Programming snippets for each section are located
under their reprective directories *</small>
<hr>

## Introduction

<b>- RxJS is a library for composing asynchronous and event-based programs by using observable serquences.</b>

```
Provides
 - 1 core type: Observable
 - Satellite Types
    - Observer
    - Schedulers
    - Subjects
 - Operators inspired by Array#extras[1] (map, filter, reduce, every, etc.)
    to allow handling asynchronous events as collections.
```
```
ReactiveX (Rx)
 - Combines the Observable pattern[2] with the Iterator pattent[3] and
   functional programming with collections to fill the need for an ideal 
   way of managing sequences of events.
```

```
The essential concepts in RxJS which solve async event management are:
 - Observable
    - Represents the idea of an invokable collection of future values or 
      events.
 - Observer
    - Collection of callbacks that knows how to listen to values 
      delivered by the Observable.
 - Subscription
    - Represents the execution of an Observerable, is primarily useful 
      for cancelling the execution.
 - Operators
    - Pure functions that enable a functional programming style of 
      dealing with collections with operations like (map, filter, concat,reduce, etc.).
 - Subject
    - Equivalent to EventEmitter, and the only way of multicasting a 
      value or event to multiple Observers.
 - Schedulers
    - Centralized dispatchers to control concurrency, allowing us to 
      coordinate when computation happens on e.g. setTimeout or 
      requestAnimationFrame or others.
```

```
Purity
 - What makes RxJS powerful is its ability to produce values using
   pure functions. Meaning your code is less prone to errors.
```

```
Flow
 - RxJS has a whole range of operators that helps you control how
   the events flow through your observables.
```

```
Values
 - You can transform values passed through your observables.
```

<br>
<div style="background-color: #f3f3f3; border: 1px solid #9500ff; padding: 10px">
<span>Introduction Lookup Table</span><br>
<small>[1] <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/1.6">https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/1.6</a></small><br>
<small>[2] <a href="https://en.wikipedia.org/wiki/Observer_pattern">https://en.wikipedia.org/wiki/Observer_pattern</a></small><br>
<small>[3] <a href="https://en.wikipedia.org/wiki/Iterator_pattern">https://en.wikipedia.org/wiki/Iterator_pattern</a></small><br>
</div>

<hr>