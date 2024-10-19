import ContactPage from "../pages/contact-page.js";

describe("Contact page", () => {
  it("Send a message and assert success message", async () => {
    //Open URL
    await ContactPage.open();

    //Fill out the form
    await ContactPage.submitForm(
      "John Doe",
      "test@test.com",
      "1234567890",
      "Hello, this is a test message",
    );

    //Assert success message
    await expect(ContactPage.successMessage).toHaveText(
      "Thanks for contacting us! We will be in touch with you shortly",
    );
  });
});
