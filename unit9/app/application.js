let webDriver = require('selenium-webdriver');
let main_page = require('../pages/main_page');
let item_page = require('../pages/item_page');
let cart_page = require('../pages/cart_page');
class Application {

    constructor() {
        this.driver = new webDriver.Builder()
            .forBrowser("firefox")
            .build();
        this.main_page = new main_page.MainPage(this.driver);
        this.item_page = new item_page.ItemPage(this.driver);
        this.cart_page = new cart_page.CartPage(this.driver);
        // this.registrationPage = new registration_page.RegistrationPage(this.driver);
        // this.adminPanelLoginPage = new admin_panel_login_page.AdminPanelLoginPage(this.driver);
        // this.customerListPage = new customer_list_page.CustomerListPage(this.driver);
    }


    quit() {
        this.driver.quit();
    }

    goToPage(url) {
        this.driver.navigate().to(url);
    }

}

exports.Application = Application;
