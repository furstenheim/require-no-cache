
'use strict';

const assert = require('assert');
const requireNoCache = require('../index')(module);

describe('Modules imported by require() with cache', function () {
  it('are equal', function () {
    assert.equal(
      require('./random-data'),
      require('./random-data')
    );
  });
});

describe('Modules imported by require() without cache', function () {
  it('are not equal', function () {
    assert.notEqual(
      requireNoCache('./random-data'),
      requireNoCache('./random-data')
    );
  });
});
