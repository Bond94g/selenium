let webDriver = require('selenium-webdriver');

let By = webDriver.By,
    until = webDriver.until;

let rowSizePrev;
let prodList;

class CartPage {

    constructor(driver) {
        this.driver = driver;
    }

    async openCart() {
        await this.driver.findElement(By.css('div#cart-wrapper a.link')).click();
        await this.driver.wait(until.titleIs('Checkout | My Store'));
    }

    async checkOrderTable() {
        let rows = await this.driver.findElements(By.css('table.dataTable tr'));
        rowSizePrev = rows.length;
        return rowSizePrev;
    }

    async removeProduct(rowsSizePrev) {

        for (let n = 1; n <= 3; n++) {
            if (rowsSizePrev === 6) {
                prodList = 0;
            } else {
                prodList = await this.driver.findElements(By.css("li.shortcut"));
            }

            if (prodList.length > 0) {
                await prodList[0].click();

            }

            await this.driver.findElement(By.css('button[name=\'remove_cart_item\']')).click();

            await this.driver.wait(until.elementLocated(By.xpath('//table[contains(@class, \'dataTable\')]//tr["' + rowsSizePrev  + '"]')));
        }
    }


    async checkProductsDeleted() {
        this.driver.manage().timeouts().implicitlyWait(5000);
        await this.driver.wait(until.elementLocated(By.xpath('//*[@id="checkout-cart-wrapper"]/p[1]/em[normalize-space(.)=\'There are no items in your cart.\']')));
    }

}

exports.CartPage = CartPage;
