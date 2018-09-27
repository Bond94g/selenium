const {Builder, By, Key} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');
const firefox = require('selenium-webdriver/firefox');
test.describe('Yandex Search', function () {
    let driver;


    test.before(function* () {
        let options = new firefox.Options().setBinary('/Applications/Firefox Nightly.app/Contents/MacOS/firefox');

        driver = yield new Builder()
            .forBrowser('firefox')
            .setFirefoxOptions(options)
            .build();
    });

    test.it('test', function () {
        driver.get('http://localhost/litecart/admin/login.php');
        driver.findElement(By.name('username')).sendKeys('admin');
        driver.findElement(By.name('password')).sendKeys('admin');
        driver.findElement(By.name('login')).click();
        driver.findElement(By.className('fa fa-sign-out fa-lg')).click();
        driver.findElement(By.name('username')).sendKeys('admin');
        driver.findElement(By.name('password')).sendKeys('admin');
    });

    test.after(() => driver.quit());

});