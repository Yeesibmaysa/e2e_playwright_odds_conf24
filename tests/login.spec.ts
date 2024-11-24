import { test, expect } from '@playwright/test';

test('Test Login Success', async ({ page }) => {
  await page.goto('https://workshop-playwright.vercel.app/');
  await page.getByTestId('username-input').fill('Yeesibmaysa');
  await page.getByTestId('password-input').fill('123456');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Welcome To ODDS| Conference Playwright Workshop').click();
  await expect (page.getByText('Welcome To ODDS| Conference Playwright Workshop')).toBeVisible();

});


test('Test Login Fail from not input username and password', async ({ page }) => {
    await page.goto('https://workshop-playwright.vercel.app/');
    // await page.getByTestId('username-input').fill('Yeesibmaysa');
    // await page.getByTestId('password-input').fill('123456');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByText('Username is required');
    await page.getByText('Password is required').click();;
    await expect (page.getByText('Username is required')).toBeVisible();
    await expect (page.getByText('Password is required')).toBeVisible();
  
  });


  test('Test Login Fail case not input username but input password', async ({ page }) => {
    await page.goto('https://workshop-playwright.vercel.app/');
    // await page.getByTestId('username-input').fill('Yeesibmaysa');
    await page.getByTestId('password-input').fill('123456');
    await page.getByRole('button', { name: 'Login' }).click();
    // await page.getByText('Username is required');
    await expect (page.getByText('Username is required')).toBeVisible();

  });

  test('Test Login Fail case input username but not input password', async ({ page }) => {
    await page.goto('https://workshop-playwright.vercel.app/');
    await page.getByTestId('username-input').fill('Yeesibmaysa');
    // await page.getByTestId('password-input').fill('123456');
    await page.getByRole('button', { name: 'Login' }).click();
    // await page.getByText('Username is required');
    await expect (page.getByText('Password is required')).toBeVisible();

  });

  test('Test placeholder user field and password field', async ({ page }) => {
    await page.goto('https://workshop-playwright.vercel.app/');
    await expect(page.getByPlaceholder('Enter Username')).toBeVisible();
    await expect(page.getByPlaceholder('Enter Password')).toBeVisible();
  });

