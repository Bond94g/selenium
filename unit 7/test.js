const {Builder, By, Key, until} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');
const assert = require('assert');

test.describe('litecart', function () {
    let driver;

    test.before(function* () {
        driver = yield new Builder()
            .forBrowser('chrome')
            .build();
    });

    test.it('test', async function () {
        driver.get("http://localhost/litecart/admin/");
        driver.findElement(By.name("username")).sendKeys("admin");
        driver.findElement(By.name("password")).sendKeys("admin");

        driver.findElement(By.name("login")).click();
        driver.wait(until.titleIs("My Store"));

        driver.get("http://localhost/litecart/admin/?app=countries&doc=countries");
        driver.wait(until.titleIs("Countries | My Store"));

        driver.findElement(By.xpath("//tr[2]//a[@title='Edit']")).click();

        driver.wait(until.titleIs("Edit Country | My Store"));

        let listLinks = await driver.findElements(By.xpath("//form//a[contains(@target, '_blank')]"));

        let linksQuantity = listLinks.length;


        for (let i = 0; i < linksQuantity; i++) {

            let originalWindow = driver.getWindowHandle();
            listLinks[i].click();

            await driver.getAllWindowHandles()
                .then(function gotWindowHandles(allhandles) {
                    driver.switchTo().window(allhandles[allhandles.length - 1]);
                });

            driver.close();

            driver.switchTo().window(originalWindow);
        }
    });

    test.after(() => driver.quit());
});
