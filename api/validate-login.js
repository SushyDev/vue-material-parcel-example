import chromium from 'chrome-aws-lambda';
const puppeteer = require('puppeteer');

module.exports = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const browser = await chromium.puppeteer.launch({
    args: [...chromium.args, '--hide-scrollbars', '--disable-web-security'],
    executablePath: await chromium.executablePath,
    ignoreHTTPSErrors: true,
  });

  const page = await browser.newPage();
  await page.goto('https://plaza2.rocvantwente.nl/');

  // ! Wait for page load
  await page.waitForSelector('#gebruikersnaam', { visible: true, timeout: 0 });

  // ! Login
  await page.type('#gebruikersnaam', username);
  await page.type('#wachtwoord', password);
  await page.type('#wachtwoord', String.fromCharCode(13));

  // ! Wait for page load
  await page.waitForSelector('#WebPartWPQ19', { timeout: 0 });

  const licenses = await page.evaluate(() => {
    return document.querySelector('#WebPartWPQ19 > div.ms-rtestate-field > table > tbody > tr.ms-rteTableEvenRow-0 > td:nth-child(3) > a').href;
  });

  const cookies = await page._client.send('Network.getAllCookies');

  // ! Clean up
  await browser.close();

  res.json({ licenses, cookies });
};
