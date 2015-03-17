var _ = require('lodash');
module.exports = function() {
  var alphabet = [ "abcdefghijklmnopqrstuvwxyz" ];
  var newArray = [];
  _.map(alphabet, function(val) {
    newArray.push(_.sample(val));
  })
  return newArray;
}

