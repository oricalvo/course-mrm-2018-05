const {Builder, By, Key, until} = require('selenium-webdriver');

let driver = new Builder()
    .forBrowser('chrome')
    .withCapabilities({
        browserName: "chrome",
        chromeOptions: {
            args: ['disable-infobars']
        }
    })
    .build();

main();

async function main() {
    await driver.get('http://www.google.com');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleContains('webdriver'), 10000);
    driver.quit();
}
