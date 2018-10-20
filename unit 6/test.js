const {Builder, By, Key, until} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');
const assert = require('assert');
test.describe('litecart', function () {
    let driver;
    let prodList;


    test.before(function* () {
        driver = yield new Builder()
            .forBrowser('chrome')
            .build();
    });

    test.it('test', async function () {
        for (let i = 0; i < 3; i++) {
            driver.get('http://localhost/litecart');
            driver.wait(until.titleIs('Online Store | My Store'));
            let carts = driver.findElement(By.xpath('//div[@id=\'cart\']//span[contains(@class,\'quantity\')]'));
            await driver.findElements(By.xpath('//*[@id="box-most-popular"]/div/ul[1]/li//div[@class=\'name\']'))
                .then(elements => {
                    let promises = elements.map(el => el.getText());
                    return Promise.all(promises);
                })
                .then(values => {
                    values = values.sort();
                    b = values[i];
                    driver.findElement(By.xpath('//div[@id=\'box-most-popular\']//a[@class=\'link\' and @title = "' + values[i] + '"]')).click();
                });


            driver.wait(until.titleContains('b'));
            driver.wait(until.elementLocated(By.id('cart')));
            //let xpathState = By.xpath("//select[@name='options[Size]']");
            //driver.findElement(xpathState).click();
            if (b === 'Yellow Duck') {

                await driver.findElement(By.xpath('//select/option[text()=\'Small\']')).click();
            }

            await driver.findElement(By.name("add_cart_product")).click();
            driver.manage().timeouts().implicitlyWait(50000);
            await driver.wait(until.elementLocated(By.xpath('//*[@id="cart"]/a[2]/span[normalize-space(.)= "' + (i + 1) + '"]')))

        }

        driver.get("http://localhost/litecart/en/"); //открыть главную страницу магазина
        await driver.findElement(By.id("cart")).click(); // открываем корзину
        driver.wait(until.titleIs("Checkout | My Store")); // ожидаем открытия страницы корзины
        let prodTable = driver.wait(until.elementLocated(By.id("order_confirmation-wrapper")));
        for (let n = 1; n <= 3; n++) {


            if (n === 3) {
                prodList = 0;
            } else {
                prodList = await driver.findElements(By.css("li.shortcut"));
            }


            if (prodList.length > 0) {
                prodList[0].click();
            }


            await driver.findElement(By.name("remove_cart_item")).click();

            let rows = await driver.findElements(By.xpath("//table[contains(@class, 'dataTable')]//tr"));
            let l = rows.length;
            driver.wait(until.elementLocated(By.xpath('//table[contains(@class, \'dataTable\')]//tr["' + l + '"]')));
        }

    });

    test.after(() => driver.quit());
});
