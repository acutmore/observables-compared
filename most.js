const most = require('most');
const stackTrace = require('./stacktrace');
const log = require('./log');

function main() {
    'use strict';

    most.of(1)
        .observe(function anon() {
            log('most.of(1)');
            log(stackTrace());
            [
                "anon",
                "TapSink.event",
                "PropagateTask.runJust",
                "PropagateTask.run",
                "ScheduledTask.run",
                "runTask",
                "runTasks",
                "Timeline.runTasks",
                "Scheduler._runReadyTasks",
                "Asap.timeline._runReadyTasksBound",
                "Asap.run",
                "runTask",
                "process._tickCallback",
                "Timer.listOnTimeout"
            ]
        });
};

main();
