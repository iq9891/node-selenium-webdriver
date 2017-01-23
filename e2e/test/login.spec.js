'use strict';

var config = browser.params;

describe('Main View', function() {
  var page;

  beforeEach(function() {
    browser.get(config.baseUrl);
    page = require('./login.po');
  });

  it('test open login page', function() {
    expect(page.getTitle()).toBe('吆喝科技-App数据分析，网站数据统计工具，AB测试云服务平台');
  });

  it('test user login', function() {

      page.login.click();

      expect(page.getTitle()).toBe('登录 A/BTesting');
  });

});
