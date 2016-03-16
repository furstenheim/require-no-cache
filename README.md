# require-no-cache

Call `require()` without cache.

## Installation

    npm i require-no-cache

### Example

`example.js`:

    var requireNoCache = require('require-no-cache')(module)

    setInterval(
      function(){
        console.log(requireNoCache('./data'))
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
