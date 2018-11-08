'use strict'

let decode = require('./')
let t = require('tape')
let fix = require('./fixture')
let fs = require('fs')
let eq = require('image-equal')


t('png', async t => {
	let data = await decode(fs.readFileSync('./fixture/test_pattern.png'))

	t.ok(await eq(data, fix))

	t.end()
})

t('jpg', async t => {
	let data = await decode(fs.readFileSync('./fixture/test_pattern.jpg'))

	t.equal(require('pixelmatch')(data.data, fix.data, null, 16, 8, {}), 0)

	t.ok(await eq(data, fix, {tol: 0.04}))

	t.end()
})

t.only('bmp', t => {
	let data = await decode(fs.readFileSync('./fixture/test_pattern.jpg'))

	t.equal(require('pixelmatch')(data.data, fix.data, null, 16, 8, {}), 0)

	t.ok(await eq(data, fix, {tol: 0.04}))

	t.end()
})

t('gif', t => {
	t.end()
})

t('webp', t => {
	t.end()
})

t('tiff', t => {
	t.end()
})

t('undefined type', t => {

})

t('base64', t => {
})

t('arraybuffer')
t('buffer')
t('uint8')
t('file')
t('blob')
t('datauri')
