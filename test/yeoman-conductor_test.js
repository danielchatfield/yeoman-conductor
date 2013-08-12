'use strict';

var conductor = require('../lib/conductor.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['yeoman-conductor'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'run is func': function(test) {
    test.expect(1);
    // tests here
    test.ok(typeof conductor.run === 'function', 'conductor.run should be a function.');
    test.done();
  }
};
