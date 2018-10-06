const {Builder, By, Key} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');
const assert = require('assert');
test.describe('litecart', function () {
    let driver;


    test.before(function* () {
        driver = yield new Builder()
            .forBrowser('chrome')
            .build();
    });

    test.it('Most Popular products', async function () {
        driver.get('http://localhost/litecart');

        let products = By.xpath('//div[@id =\'box-most-popular\']//li[contains(@class, \'product\')]');
        driver.findElements(products)
            .then(values => {
                for (let i = 1; i <= values.length; i++) {
                    let xpathStickers = '//div[@id =\'box-most-popular\']//li[contains(@class, \'product\')][' + i + ']//div[contains(@class, \'sticker\')]';
                    driver.findElements(By.xpath(xpathStickers))
                        .then(elements => {
                            //проверяем количество стикеров у товара
                            assert.equal(elements.length, 1);
                            let promises = elements.map(el => el.getText());
                            return Promise.all(promises);
                        })
                        .then(value => {
                            if (value[0] == 'NEW' || value[0] == 'SALE') {
                                return true;
                            }
                            else {
                                return false;
                            }
                        })
                        .then(val => assert.equal(val, true));
                }
            })
    });

    test.it('Latest Products', async function () {
        driver.get('http://localhost/litecart');

        let products = By.xpath('//div[@id =\'box-latest-products\']//li[contains(@class, \'product\')]');
        driver.findElements(products)
            .then(values => {
                for (let i = 1; i <= values.length; i++) {
                    let xpathStickers = '//div[@id =\'box-latest-products\']//li[contains(@class, \'product\')][' + i + ']//div[contains(@class, \'sticker\')]';
                    driver.findElements(By.xpath(xpathStickers))
                        .then(elements => {
                            assert.equal(elements.length, 1);
                            let promises = elements.map(el => el.getText());
                            return Promise.all(promises);
                        })
                        .then(value => {
                            if (value[0] == 'NEW' || value[0] == 'SALE') {
                                return true;
                            }
                            else {
                                return false;
                            }
                        })
                        .then(val => assert.equal(val, true));
                }
            })
    });
    test.it('Campaigns products', async function () {
        driver.get('http://localhost/litecart');
        let xpathStickers = '//div[@id =\'box-campaigns\']//li[contains(@class, \'product\')][1]//div[contains(@class, \'sticker\')]';
        let sticker = await driver.findElement(By.xpath(xpathStickers)).getText();

        assert.equal('SALE', sticker);

    });
    test.after(() => driver.quit());
});