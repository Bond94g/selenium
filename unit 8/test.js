const {Builder, By} = require('selenium-webdriver');
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
        driver.get('http://localhost/litecart/admin/login.php');
        driver.findElement(By.name('username')).sendKeys('admin');
        driver.findElement(By.name('password')).sendKeys('admin');
        driver.findElement(By.name('login')).click();

        driver.navigate().to("http://localhost/litecart/admin/?app=catalog&doc=catalog&category_id=1");

        let elements = await driver.findElements(By.xpath("//a[contains(text(),'Duck')]"));
        for (let i = 1; i < elements.length; i++) {
            elements = await driver.findElements(By.xpath("//a[contains(text(),'Duck')]"));

            let element = elements[i].click();

            driver.manage().logs().get('browser').then(function (logsEntries) {
                logsEntries.forEach(function (l) {
                    console.log(l);
                });
            });


            driver.navigate().to("http://localhost/litecart/admin/?app=catalog&doc=catalog&category_id=1");
        }
    });
    test.after(() => driver.quit());
});