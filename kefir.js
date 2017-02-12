const Kefir = require('kefir');
const stackTrace = require('./stacktrace');
const log = require('./log');

function main() {
    'use strict';

    Kefir.constant(1)
        .observe(function anon() {
            log('Kefir.constant(1)');
            log(stackTrace());
            [
                "Object.anon",
                "extend.observe.handler",
                "callSubscriber",
                "P.inherit._on",
                "P.extend.onAny",
                "P.extend.observe",
                "main"
            ]
        });

    let emitter = undefined;
    Kefir.stream(e => emitter = e)
        .observe(function anon() {
            log('Kefir.stream(); emitter.emit()');
            log(stackTrace());
            [
                "Object.anon",
                "extend.observe.handler",
                "callSubscriber",
                "Dispatcher.extend.dispatch",
                "S$5.extend._emitValue",
                "Object.value",
                "main"
            ]
        });
    emitter.value();
};

main();
