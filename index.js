'use strict'

var detectType = require('image-type')
var toab = require('to-array-buffer')

module.exports = decode


function decode (data, o) {
  data = toab(data)

  if (!data) return null

  if (!o) o = {}
  else if (typeof o === 'string') o = {type: o}

  var type = o.type

  if (!type) {
    type = detectType(new Uint8Array(data))

    // we do not throw an error since argument can be decoded data already
    if (!type) return null

    type = type.mime

    if (!decode[type]) throw Error('Type `' + type + '` does not seem to be supported')
  }

  return decode[type](data, o)
}


decode['png'] =
decode['image/png'] = require('./png')
decode['gif'] =
decode['image/gif'] = require('./gif'),
decode['image/jpeg'] =
decode['image/jpg'] =
decode['jpg'] =
decode['jpeg'] = require('./jpg')
decode['bmp'] =
decode['image/bmp'] =
decode['image/bitmap'] = require('./bmp')
decode['tiff'] =
decode['image/tiff'] = require('./tiff')
decode['webp'] =
decode['image/webp'] = require('./webp')
