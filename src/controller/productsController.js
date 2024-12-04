import express from 'express'
import { Product } from './../models/product.entity.js';
import { chromium } from 'playwright'
const router = express.Router();

router.get('/', async function(req,res){

    const object = 'leche'
    const url1 = `https://www.plazavea.com.pe/search/?_query=${object}`
    const browser = await chromium.launch({headless: true})
    const page = await browser.newPage()
    await page.goto(url1)

    await page.waitForSelector('.Showcase')

    const productsArray = await page.$$eval(
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

    //Covertir a objeto de la clase Product

    const productsResult = productsArray.map((product) => {
    return new Product(product.title, product.img, product.price)
    })

    await browser.close()


    res.send(productsResult)
    




});

export default router;