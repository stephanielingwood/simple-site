var _ = require('lodash');
module.exports.alphabet = [ "abcdefghijklmnopqrstuvwxyz" ];
module.exports.randomLetters = function randomLetters(array) {
  var newArray = [];
  _.map(array, function(val) {
    newArray.push(_.sample(val));
  })
  return newArray;
}
