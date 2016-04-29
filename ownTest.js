var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

//项目的地址
driver.get('http://192.168.1.141:9000');

driver.findElement(By.name('ie')).sendKeys('limenglong@appadhoc.com');
driver.findElement(By.name('pwd')).sendKeys('a1111111');
driver.findElement(By.id('login')).click();
driver.wait(until.titleIs(''), 100000);
