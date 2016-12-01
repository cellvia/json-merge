// var through = require('through2')
var merge = require('merge-object-streams')

module.exports = function(streams, options) {
  return new merge(streams, options)
}
