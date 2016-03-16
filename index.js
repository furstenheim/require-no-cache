
'use strict';

const stackTrace = require('stack-trace');
const path = require('path');

module.exports = function (module) {
  if (module.startsWith('./') || module.startsWith('../')) {
    // path of module that call this module
    const callerPath = stackTrace.get()[1].getFileName();
    const callerDir = path.dirname(callerPath);

    module = path.join(callerDir, module);
  }

  const cacheKey = require.resolve(module);

  delete require.cache[cacheKey];
  return require(cacheKey);
};
