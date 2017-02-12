const Rx = require('Rx');
const stackTrace = require('./utils/stacktrace');
const log = require('./utils/log');

function main() {
    'use strict';

    Rx.Observable.just(1)
        .subscribe(v => {
            log('Rx.Observable.just(1)');
            log(stackTrace());
            [
                "AnonymousObserver._onNext",
                "AnonymousObserver.Rx.AnonymousObserver.AnonymousObserver.next",
                "AnonymousObserver.Rx.internals.AbstractObserver.AbstractObserver.onNext",
                "AnonymousObserver.tryCatcher",
                "AutoDetachObserverPrototype.next",
                "AutoDetachObserver.Rx.internals.AbstractObserver.AbstractObserver.onNext",
                "scheduleItem",
                "JustObservable.subscribeCore",
                "JustObservable.tryCatcher",
                "setDisposable",
                "ScheduledItem.invokeCore",
                "ScheduledItem.invoke",
                "runTrampoline",
                "tryCatcher",
                "CurrentThreadScheduler.schedule",
                "JustObservable.Rx.ObservableBase.ObservableBase._subscribe",
                "JustObservable.Rx.Observable.observableProto.subscribe.observableProto.forEach",
                "main"
            ]
        });

    let observer = null;
    Rx.Observable.create(o => observer = o)
        .subscribe(v => {
            log('Rx.Observable.create(); observer.onNext()');
            log(stackTrace());
            [
                "AnonymousObserver._onNext",
                "AnonymousObserver.Rx.AnonymousObserver.AnonymousObserver.next",
                "AnonymousObserver.Rx.internals.AbstractObserver.AbstractObserver.onNext",
                "AnonymousObserver.tryCatcher",
                "AutoDetachObserverPrototype.next",
                "AutoDetachObserver.Rx.internals.AbstractObserver.AbstractObserver.onNext",
                "main"
            ]
        });

    observer.onNext();
};

main();
