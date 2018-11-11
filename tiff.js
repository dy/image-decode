'use strict'

var UTIF = require('utif')

module.exports = function decode(data, o) {
	var ifds = UTIF.decode(data)
	UTIF.decodeImages(data, ifds)

	var rgba = UTIF.toRGBA8(ifds[0])

	return {
		data: rgba,
		height: ifds[0].height,
		width: ifds[0].width
	}
}
