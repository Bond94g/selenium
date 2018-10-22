let webDriver = require('selenium-webdriver');

let By = webDriver.By,
    until = webDriver.until;

class MainPage {

    constructor(driver) {
        this.driver = driver;
    }

    async selectProduct(productTitle) {
        await this.driver.findElement(By.css("div#box-most-popular a.link[title='" + productTitle + "']")).click();
        await this.driver.wait(until.titleIs(productTitle + " | Rubber Ducks | My Store"));
    }

    async getPreviousCart() {
        let a = await this.driver.findElement(By.css('div#cart a.content span.quantity')).getText();
        return a;


    }
}

exports.MainPage = MainPage;

