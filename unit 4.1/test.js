const {Builder, By, Key} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');
const assert = require('assert');
test.describe('litecart', function () {
    let driver;
    let sortCountries;
    let sortZones;
    let sortZoneCountry;

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

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Countries\']')).click();
        let xpathHeaderPageCountry = By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Countries\']');

        driver.findElement(xpathHeaderPageCountry)
            .then(value => value.getText())
            .then(text => assert.equal(text, 'Countries', 'Название страницы не совпадает'));

        let xpathCountries = By.xpath('//form[@name=\'countries_form\']//a[text()]');

        driver.findElements(xpathCountries)
            .then(elements => {
                let promises = elements.map(el => el.getText());
                return Promise.all(promises);
            })
            .then(values => {
                sortCountries = values.sort();
                assert.deepEqual(values, sortCountries);
            });

        let xpathZones = By.xpath('//form[@name=\'countries_form\']//td[6]');
        driver.findElements(xpathZones)
            .then(elements => {
                let promises = elements.map(el => el.getAttribute('textContent'));
                return Promise.all(promises);
            })
            .then(values => {
                let parseValue = values.map(function (value) {
                    return parseInt(value);
                });
                return Promise.all(parseValue);
            })
            .then(values => {
                for (let i = 1; i <= values.length; i++) {
                    if (values[i - 1] === 0) continue;
                    driver.findElement(By.css(".row:nth-child(" + (i + 1) + ") td:nth-child(5) a")).click();

                    let xpathGeoZones = By.xpath('//*[@id="table-zones"]/tbody//td[3]');

                    driver.findElements(xpathGeoZones)
                        .then(elements => {
                            let promises = elements.map(el => el.getText());
                            return Promise.all(promises);
                        })
                        .then(values => {
                            sortZones = values.sort();
                            assert.deepEqual(values, sortZones);
                        });
                    driver.navigate().back();
                }
            });

        driver.findElement(xpathHeaderPageCountry)
            .then(badge => badge.getText())
            .then(text => assert.equal(text, 'Countries', 'Название страницы не совпадает'));

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Geo Zones\']')).click();
        let xpathHeaderPageGeoZones = By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Geo Zones\']');

        driver.findElement(xpathHeaderPageGeoZones)
            .then(value => value.getText())
            .then(text => assert.equal(text, 'Geo Zones', 'Название страницы не совпадает'));

        let xpathCountriesGeoZones = By.xpath('//form[@name=\'geo_zones_form\']//a[text()]');

        driver.findElements(xpathCountriesGeoZones)
            .then(elements => {
                let promises = elements.map(el => el.getText());
                return Promise.all(promises);
            })
            .then(values => {
                for (let i = 1; i <= values.length; i++) {
                    driver.findElement(By.css(".row:nth-child(" + (i + 1) + ") td:nth-child(3) a")).click();

                    let xpathGeoZones = By.xpath('//*[@id="table-zones"]//select[contains(@name,\'zone_code\')]/option[@selected=\'selected\']');

                    driver.findElements(xpathGeoZones)
                        .then(elements => {
                            let promises = elements.map(el => el.getText());
                            return Promise.all(promises);
                        })
                        .then(values => {
                            sortZoneCountry = values.sort();
                            assert.deepEqual(values, sortZoneCountry);
                        });
                    driver.navigate().back();
                }
            });
    });

    test.after(() => driver.quit());

});