describe("Blog page", () => {
  it("Check how many articles are on the page and if each of them has more than 10 letters", async () => {
    //Open URL
    await browser.url("https://practice.sdetunicorns.com/blog/");

    // Check how many articles are on the page
    // const articlesOnThePage = await $$('article[id*=post]');
    // const numberOfArticles = articlesOnThePage.length;

    // console.log('There is ' + numberOfArticles + ' articles on the page');

    // //Check if each article has more than 10 letters
    // for(const article of articlesOnThePage){
    //     const articleText = await article.getText();
    //     expect(articleText.length).toBeGreaterThan(10);
    // }

    //Get the Recent Post List Elements
    const recentPostList = await $$("#recent-posts-3 ul li");

    //Loop through the list and assert the text length is greater than 10
    for (const article of recentPostList) {
      const articleText = await article.getText();
      expect(articleText.length).toBeGreaterThan(10);
    }

    //Assert the total lenght of the list is 5
    await expect(recentPostList).toHaveLength(5);
  });
});
