import { Jimp } from 'jimp'
import { readdir } from 'node:fs/promises'
import path from 'node:path'

const DIR = path.resolve('public/products')
const TOL = 12 // white tolerance
const SKIP_HALO_PASS = new Set(['coconut-oil.jpg', 'rice.jpg', 'white-sesame-balls-jar.jpg'])
const GREY_HALO_ONLY = new Set(['coconut-oil.jpg', 'white-sesame-balls-jar.jpg'])
const TOL_MAP = { 'white-sesame-balls-jar.jpg': 6 }

const rgba = (c) => ({ r: (c >> 24) & 255, g: (c >> 16) & 255, b: (c >> 8) & 255, a: c & 255 })
const toInt = (r, g, b, a) => ((r << 24) | (g << 16) | (b << 8) | a) >>> 0

function isWhite(r, g, b, tol) {
  return r >= 255 - tol && g >= 255 - tol && b >= 255 - tol
}

for (const file of await readdir(DIR)) {
  if (!file.endsWith('.jpg') || file.startsWith('category-')) continue
  const src = path.join(DIR, file)
  const out = path.join(DIR, file.replace(/\.jpg$/, '-cutout.png'))

  const img = await Jimp.read(src)
  const { width: w, height: h } = img.bitmap
  const tol = TOL_MAP[file] ?? TOL

  const visited = new Uint8Array(w * h)
  const queue = []

  const tryPush = (x, y) => {
    if (x < 0 || y < 0 || x >= w || y >= h) return
    const i = y * w + x
    if (visited[i]) return
    const { r, g, b } = rgba(img.getPixelColor(x, y))
    if (!isWhite(r, g, b, tol)) return
    visited[i] = 1
    queue.push(i)
  }

  for (let x = 0; x < w; x++) {
    tryPush(x, 0)
    tryPush(x, h - 1)
  }
  for (let y = 0; y < h; y++) {
    tryPush(0, y)
    tryPush(w - 1, y)
  }

  while (queue.length) {
    const i = queue.pop()
    const x = i % w
    const y = (i / w) | 0
    const { r, g, b } = rgba(img.getPixelColor(x, y))
    img.setPixelColor(toInt(r, g, b, 0), x, y)
    tryPush(x + 1, y)
    tryPush(x - 1, y)
    tryPush(x, y + 1)
    tryPush(x, y - 1)
  }

  // Second pass: remove light halo/shade connected to the transparent area
  const greyOnly = GREY_HALO_ONLY.has(file)
  if (!SKIP_HALO_PASS.has(file) || greyOnly) {
  const isLight = (r, g, b) =>
    r > 200 && g > 200 && b > 200 &&
    Math.max(r, g, b) - Math.min(r, g, b) < 40 &&
    (!greyOnly || Math.max(r, g, b) < 248)
  const visited2 = new Uint8Array(w * h)
  const queue2 = []

  const tryPush2 = (x, y) => {
    if (x < 0 || y < 0 || x >= w || y >= h) return
    const i = y * w + x
    if (visited2[i]) return
    const { r, g, b, a } = rgba(img.getPixelColor(x, y))
    if (a === 0) {
      visited2[i] = 1
      queue2.push(i)
      return
    }
    if (!isLight(r, g, b)) return
    visited2[i] = 1
    queue2.push(i)
  }

  for (let x = 0; x < w; x++) {
    tryPush2(x, 0)
    tryPush2(x, h - 1)
  }
  for (let y = 0; y < h; y++) {
    tryPush2(0, y)
    tryPush2(w - 1, y)
  }

  while (queue2.length) {
    const i = queue2.pop()
    const x = i % w
    const y = (i / w) | 0
    const { r, g, b, a } = rgba(img.getPixelColor(x, y))
    if (a !== 0) img.setPixelColor(toInt(r, g, b, 0), x, y)
    tryPush2(x + 1, y)
    tryPush2(x - 1, y)
    tryPush2(x, y + 1)
    tryPush2(x, y - 1)
  }
  }

  await img.write(out)
  console.log('cutout:', file)
}
