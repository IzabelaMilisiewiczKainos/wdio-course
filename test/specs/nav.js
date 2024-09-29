describe('Navigation menu', () => { 

    it('Get the text of all menu items and assert them', async () => {
        //Open URL
        await browser.url('/');  //it goes to baseUrl from wdio.conf.js
    
        const expectedLinks = ['Home', 'About', 'Shop', 'Blog', 'Contact', 'My account'];
    
        const actualLinks = [];
        
        // const navLinks = await $('#primary-menu').$$('li[id*=menu]');
        const navLinks = await $$('#primary-menu li[id*=menu]');

    
        for (const link of navLinks) {
            actualLinks.push(await link.getText());  //we are looping through the navLinks and getting the text of each link and storing it in actualLinks
        }
    
        await expect(actualLinks).toEqual(expectedLinks);
        
    })
});

