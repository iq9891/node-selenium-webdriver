/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var LoginPage = function() {

  this.login = element(by.css('.login'));

  this.getTitle = function(){
    return browser.getTitle();
  }
};

module.exports = new LoginPage();
