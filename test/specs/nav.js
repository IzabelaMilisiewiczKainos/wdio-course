import { $, expect, browser } from "@wdio/globals";
import HomePage from "../pages/home-page.js";

describe("Navigation menu", () => {
  it.only("Get the text of all menu items and assert them, using wait commands", async () => {
    //Open URL

    //hardcoded wait
    // browser.pause(2000)

    await HomePage.open(); //it goes to baseUrl from wdio.conf.js

    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];

    const actualLinks = [];

    // const navLinks = await $('#primary-menu').$$('li[id*=menu]');

    await $("#primary-menu li[id*=menu]").waitForDisplayed({ timeout: 5000 });
    await $("#primary-menu li[id*=menu]").waitForClickable();

    const allNavLinks = await HomePage.navComponent.linksNavMenu;
    for (const link of allNavLinks) {
      await link.waitForDisplayed({ timeout: 5000 });
    }

    //wait until home text is displayed in navigation menu
    await browser.waitUntil(
      async function () {
        const homeText = await HomePage.navComponent.firstNavMenuList.getText(); //Home locator of Home in navigation menu
        return homeText === "Home"; //true | false
      },
      {
        timeout: 5000,
        timeoutMsg:
          "Home text is not displayed in navigation menu from #primary-menu li",
      },
    );

    const navLinks = await HomePage.navComponent.linksNavMenu;

    for (const link of navLinks) {
      actualLinks.push(await link.getText()); //we are looping through the navLinks and getting the text of each link and storing it in actualLinks
    }

    await expect(actualLinks).toEqual(expectedLinks);
  });
});
