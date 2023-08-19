
const Async = require('async')
Async.series([
    function(callback) {
        setTimeout(function() {
            console.log('Task 1')
            callback()
        }, Math.random() * 1000)
    },
    function(callback) {
        setTimeout(function() {
            console.log('Task 2')
            callback()
        }, Math.random() * 1000)
    },
    function(callback) {
        setTimeout(function() {
            console.log('Task 3')
            callback()
        }, Math.random() * 1000)
    }], function() {
        console.log('All tasks are done now')
    });