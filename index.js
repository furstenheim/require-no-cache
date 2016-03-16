
'use strict';

var _module = require('module');

module.exports = function (mod) {
  return function (path) {
    delete require.cache[_module._resolveFilename(path, mod)];
    return mod.require(path);
  };
};
