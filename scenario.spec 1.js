const { test, expect, chromium, firefox } = require('@playwright/test')

test("first Scenario test", async () => {
    let pagee = await firefox.launch();
    let b = await pagee.newContext();
    let page = await b.newPage();
    await page.goto("https://www.lambdatest.com/selenium-playground/");
    await page.locator('//a[text()="Simple Form Demo"]').click();
    let urlContains = await page.url();
    await expect(urlContains).toContain('simple-form-demo')
    await page.locator('//input[@id="user-message"]').fill('Welcome to LambdaTest')
    await page.locator('//button[@id="showInput"]').click();
    let text = await page.locator('//p[@id="message"]').textContent()
    await expect(text).toContain('Welcome to LambdaTest')

});
test("Second Scenario test", async () => {
    let pagee = await firefox.launch();
    let b = await pagee.newContext();
    let page = await b.newPage();
    await page.goto("https://www.lambdatest.com/selenium-playground/");
    await page.locator('//a[text()="Drag & Drop Sliders"]').click();
    await page.waitForTimeout(4000)
    await page.locator('//h4[text()=" Default value 15"]/parent::div//input[@class="sp__range"]').hover();
    await page.mouse.down()
    await page.mouse.move(565, 0);
    let percentage = await page.locator('//h4[text()=" Default value 15"]/parent::div//output').textContent();
    await expect(percentage).toContain('95')
});
test("Third Scenario test", async () => {
    let pagee = await firefox.launch();
    let b = await pagee.newContext();
    let page = await b.newPage();
    await page.goto("https://www.lambdatest.com/selenium-playground/");
    await page.locator('//a[text()="Input Form Submit"]').click();
    await page.locator('//button[text()="Submit"]').click()
    let name = await page.locator('//input[@id="name"]');
    const validationMessage = await name.evaluate((element) => {
        return element.validationMessage
      });
      await expect(validationMessage).toContain('Please fill out this field.')
      await name.fill('Kumaran')
      await page.locator('//input[@id="inputEmail4"]').fill('sample@gmail.com')
      await page.locator('//input[@id="inputPassword4"]').fill('Qwerty');
      await page.locator('//input[@id="company"]').fill('lamdatest');
      await page.locator('//input[@id="websitename"]').fill('www.abc.com')
      await page.locator('//select[@name="country"]').selectOption({label:'United States'})
      await page.locator('//input[@id="inputCity"]').fill('china');
      await page.locator('//input[@id="inputAddress1"]').fill('vivekananda street')
      await page.locator('//input[@id="inputAddress2"]').fill('dubai Kuruku santhu')
      await page.locator('//input[@id="inputState"]').fill('dubai')
      await page.locator('//input[@id="inputZip"]').fill('2309986')
      await page.locator('//button[text()="Submit"]').click()
      let message=await page.locator('//p[@class="success-msg hidden"]').textContent();
      await expect(message).toContain('Thanks for contacting us, we will get back to you shortly.')

});