const {Builder, By, Key} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');
const assert = require('assert');

test.describe('litecart', function () {
    let driver;

    let firstName = 'Mike';
    let lastName = 'Evnin';
    let address = 'Zhukova street';
    let postcode = '45404';
    let city = 'New York';
    let countryValue = 'United States';
    let stateValue = 'Nevada';
    let email = 'm.evnin@mail.ru';
    let randomNumber = Math.floor(Math.random() * 100) + 1
    let randomEmail = email + randomNumber;
    let phone = '89193226768';
    let desiredPassword = '123456';
    let confirmPassword = '123456';

    test.before(function* () {
        driver = yield new Builder()
            .forBrowser('chrome')
            .build();
    });

    test.it('test', function () {
        driver.get('http://localhost/litecart/en/');
        driver.findElement(By.xpath('//td[@class=\'account\']//a[text()=\'Create Account\']')).click();

        let xpathFirstName = By.xpath('//input[@name=\'firstname\']')
        let inputFirstName = driver.findElement(xpathFirstName);
        inputFirstName.click();
        inputFirstName.clear();
        inputFirstName.sendKeys(firstName);

        let xpathLastName = By.xpath('//input[@name=\'lastname\']')
        let inputLastName = driver.findElement(xpathLastName);
        inputLastName.click();
        inputLastName.clear();
        inputLastName.sendKeys(lastName);

        let xpathAddress = By.xpath('//input[@name=\'address1\']')
        let inputAddress = driver.findElement(xpathAddress);
        inputAddress.click();
        inputAddress.clear();
        inputAddress.sendKeys(address);

        let xpathPostcode = By.xpath('//input[@name=\'postcode\']')
        let inputPostcode = driver.findElement(xpathPostcode);
        inputPostcode.click();
        inputPostcode.clear();
        inputPostcode.sendKeys(postcode);

        let xpathCity = By.xpath('//input[@name=\'city\']')
        let inputCity = driver.findElement(xpathCity);
        inputCity.click();
        inputCity.clear();
        inputCity.sendKeys(city);

        let xpathCountry = By.xpath("//span[@class = 'select2-selection select2-selection--single']");
        driver.findElement(xpathCountry).click();
        driver.findElement(By.xpath('//input[@class=\'select2-search__field\']')).sendKeys(countryValue)
        driver.findElement(By.xpath('//ul[contains(@class, \'select2-results__options\')]/li[text()="' + countryValue + '"]')).click();

        let xpathState = By.xpath("//select[@name='zone_code']");
        driver.findElement(xpathState).click();
        driver.findElement(By.xpath('//select/option[text()="' + stateValue + '"]')).click();

        let xpathEmail = By.xpath('//input[@name=\'email\']')
        let inputEmail = driver.findElement(xpathEmail);
        inputEmail.click();
        inputEmail.clear();
        inputEmail.sendKeys(randomEmail);

        let xpathPhone = By.xpath('//input[@name=\'phone\']')
        let inputPhone = driver.findElement(xpathPhone);
        inputPhone.click();
        inputPhone.clear();
        inputPhone.sendKeys(phone);

        let xpathDesiredPassword = By.xpath('//input[@name=\'password\']')
        let inputDesiredPassword = driver.findElement(xpathDesiredPassword);
        inputDesiredPassword.click();
        inputDesiredPassword.clear();
        inputDesiredPassword.sendKeys(desiredPassword);

        let xpathConfirmPassword = By.xpath('//input[@name=\'confirmed_password\']')
        let inputConfirmPassword = driver.findElement(xpathConfirmPassword);
        inputConfirmPassword.click();
        inputConfirmPassword.clear();
        inputConfirmPassword.sendKeys(confirmPassword);

        let xpathButtonCreateAccount = By.xpath('//button[@name=\'create_account\']');
        let buttonCreateAccount = driver.findElement(xpathButtonCreateAccount);
        buttonCreateAccount.click();

        let xpathButtonLogout = By.xpath('//*[@id="box-account"]//a[text()=\'Logout\']');
        let buttonLogout = driver.findElement(xpathButtonLogout);
        buttonLogout.click();

        let xpathloginEmail = By.xpath('//input[@name=\'email\']');
        let inputLoginEmail = driver.findElement(xpathloginEmail).sendKeys(randomEmail);

        let xpathLoginPassword = By.xpath('//input[@name=\'password\']');
        let inputLoginPassword = driver.findElement(xpathLoginPassword).sendKeys(confirmPassword);

        let xpathButtonLogin = By.xpath('//button[@name=\'login\']');
        let buttonLogin = driver.findElement(xpathButtonLogin).click();

        xpathButtonLogout = By.xpath('//*[@id="box-account"]//a[text()=\'Logout\']');
        buttonLogout = driver.findElement(xpathButtonLogout);
        buttonLogout.click();
    });

    test.after(() => driver.quit());

});