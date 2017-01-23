var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

//项目的地址
// driver.get('http://192.168.1.141:9000');

// driver.findElement(By.name('ie')).sendKeys('limenglong@appadhoc.com');
// driver.findElement(By.name('pwd')).sendKeys('a1111111');
// driver.findElement(By.id('login')).click();
// driver.wait(until.titleIs(''), 100000);
driver.get('https://www.baidu.com/');
driver.findElement(By.name('wd')).sendKeys('web啊啊啊啊啊啊啊啊driver');
driver.findElement(By.id('su')).click();
driver.wait(until.titleIs('web啊啊啊啊啊啊啊啊driver_百度搜索'), 1000);
driver.quit();
