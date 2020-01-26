# Learning RxJS
![RxJS Logo](assets/rxjs-logo.png)

RxJS Official Documentation: [Here](https://rxjs-dev.firebaseapp.com/)
<br>

ReactiveX Documentation: [Here](http://reactivex.io/rxjs/manual/overview.html)
<br>

LeanRxJs Documentation: [Here](https://www.learnrxjs.io/)
<br>

![](https://placehold.it/15/9500ff/000000?text=+) Programming snippets for each section are located under their reprective directories ![](https://placehold.it/15/9500ff/000000?text=+)

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
    - Represents the execution of an Observerable, is primarily 
      useful for cancelling the execution.

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
<div>
<span>Introduction Lookup Table</span><br>
<small>[1] <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/1.6">https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/1.6</a></small><br>
<small>[2] <a href="https://en.wikipedia.org/wiki/Observer_pattern">https://en.wikipedia.org/wiki/Observer_pattern</a></small><br>
<small>[3] <a href="https://en.wikipedia.org/wiki/Iterator_pattern">https://en.wikipedia.org/wiki/Iterator_pattern</a></small><br>
</div>

<hr>

## Observables

<b>- Observables are lazy Push collections of multiple values.</b>

```
Pull versus Push
 - Pull and Push are two different protocols that describe how a
   data Producer can communicate with a data Consumer.

 - Pull
   - The Consumer determines when it receives data from the data
     Producer.
   - The Producer itself is unaware of when that data will be
     data will be delivered to the Consumer.
   - Every JS Function is a Pull System. The function is the producer
     of data, and the code that calls the function is consuming it by
     'pulling' out a single value from its call.
   - ES2015 introduced generator functions and iterators[1].
      - Code that calls iterator.next() is the Consumer, 'pulling'
        out multiple values from the iterator (the Producer).

 - Push
   - The Producer determines when to send data to the consumer. The
     Consumer is unaware of when it will receive the data.
   - Promises are the most common type of Push System in JS today.
      - A Promise (the Producer) delivers a resolved value to
        registered callbacks (the Consumer), but like functions,
        it is the Promise which is in charge of determining precisely
        when that value is 'pushed' to the callbacks.
```

<table>
<tr><th></th><th>Producer</th><th>Consumer</th></tr>
  <tr>
    <td>Pull</td>
    <td>Passive: produces data when requsted.</td>
    <td>Active: decides when data is requested.</td>
  </tr>
  <tr>
    <td>Push</td>
    <td>Active: produces data at its own pace.</td>
    <td>Passive: reacts to received data.</td>
  </tr>
</table>

```
Observables
 - Push System
 - Producer of multiple values, 'pushing' them to Observers (Consumers).

Comparisons
 - Function
   - Lazily evaluated computation that synchronously returns a single 
     value on invocation.

 - Generator
   - Lazily evaluated computation that synchronously return zero to
     potentially infinite values on iteration.

 - Promise
   - Computation that may (or may not) eventually return a single value.

 - Observable
   - Lazily evaluated computation that can synchronously or
     asynchronously return zero to potentially infinite values from the
     time it's invoked onwards.
```
<br>
<div>
<span>Observables Lookup Table</span><br>
<small>[1] <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*</a></small><br>
</div>

<hr>