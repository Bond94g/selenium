const {Builder, By, Key} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');
const assert = require('assert');

test.describe('litecart', function () {
    let driver;

    test.before(function* () {
        driver = yield new Builder()
            .forBrowser('firefox')
            .build();
    });

    test.it('test', async function () {
        driver.get('http://localhost/litecart');

        let homePageName = await driver.findElement(By.xpath('//*[@id="box-campaigns"]//div[@class=\'name\']'));
        let homePageNameText = await homePageName.getText();

        let homePageRegularPrice = await driver.findElement(By.xpath('//*[@id="box-campaigns"]//s[@class=\'regular-price\']'));
        let homePageRegularPriceText = await homePageRegularPrice.getText();
        let homePageRegularPriceColor = await homePageRegularPrice.getCssValue('color');
        let homePageRegularPriceFontSize = await homePageRegularPrice.getCssValue('font-size');
        let homePageRegularPriceTagName = await homePageRegularPrice.getTagName();

        let homePageCampaignPrice = await driver.findElement(By.xpath('//*[@id="box-campaigns"]//strong[@class=\'campaign-price\']'));
        let homePageCampaignPriceText = await homePageCampaignPrice.getText();
        let homePageCampaignPriceColor = await homePageCampaignPrice.getCssValue('color');
        let homePageCampaignPriceFontSize = await homePageCampaignPrice.getCssValue('font-size');
        let homePageCampaignPriceTagName = await homePageCampaignPrice.getTagName();

        //обычная цена зачёркнутая и серая (можно считать, что "серый" цвет это такой, у которого в RGBa представлении одинаковые значения для каналов R, G и B)
        assert.equal(greyColor(homePageRegularPriceColor), true);
        assert.equal(homePageRegularPriceTagName, 's');

        //акционная жирная и красная (можно считать, что "красный" цвет это такой, у которого в RGBa представлении каналы G и B имеют нулевые значения)
        assert.equal(redColor(homePageCampaignPriceColor), true);
        assert.equal(homePageCampaignPriceTagName, 'strong');

        //акционная цена крупнее, чем обычная
        assert.equal(isTrue(homePageRegularPriceFontSize, homePageCampaignPriceFontSize), true);

        let button = await driver.findElement(By.xpath('//*[@id="box-campaigns"]//a[@title=\'Yellow Duck\' and @class=\'link\']'));
        await button.click();

        let productPageName = await driver.findElement(By.xpath('//*[@id="box-product"]//h1'));
        let productPageNameText = await productPageName.getText();

        let productPageRegularPrice = await driver.findElement(By.xpath('//*[@id="box-product"]//s[@class=\'regular-price\']'));
        let productPageRegularPriceText = await productPageRegularPrice.getText();
        let productPageRegularPriceColor = await productPageRegularPrice.getCssValue('color');
        let productPageRegularPriceFontSize = await productPageRegularPrice.getCssValue('font-size');
        let productPageRegularPriceTagName = await productPageRegularPrice.getTagName();


        let productPageCampaignPrice = await driver.findElement(By.xpath('//*[@id="box-product"]//strong[@class=\'campaign-price\']'));
        let productPageCampaignPriceText = await productPageCampaignPrice.getText();
        let productPageCampaignPriceColor = await productPageCampaignPrice.getCssValue('color');
        let productPageCampaignPriceFontSize = await productPageCampaignPrice.getCssValue('font-size');
        let productPageCampaignPriceTagName = await productPageCampaignPrice.getTagName();

        //на главной странице и на странице товара совпадает текст названия товара
        assert.equal(homePageNameText, productPageNameText);

        //на главной странице и на странице товара совпадают цены (обычная и акционная)
        assert.equal(homePageRegularPriceText, productPageRegularPriceText);
        assert.equal(homePageCampaignPriceText, productPageCampaignPriceText);

        //обычная цена зачёркнутая и серая (можно считать, что "серый" цвет это такой, у которого в RGBa представлении одинаковые значения для каналов R, G и B)
        assert.equal(greyColor(productPageRegularPriceColor), true);
        assert.equal(productPageRegularPriceTagName, 's');

        //акционная жирная и красная (можно считать, что "красный" цвет это такой, у которого в RGBa представлении каналы G и B имеют нулевые значения)
        assert.equal(redColor(productPageCampaignPriceColor), true);
        assert.equal(productPageCampaignPriceTagName, 'strong');

        //акционная цена крупнее, чем обычная
        assert.equal(isTrue(productPageRegularPriceFontSize, productPageCampaignPriceFontSize), true);

    });

    test.after(() => driver.quit());

});

function greyColor(colorRGBa) {
    let regularPriceColor = colorRGBa.replace(/^(rgb|rgba)\(/,'').replace(/\)$/,'').replace(/\s/g,'').split(',');
    return (regularPriceColor[0] === (regularPriceColor[1]) &&
        regularPriceColor[0] === (regularPriceColor[2]) &&
        regularPriceColor[1] === (regularPriceColor[2]));
}

function redColor(colorRGBa) {
    let campaignPriceColor = colorRGBa.replace(/^(rgb|rgba)\(/,'').replace(/\)$/,'').replace(/\s/g,'').split(',');
    return (parseInt(campaignPriceColor[0]) != 0 &&
        parseInt(campaignPriceColor[1]) == 0 &&
        parseInt(campaignPriceColor[2]) == 0);
}

function isTrue(regularFontSize, campaignFontSize) {
    if (campaignFontSize > regularFontSize) {
        return true;
    }
    return false;
}