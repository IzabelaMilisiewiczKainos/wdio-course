//WebdriverIO wraps the Selenium WebDriver to control the browser
//the code uses Mocha as the testing framework to structure the tests (describe, it)


//Practice E-Commerce Site – SDET Unicorns
//https://practice.sdetunicorns.com/

describe('Home', () => { //first argument is a string ('Home'), which is the name of the test suite, and the second argument is a function (a callback) that contains the individual tests
    it('Open URL & assert title', async () => {
        //Open URL
        await browser.url('https://practice.sdetunicorns.com/');

        //Assert Title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    })
});


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