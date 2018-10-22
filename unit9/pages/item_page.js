let webDriver = require('selenium-webdriver');

let By = webDriver.By,
    until = webDriver.until;

class ItemPage {

    constructor(driver) {
        this.driver = driver;
    }

    async buyProduct() {
        await this.driver.findElement(By.name("add_cart_product")).click();
    }

    async checkCart(previousNumber) {
        await this.driver.wait(until.elementLocated(By.xpath('//*[@id="cart"]/a[2]/span[normalize-space(.)= "' + previousNumber + '"]')));
    }
}

exports.ItemPage = ItemPage;
