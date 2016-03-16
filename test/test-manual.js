var requireNoCache = require('../index');

setInterval(
  function(){
    console.log(requireNoCache('./rand'));
  },
  100
);
