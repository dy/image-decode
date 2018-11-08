v# image-decode [![unstable](https://img.shields.io/badge/stability-unstable-green.svg)](http://github.com/badges/stability-badges) [![Build Status](https://img.shields.io/travis/dy/image-decode.svg)](https://travis-ci.org/dy/image-decode)

Decode image data from raw encoded binary data in any image format: PNG, GIF, BMP, JPEG, TIFF, Webp.

## Usage

[![npm install image-decode](https://nodei.co/npm/image-decode.png?mini=true)](https://npmjs.org/package/image-decode/)


### `let {data, width, height} = await decode(buffer, mimeType?)`

Takes input `buffer` with encoded image data and decodes its contents, returns pixels `data` array. `mimeType` can be passed to skip image type detection.

`buffer` can be any binary data container:

* ArrayBuffer
* Buffer
* Uint8Array
* File
* Blob
* base64 string

`data` is _Uint8Array_ with pixels layout `[r, g, b, a, r, g, b, a, ...]`.

## See also

* [image-encode](https://ghub.io/image-encode) − encode pixels data to target format.
* [image-equal](https://ghub.io/image-equal) − image data comparing tool.
* [image-pixels](https://ghub.io/image-pixels) − load or save pixel data from/to any source.
* [image-save](https://ghub.io/image-save) − save image pixels data to a target.
* [image-type](https://ghub.io/image-type) − detect input image data type.


## Credits

© 2018 Dmitry Yv. MIT License.
