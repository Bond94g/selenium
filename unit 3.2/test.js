const {Builder, By, Key} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');
test.describe('litecart', function () {
    let driver;


    test.before(function* () {
        driver = yield new Builder()
            .forBrowser('chrome')
            .build();
    });

    test.it('test', function () {
        driver.get('http://localhost/litecart');

        driver.findElement(By.xpath('//*[@id="box-most-popular"]/h3[normalize-space(.)=\'Most Popular\']')).then(function () {
            return true;
        });


        driver.findElement(By.xpath('//*[@id="box-most-popular"]//a[@title=\'Purple Duck\']//div[@title=\'New\']')).then(function () {
            return true;
        });

        driver.findElement(By.xpath('//*[@id="box-most-popular"]//a[@title=\'Blue Duck\']//div[@title=\'New\']')).then(function () {
            return true;
        });

        driver.findElement(By.xpath('//*[@id="box-most-popular"]//a[@title=\'Red Duck\']//div[@title=\'New\']')).then(function () {
            return true;
        });

        driver.findElement(By.xpath('//*[@id="box-most-popular"]//a[@title=\'Green Duck\']//div[@title=\'New\']')).then(function () {
            return true;
        });

        driver.findElement(By.xpath('//*[@id="box-most-popular"]//a[@title=\'Yellow Duck\']//div[@title=\'On Sale\']')).then(function () {
            return true;
        });

        driver.findElement(By.xpath('//*[@id="box-campaigns"]/h3[normalize-space(.)=\'Campaigns\']')).then(function () {
            return true;
        });

        driver.findElement(By.xpath('//*[@id="box-campaigns"]//a[@title=\'Yellow Duck\']//div[@title=\'On Sale\']')).then(function () {
            return true;
        });

        driver.findElement(By.xpath('//*[@id="box-latest-products"]/h3[normalize-space(.)=\'Latest Products\']')).then(function () {
            return true;
        });

        driver.findElement(By.xpath('//*[@id="box-latest-products"]//a[@title=\'Yellow Duck\']//div[@title=\'On Sale\']')).then(function () {
            return true;
        });

        driver.findElement(By.xpath('//*[@id="box-latest-products"]//a[@title=\'Purple Duck\']//div[@title=\'New\']')).then(function () {
            return true;
        });

        driver.findElement(By.xpath('//*[@id="box-latest-products"]//a[@title=\'Blue Duck\']//div[@title=\'New\']')).then(function () {
            return true;
        });

        driver.findElement(By.xpath('//*[@id="box-latest-products"]//a[@title=\'Red Duck\']//div[@title=\'New\']')).then(function () {
            return true;
        });

        driver.findElement(By.xpath('//*[@id="box-latest-products"]//a[@title=\'Green Duck\']//div[@title=\'New\']')).then(function () {
            return true;
        });
    });
    test.after(() => driver.quit());

});