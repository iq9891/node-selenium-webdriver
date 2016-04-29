var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://www.google.com/ncr');
driver.findElement(By.name('ie')).sendKeys('limenglong@appadhoc.com');
driver.findElement(By.name('pwd')).sendKeys('a1111111');
driver.findElement(By.id('login')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.quit();
