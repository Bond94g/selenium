const {Builder, By, Key} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');
const assert = require('assert');

test.describe('litecart', function () {
    let driver;
    let name = 'Bears';
    let code = '111';
    test.before(function* () {
        driver = yield new Builder()
            .forBrowser('firefox')
            .build();
    });

    test.it('test', async function () {
        driver.get('http://localhost/litecart/admin/login.php');
        driver.findElement(By.name('username')).sendKeys('admin');
        driver.findElement(By.name('password')).sendKeys('admin');
        driver.findElement(By.name('login')).click();

        driver.findElement(By.xpath('//a[span[text()=\'Catalog\']]')).click();
        driver.findElement((By.xpath('//a[text()=\' Add New Product\']'))).click();

        driver.findElement(By.xpath('//label[1]/input')).click();
        driver.findElement(By.name("name[en]")).sendKeys(name);
        driver.findElement(By.name("code")).sendKeys(code);
        driver.findElement(By.xpath("(//input[@name='categories[]'])[3]")).click();
        driver.findElement(By.xpath("(//input[@name='product_groups[]'])[3]")).click();
        let pathImage = __dirname;
        driver.findElement(By.xpath('//input[@type=\'file\']')).sendKeys(pathImage + '/bear.jpg')
        driver.findElement(By.name("quantity")).sendKeys("100");
        driver.findElement(By.name("date_valid_from")).sendKeys('12.12.2018');
        driver.findElement(By.name("date_valid_to")).sendKeys('22.12.2018');

        driver.findElement(By.linkText("Information")).click();
        let xpathManufacturer = By.xpath("//select[@name='manufacturer_id']");
        driver.findElement(xpathManufacturer).click();
        driver.findElement(By.xpath('//select/option[text()=\'ACME Corp.\']')).click();
        driver.findElement(By.name("keywords")).sendKeys("Bear");
        driver.findElement(By.name("short_description[en]")).sendKeys("Bear");
        driver.findElement(By.name("description[en]")).sendKeys('Bear');
        driver.findElement(By.name("head_title[en]")).sendKeys('Bear');
        driver.findElement(By.name("meta_description[en]")).sendKeys("Bear");

        driver.findElement(By.linkText("Prices")).click();
        driver.findElement(By.name("purchase_price")).sendKeys("13");
        driver.findElement(By.xpath('//select[@name=\'purchase_price_currency_code\']')).click();
        driver.findElement(By.xpath('//select[@name=\'purchase_price_currency_code\']/option[text()=\'Euros\']'));
        driver.findElement(By.name("prices[USD]")).sendKeys("50");
        driver.findElement(By.name("prices[EUR]")).sendKeys("50");

        driver.findElement(By.name("save")).click();

       let product = await driver.findElement(By.linkText(name)).getText();
       assert.equal(product, 'Bears');

    });

    test.after(() => driver.quit());

});