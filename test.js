'use strict';

require('mocha');
var assert = require('assert');
var toPath = require('./');

describe('toPath', function() {
  it('should create an object path from a list of strings:', function() {
    assert.equal(toPath('foo', 'bar', 'baz'), 'foo.bar.baz');
  });

  it('should create an object path from an array of strings:', function() {
    assert.equal(toPath(['foo', 'bar', 'baz']), 'foo.bar.baz');
  });

  it('should flatten array args', function() {
    assert.equal(toPath(['foo', ['bar', ['baz']]]), 'foo.bar.baz');
  });

  it('should create an object path from a list of arguments:', function() {
    function foo() {
      return toPath(arguments);
    }
    assert.equal(foo('foo', 'bar', 'baz'), 'foo.bar.baz');
  });

  it('should create an object path from an array of arguments:', function() {
    function foo() {
      return toPath(arguments);
    }
    assert.equal(foo(['foo', 'bar', 'baz']), 'foo.bar.baz');
  });

  it('should work when arguments is not the first value:', function() {
    function foo() {
      return toPath('options', arguments);
    }
    assert.equal(foo(['foo', 'bar', 'baz']), 'options.foo.bar.baz');
  });

  it('should not use non-string values in the path', function() {
    function foo() {
      return toPath('options', arguments);
    }
    var fn = function() {
      return;
    };
    assert.equal(foo([fn, 'foo', 'bar', 'baz'], fn), 'options.foo.bar.baz');
  });

  it('should create an object path from a mixture of arrays and strings:', function() {
    assert.equal(toPath('foo', ['bar', 'baz']), 'foo.bar.baz');
    assert.equal(toPath(['foo'], ['bar'], ['baz']), 'foo.bar.baz');
    assert.equal(toPath(['foo'], ['bar'], ['baz']), 'foo.bar.baz');
  });
});
