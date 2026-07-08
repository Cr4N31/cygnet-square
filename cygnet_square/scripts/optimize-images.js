import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const dir = path.join(process.cwd(), 'public', 'assets', 'imgs')

async function optimize() {
  if (!fs.existsSync(dir)) {
    console.error('Images directory not found:', dir)
    process.exit(1)
  }

  const files = fs.readdirSync(dir)
  for (const f of files) {
    const ext = path.extname(f).toLowerCase()
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue

    const base = path.basename(f, ext)
    const input = path.join(dir, f)
    const outWebp = path.join(dir, `${base}.webp`)

    try {
      await sharp(input)
        .webp({ quality: 75 })
        .toFile(outWebp)
      console.log('Wrote', outWebp)
    } catch (err) {
      console.error('Failed to convert', input, err)
    }
  }
}

optimize().catch((e) => {
  console.error(e)
  process.exit(1)
})
