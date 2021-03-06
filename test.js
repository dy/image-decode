'use strict'

let decode = require('./')
let t = require('tape')
let fix = require('./fixture')
let fs = require('fs')
let eq = require('image-equal')


t('png', async t => {
	let data = decode(fs.readFileSync('./fixture/test_pattern.png'))

	t.ok(await eq(data, fix))

	t.equal(data.width, fix.width)
	t.equal(data.height, fix.height)

	t.end()
})

t('jpg', async t => {
	let data = decode(fs.readFileSync('./fixture/test_pattern.jpg'))

	t.ok(await eq(data, fix, {tol: 0.04}))

	t.equal(data.width, fix.width)
	t.equal(data.height, fix.height)
	t.end()
})

t('bmp', async t => {
	let data = decode(fs.readFileSync('./fixture/test_pattern.jpg'))

	t.ok(await eq(data, fix, {tol: 0.04}))

	t.equal(data.width, fix.width)
	t.equal(data.height, fix.height)
	t.end()
})

t('gif', async t => {
	let data = decode(fs.readFileSync('./fixture/test_pattern.gif'))

	t.ok(await eq(data, fix))

	t.equal(data.width, fix.width)
	t.equal(data.height, fix.height)
	t.end()
})

t.skip('webp', async t => {
	let data = decode(fs.readFileSync('./fixture/test_pattern.webp'))

	t.ok(await eq(data, fix))

	t.equal(data.width, fix.width)
	t.equal(data.height, fix.height)
	t.end()
})

t('tiff', async t => {
	let data = decode(fs.readFileSync('./fixture/test_pattern.tif'))

	t.ok(await eq(data, fix))

	t.equal(data.width, fix.width)
	t.equal(data.height, fix.height)
	t.end()
})

t('undefined type', async t => {
	let data = decode([0,0,0,0,0,0,0,0,0])
	t.notOk(data)

	t.end()
})

// TODO
t('base64')
t('arraybuffer')
t('buffer')
t('uint8')
t('file')
t('blob')
t('datauri')
