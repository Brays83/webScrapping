import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await chromium.newPage();

await page.goto("https://www.plazavea.com.pe/");