
'use strict';

var reload = require('../index')(module);


setInterval(
  function(){
    console.log(reload('./data'));
  },
  100
);
