# require-no-cache

Call `require()` without cache.

## Installation

    npm i require-no-cache

## Example

`example.js`:

    var requireNoCache = require('require-no-cache')

    setInterval(
      function(){
        console.log(requireNoCache('./rand'))
      },
      100
    )

`rand.js`:

    module.exports = Math.random()

Output

    0.8390292727854103
    0.6152856757398695
    0.7319611108396202
    0.2070864795241505

## Similar Things

* [require-new](https://github.com/gajus/require-new)
* [decache](https://github.com/dwyl/decache)

# Read More

* [Node Modules Doc](https://nodejs.org/dist/latest-v5.x/docs/api/modules.html)

