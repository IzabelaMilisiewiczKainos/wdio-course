describe("Contact page", () => {
  it("Send a message and assert success message", async () => {
    //Open URL
    await browser.url("/contact/");

    //Fill out the form
    await $(".contact-name input").setValue("John Doe");
    await $(".contact-email input").setValue("test@test.com");
    await $(".contact-phone input").setValue("666666666");
    await $(".contact-message textarea").setValue("Test message");

    //addValue - add text to the existing text
    //setValue - clear the existing text and add new text

    //Submit the form
    await $("button[type=submit").click();

    //Assert success message
    await expect($("[role='alert']")).toHaveText(
      "Thanks for contacting us! We will be in touch with you shortly",
    );
  });
});
