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

    test.it('test', function () {
        driver.get('http://localhost/litecart/admin/login.php');
        driver.findElement(By.name('username')).sendKeys('admin');
        driver.findElement(By.name('password')).sendKeys('admin');
        driver.findElement(By.name('login')).click();

        let menuItems = By.xpath('//*[@id="box-apps-menu"]/li[@id = \'app-\']');

        driver.findElements(menuItems)
            .then(elements => {
                let promises = elements.map(el => el.getText());
                return Promise.all(promises);
            })
            .then(values => {
                for (let i = 0; i <= values.length - 1; i++) {
                    driver.findElement(By.xpath('//li[@id=\'app-\']/a/span[text()="' + values[i] + '"]')).click();

                    driver.findElement(By.tagName('h1'))
                        .then(values => {
                            let promise = values.isDisplayed();
                            return promise;
                        })
                        .then(value => assert.equal(value, true));

                    let menuItemsLi = By.xpath('//ul[@class=\'docs\']/li');
                    if (menuItemsLi) {
                        driver.findElements(menuItemsLi)
                            .then(elements => {
                                let promises = elements.map(el => el.getText());
                                return Promise.all(promises);
                            })
                            .then(values => {
                                for (let j = 0; j <= values.length - 1; j++) {
                                    driver.findElement(By.xpath('//ul[@class=\'docs\']//span[text()="' + values[j] + '"]')).click();

                                    driver.findElement(By.tagName('h1'))
                                        .then(values => {
                                            let promise = values.isDisplayed();
                                            return promise;
                                        })
                                        .then(value => assert.equal(value, true));
                                }
                            });
                    }
                }
            });
    });

    test.after(() => driver.quit());

});



