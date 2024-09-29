//WebdriverIO wraps the Selenium WebDriver to control the browser
//the code uses Mocha as the testing framework to structure the tests (describe, it)


//Practice E-Commerce Site – SDET Unicorns
//https://practice.sdetunicorns.com/

describe('Home', () => { //first argument is a string ('Home'), which is the name of the test suite, and the second argument is a function (a callback) that contains the individual tests
    it.skip('Open URL & assert title', async () => {
        //Open URL
        await browser.url('https://practice.sdetunicorns.com/');

        //Assert Title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    })

//first parameter of describe - Test suite name, is used to group a set of related tests together
//second parameter of describe - function (function will have all tests ("it" blocks)

//it(): This is also provided by Mocha and defines a single test case. The first argument is a string describing what the test does ('Open URL & assert title'), and the second argument is an async function that contains the actual steps of the test.

//first arg of it - test case name
//second arg for it is function (function will have test steps)

//async () => {}: This indicates that the function is asynchronous. In WebdriverIO, browser interactions like opening a URL or checking the title are asynchronous operations (i.e., they may take time to complete, such as waiting for the page to load). async allows us to use the await keyword to handle these asynchronous actions.

//This test follows the Arrange-Act-Assert pattern commonly used in testing:
// Arrange: Set up the conditions for the test (navigate to the URL).
// Act: Perform the action being tested (open the page).
// Assert: Verify the expected outcome (check the title).

    it.skip('Open URL & assert url', async () => {
        //Open URL
        await browser.url('https://practice.sdetunicorns.com/about/');

        //Assert Url
        await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/about/');
    })

    it.skip('Click get started button and assert url contains get-started text', async () => {
        //Open URL
        await browser.url('https://practice.sdetunicorns.com/');

       // Click the "Get Started" button
       await $('#get-started').click(); // $() is a WebdriverIO selector that finds an element by CSS selector  (ID here)
        
       // Assert that the URL contains the text "get-started"
    //    await expect(browser).toHaveUrlContaining('get-started'); //toHaveUrlContaining() isn't supported anymore
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toContain('get-started');
   });

   it.skip('Click on the logo and make sure that url doesnt contain get-started text', async () => {
    //Open URL
    await browser.url('https://practice.sdetunicorns.com/');

   // Click on the logo
   await $('img.custom-logo').click(); 
    
   // Assert that the URL doesnt contain the text "get-started"
//    await expect(browser).toHaveUrlContaining('get-started'); //toHaveUrlContaining() isn't supported anymore
    const currentUrl = await browser.getUrl();
    expect(currentUrl).not.toContain('get-started');
});

it('Find heading element and assert text', async () => {
    //Open URL
    await browser.url('https://practice.sdetunicorns.com/');

   // Find heading element
   const headingElement = await $('.elementor-widget-container h1'); 
    
   // Get the text
    const headingText = await headingElement.getText();

    //Assert the text
    // await expect(headingText).toEqual('Think different. Make different.');
    await expect(headingElement).toHaveText('Think different. Make different.');  //toHaveText() is used to assert the text of an element in wdio, you dont have to create a variable to store the text

});
});

