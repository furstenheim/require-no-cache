
'use strict';

var Module = require('module');

module.exports = function(path) {
  delete require.cache[Module._resolveFilename(path)];
  return require(path);
};
