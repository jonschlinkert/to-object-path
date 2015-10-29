'use strict';

require('mocha');
var assert = require('assert');
var toPath = require('./');

describe('toPath', function () {
  it('should create an object path from a list of strings:', function () {
    assert.equal(toPath('foo', 'bar', 'baz'), 'foo.bar.baz');
  });

  it('should create an object path from an array of strings:', function () {
    assert.equal(toPath(['foo', 'bar', 'baz']), 'foo.bar.baz');
  });

  it('should create an object path from a list of arguments:', function () {
    function foo() {
      return toPath(arguments);
    }
    assert.equal(foo('foo', 'bar', 'baz'), 'foo.bar.baz');
  });

  it('should create an object path from an array of arguments:', function () {
    function foo() {
      return toPath(arguments);
    }
    assert.equal(foo(['foo', 'bar', 'baz']), 'foo.bar.baz');
  });

  it('should create an object path from a mixture of arrays and strings:', function () {
    assert.equal(toPath('foo', ['bar', 'baz']), 'foo.bar.baz');
    assert.equal(toPath(['foo'], ['bar'], ['baz']), 'foo.bar.baz');
    assert.equal(toPath(['foo'], ['bar'], ['baz']), 'foo.bar.baz');
  });
});
