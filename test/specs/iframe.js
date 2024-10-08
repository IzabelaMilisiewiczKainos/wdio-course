describe("Iframe Test", () => {
  it("Working with iFrame", async () => {
    await browser.url("https://practice.sdetunicorns.com/iframe-sample/");

    //access the iframe
    const iframe = await $("#advanced_iframe");
    await iframe.waitForExist({ timeout: 5000 });
    await browser.switchToFrame(iframe);

    //verify that logo exist
    await $(".custom-logo").isExisting();

    // verify page title - we are already inside the iframe
    const pageTitle = await $("h1");
    await pageTitle.waitForExist({ timeout: 5000 }); // Wait for the element to appear
    await expect(pageTitle).toHaveText(
      "Master Software Testing and Automation",
    );

    //switch to parent frame
    await browser.switchToParentFrame();

    // verify page title - we are already inside the iframe
    const pageTitle2 = await $("h1").getText();
    // await pageTitle2.waitForExist({ timeout: 5000 });
    await expect(pageTitle2).toContain("IFrame Sample");
  });
});
