let target = require('./app/application');
let test = require('selenium-webdriver/testing');

test.describe('Litecart', function () {
    let app;
    let previousNumber;
    let rowsSizePrev;

    let firstProductTitle = "Blue Duck";
    let secondProductTitle = "Red Duck";
    let thirdProductTitle = "Purple Duck";
    test.before(function () {
        app = new target.Application();
    });

    test.it('test', async function () {
        app.goToPage('http://localhost/litecart');
        previousNumber = await app.main_page.getPreviousCart();
        await app.main_page.selectProduct(firstProductTitle);
        await app.item_page.buyProduct();
        previousNumber++;
        await app.item_page.checkCart(previousNumber);

        app.goToPage('http://localhost/litecart');
        await app.main_page.selectProduct(secondProductTitle);
        await app.item_page.buyProduct();
        previousNumber++;
        await app.item_page.checkCart(previousNumber);

        app.goToPage('http://localhost/litecart');
        await app.main_page.selectProduct(thirdProductTitle);
        await app.item_page.buyProduct();
        previousNumber++;
        await app.item_page.checkCart(previousNumber);

        await app.cart_page.openCart();
        rowsSizePrev = await app.cart_page.checkOrderTable();

        await app.cart_page.removeProduct(rowsSizePrev);

        await app.cart_page.checkProductsDeleted();

    });
    

    test.after(function () {
        app.quit();
    });
});