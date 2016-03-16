
'use strict';

const assert = require('assert');
const requireNoCache = require('../index');

describe('Modules imported by require() with cache', function () {
  it('are equal', function () {
    assert.equal(
      require('./rand'),
      require('./rand')
    );
  });
});

describe('Modules imported by require() without cache', function () {
  it('are not equal', function () {
    assert.notEqual(
      requireNoCache('./rand'),
      requireNoCache('./rand')
    );
  });
});
