// decode jpeg buffer
'use strict'

var jpeg = require('jpeg-js')
var b2u8 = require('buffer-to-uint8array')

module.exports = read

function read (data, o) {
	var jpegData = jpeg.decode(data)

	if(!jpegData) {
		throw new Error("Error decoding jpeg")
	}

	return {
		data: b2u8(jpegData.data),
		height: jpegData.height,
		width: jpegData.width
	}
}

