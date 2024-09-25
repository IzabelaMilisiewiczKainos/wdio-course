//Practice E-Commerce Site – SDET Unicorns
//https://practice.sdetunicorns.com/

describe('Home', () => {
    it('Open URL & assert title', () => {
        //Open URL
        browser.url('https://practice.sdetunicorns.com/');

        //Assert Title
        expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    })
});
