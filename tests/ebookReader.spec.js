import { test } from '@playwright/test';

const url = 'https://read.amazon.co.uk/kindle-library'
const username = process.env.KINDLE_USERNAME
const password = process.env.KINDLE_PASSWORD
const bookName = 'The Super Easy Carnivore Diet'
const totalPages = 170

test('has title', async ({ page }) => {
  await page.goto(url);
  await page.waitForTimeout(2000);
await page.getByRole('button', { name: 'AmazonSign in with your' }).click();
await page.getByRole('heading', { name: 'Sign in' }).click();
await page.waitForTimeout(2000);
await page.getByLabel('Email or mobile phone number').fill(username);
await page.waitForTimeout(2000);
await page.getByLabel('Continue').click();
await page.waitForTimeout(2000);
await page.getByLabel('Password').fill(password);
await page.waitForTimeout(2000);
await page.getByLabel('Sign in').click();
await page.waitForTimeout(2000);

await page.getByLabel(bookName).locator('a').click();
await page.waitForTimeout(2000);

await page.locator('#ion-overlay-5').getByRole('button').click();
await page.waitForTimeout(2000);

let idx = 0;
while(idx < totalPages){
  const random = Math.floor(Math.random() * 14) + 7;
  console.log(`Time: ${random}`);
  await page.waitForTimeout(random * 1000);
  await page.locator('.pagination-container').click();
  await page.getByLabel('Next page').click();
  idx++;
  console.log(`Page: ${idx} - ${totalPages}`);
}
  
});
