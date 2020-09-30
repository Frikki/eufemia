import path from 'path'
import opentype from 'opentype.js'
import Fontmin from 'fontmin'
import { asyncForEach } from './'

const widthOffset = 24

asyncForEach(
  [
    { fontName: 'DNB', styleName: 'Light' },
    { fontName: 'DNB', styleName: 'Regular' },
    { fontName: 'DNB', styleName: 'Medium' },
    { fontName: 'DNB', styleName: 'Bold' },
    { fontName: 'DNBMono', styleName: 'Regular' }
  ],
  async ({ fontName, styleName }) => {
    const soruceFile = `${fontName}-${styleName}.ttf`
    const sourcePath = path.resolve(
      __dirname,
      '../../assets/fonts/',
      soruceFile
    )

    const familyName = `${fontName}Skeleton`
    const fileName = `${fontName}-Skeleton`
    const font = await opentype.load(sourcePath)

    const newFont = createFont(font, {
      styleName,
      familyName
    })

    newFont.download(`assets/fonts/skeleton/${fileName}-${styleName}.otf`)

    minify()
  }
)

const createChar = (s) => s.charCodeAt(0)
const excludeChars = ''.split('').map(createChar) // special chars    \',;[]()."`

function createFont(font, { styleName, familyName }) {
  const glyphs = Object.values(font.glyphs.glyphs)

  // Get the height from H char
  const H = glyphs.find((g) => g.unicode === 72) // H char
  const h = H.yMax

  const changedGlyphs = glyphs
    .map((g) => {
      // Heres a list of the most used (Basic Latin) chars: https://en.wikipedia.org/wiki/List_of_Unicode_characters
      // But as for now, we convert all chars
      // if (!(g.unicode >= 0 && g.unicode <= 126)) {
      //   return null
      // }
      return changePath(g, h)
    })
    .filter(Boolean)

  const newFont = new opentype.Font({
    familyName,
    styleName,
    unitsPerEm: font.unitsPerEm,
    ascender: font.ascender,
    descender: font.descender,
    glyphs: changedGlyphs
  })

  return newFont
}

function changePath(glyph, bottom) {
  const aPath = new opentype.Path()

  if (!excludeChars.includes(glyph.unicode)) {
    aPath.moveTo(-widthOffset, 0)
    aPath.lineTo(-widthOffset, bottom)
    aPath.lineTo(glyph.advanceWidth + widthOffset, bottom)
    aPath.lineTo(glyph.advanceWidth + widthOffset, 0)
    aPath.close()
  }

  glyph.path = aPath

  return glyph
}

function minify() {
  const fontmin = new Fontmin()

  fontmin.src(path.resolve(__dirname, '../../assets/fonts/skeleton/*.otf'))

  fontmin.use(Fontmin.otf2ttf())
  fontmin.use(Fontmin.ttf2woff())
  fontmin.use(Fontmin.ttf2woff2())

  fontmin.dest(path.resolve(__dirname, '../../assets/fonts/skeleton/'))

  fontmin.run(function (err) {
    if (err) {
      throw err
    }
  })
}
