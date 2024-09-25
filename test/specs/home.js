//Practice E-Commerce Site – SDET Unicorns
//https://practice.sdetunicorns.com/

describe('Home', () => {
    it('Open URL & assert title', async () => {
        //Open URL
        await browser.url('https://practice.sdetunicorns.com/');

        //Assert Title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    })
});


//first parameter of describe - Test suite name
//second parameter of describe - function (function will have all tests ("it" blocks)

//first arg of it - test case name
//second arg for it is function (function will have test steps)