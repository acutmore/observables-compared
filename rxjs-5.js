const Rx = require('rxjs');
const stackTrace = require('./stacktrace');
const log = require('./log');

function main() {
    'use strict';

    Rx.Observable.of(1)
        .subscribe(v => {
            log('Rx.Observable.of(1)');
            log(stackTrace());
            [
                "SafeSubscriber._next",
                "SafeSubscriber.__tryOrSetError",
                "SafeSubscriber.next",
                "Subscriber._next",
                "Subscriber.next",
                "ScalarObservable._subscribe",
                "ScalarObservable.Observable._trySubscribe",
                "ScalarObservable.Observable.subscribe",
                "main"
            ]
        });

    let subscriber = null;
    Rx.Observable.create(s => subscriber = s)
        .subscribe(v => {
            log('Rx.Observable.create(); subscriber.next()');
            log(stackTrace());
            [
                "SafeSubscriber._next",
                "SafeSubscriber.__tryOrUnsub",
                "SafeSubscriber.next",
                "Subscriber._next",
                "Subscriber.next",
                "main"
            ]
        });

    subscriber.next();
};

main();
