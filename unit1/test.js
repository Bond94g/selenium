const {Builder, By, Key} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');

test.describe('Yandex Search', function () {
    let driver;

    test.before(function* () {
        driver = yield new Builder().forBrowser('chrome').build();
    });

    test.it('test', function () {
        return driver.get('https://www.yandex.ru')
            .then(_ =>
                driver.findElement(By.name('text')).sendKeys('webdriver', Key.RETURN));
    });

    test.after(() => driver.quit());

});
