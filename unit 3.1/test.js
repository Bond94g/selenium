const {Builder, By, Key} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');
test.describe('litecart', function () {
    let driver;


    test.before(function* () {
        driver = yield new Builder()
            .forBrowser('chrome')
            .build();
        driver.manage().timeouts().implicitlyWait(50000);
    });

    test.it('test', function () {
        driver.get('http://localhost/litecart/admin/login.php');
        driver.findElement(By.name('username')).sendKeys('admin');
        driver.findElement(By.name('password')).sendKeys('admin');
        driver.findElement(By.name('login')).click();
        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Appearence\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Template\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Logotype\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Logotype\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Catalog\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Catalog\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Product Groups\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Product Groups\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Option Groups\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Option Groups\']')).then(function() {
            return true;
        });


        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Manufacturers\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Manufacturers\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Suppliers\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Suppliers\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Delivery Statuses\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Delivery Statuses\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Sold Out Statuses\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Sold Out Statuses\']')).then(function() {
            return true;
        });


        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Quantity Units\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Quantity Units\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'CSV Import/Export\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'CSV Import/Export\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Countries\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Countries\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Countries\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Countries\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Currencies\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Currencies\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Customers\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Customers\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'CSV Import/Export\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'CSV Import/Export\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Newsletter\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Newsletter\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Geo Zones\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Geo Zones\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Languages\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Languages\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Storage Encoding\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Storage Encoding\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Modules\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Job Modules\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Customer\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Customer Modules\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Shipping\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Shipping Modules\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Payment\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Payment Modules\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Order Total\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Order Total Modules\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Order Success\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Order Success Modules\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Order Action\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Order Action Modules\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Orders\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Orders\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Order Statuses\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Order Statuses\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Pages\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Pages\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Reports\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Monthly Sales\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Most Sold Products\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Most Sold Products\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Most Shopping Customers\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Most Shopping Customers\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Settings\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Settings\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Defaults\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Settings\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'General\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Settings\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Listings\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Settings\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Images\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Settings\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Checkout\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Settings\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Advanced\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Settings\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Security\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Settings\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Slides\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Slides\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Tax\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Tax Classes\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Tax Rates\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Tax Rates\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Translations\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Search Translations\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Scan Files\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Scan Files For Translations\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'CSV Import/Export\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'CSV Import/Export\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'Users\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'Users\']')).then(function() {
            return true;
        });

        driver.findElement(By.xpath('//ul[@id=\'box-apps-menu\']//span[normalize-space(.)=\'vQmods\']')).click();
        driver.findElement(By.xpath('//*[@id="content"]/h1[normalize-space(.)=\'vQmods\']')).then(function() {
            return true;
        });










        // driver.findElement(By.className('fa fa-sign-out fa-lg')).click();
        // driver.findElement(By.name('username')).sendKeys('admin');
        // driver.findElement(By.name('password')).sendKeys('admin');
    });

    test.after(() => driver.quit());

});