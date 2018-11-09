// decode png buffer
'use strict'


var PNG = require('pngjs').PNG
var toab = require('to-array-buffer')

module.exports = function read (data, o) {
	var png = new PNG()

	var imgData = PNG.sync.read(Buffer.from(data))

	var pixels = new Uint8Array(toab(imgData.data))

	pixels.data = pixels.subarray()
	pixels.width = imgData.width | 0
	pixels.height = imgData.height | 0

	return pixels
}

