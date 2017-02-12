const xs = require('xstream').default;
const stackTrace = require('./utils/stacktrace');
const log = require('./utils/log');

function main() {
    'use strict';

    xs.of(1)
        .subscribe({
            next() {
                log('xs.of(1)');
                log(stackTrace());
                [
                    "Object.next",
                    "Stream._n",
                    "FromArray._start",
                    "Stream._add",
                    "Stream.addListener",
                    "Stream.subscribe",
                    "main"
                ]
            }
        });

    let listener = undefined;
    xs.create({ start: l => listener = l, stop: () => void 0 })
        .subscribe({
            next() {
                log('xs.create(); listener.next()');
                log(stackTrace());
                [
                    "Object.next",
                    "Stream._n",
                    "main"
                ]
            }
        });
    listener.next();
};

main();
