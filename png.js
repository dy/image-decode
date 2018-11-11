// decode png buffer
'use strict'


var PNG = require('pngjs').PNG
var toab = require('to-array-buffer')

module.exports = function read (data, o) {
	var imgData = PNG.sync.read(Buffer.from(data))

	var pixels = new Uint8Array(toab(imgData.data))

	return {
		data: pixels,
		width: imgData.width | 0,
		height: imgData.height | 0
	}
}

