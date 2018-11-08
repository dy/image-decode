'use strict'

var detectType = require('image-type')
var toab = require('to-array-buffer')

module.exports = decode


function decode (data, o) {
  data = toab(data)

  if (!o) o = {}
  else if (typeof o === 'string') o = {type: o}

  var type = o.type

  if (!type) {
    type = detectType(data)

    if (!type) throw Error('Cannot detect image data type')

    type = type.mime
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
