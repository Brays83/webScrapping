import { chromium } from 'playwright'
const object = 'ps4'
const url1 = `https://www.plazavea.com.pe/search/?_query=${object}`
const browser = await chromium.launch({headless: true})
const page = await browser.newPage()
await page.goto(url1)

await page.waitForSelector('.Showcase')

const products = await page.$$eval(
  '.Showcase',
  (results) => (
    results.map((el) => {
      const title = el
        .querySelector('.Showcase__name')
        ?.innerText

      if (!title) return null

      const img = el
        .querySelector('.Showcase__photo img')
        ?.src

      const price = el
        .querySelector('.Showcase__salePrice .price-container .price')
        ?.innerText

      return { title, img, price }
    })
  )
)

console.log(products)
await browser.close()
