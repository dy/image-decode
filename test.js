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

t('bmp', async t => {
	let data = await decode(fs.readFileSync('./fixture/test_pattern.jpg'))

	t.ok(await eq(data, fix, {tol: 0.04}))

	t.end()
})

t('gif', async t => {
	let data = await decode(fs.readFileSync('./fixture/test_pattern.gif'))

	t.ok(await eq(data, fix))

	t.end()
})

t.skip('webp', async t => {
	let data = await decode(fs.readFileSync('./fixture/test_pattern.webp'))

	t.ok(await eq(data, fix))

	t.end()
})

t('tiff', async t => {
	let data = await decode(fs.readFileSync('./fixture/test_pattern.tif'))

	t.ok(await eq(data, fix))

	t.end()
})

t.only('undefined type', async t => {
	let data = await decode([0,0,0,0,0,0,0,0,0])
	t.notOk(data)

	t.end()
})

t('base64', t => {
})

t('arraybuffer')
t('buffer')
t('uint8')
t('file')
t('blob')
t('datauri')
