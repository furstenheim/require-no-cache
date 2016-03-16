# require-nocache

A module for non-caching `require()` calls. Useful for avoiding server
restarts when developing; probably shouldn't ever be used in production.

## Installation

    npm i require-no-cache

### Example

`example.js`:

    var require-no-cache = require('require-nocache')(module)

    setInterval(
      function(){
        console.log(require-no-cache('./data'))
      },
      100
    )

`data.js`:

    module.exports = Math.random()

Output

    0.8390292727854103
    0.6152856757398695
    0.7319611108396202
    0.2070864795241505
    0.8001642683520913
    0.8631588134448975
    0.7050321390852332
    0.6956002593506128
    0.630417198408395
    0.6075419373810291
    0.9156523894052953

