import NavComponent from "./components/nav-comp.js";

class ContactPage {
  open() {
    browser.url("/contact/"); //it will open home page from config file
  }

  get navComponent() {
    return NavComponent;
  }

  get nameInput() {
    return $(".contact-name input");
  }

  get emailInput() {
    return $(".contact-email input");
  }

  get phoneInput() {
    return $(".contact-phone input");
  }

  get contactMessage() {
    return $(".contact-message textarea");
  }

  get submitBtn() {
    return $("button[type=submit]");
  }

  get successMessage() {
    return $("[role='alert']");
  }

  async submitForm(name, email, phone, message) {
    await this.nameInput.setValue(name);
    await this.emailInput.setValue(email);
    await this.phoneInput.setValue(phone);
    await this.contactMessage.setValue(message);
    await this.submitBtn.click();
  }

    //addValue - add text to the existing text
    //setValue - clear the existing text and add new text
}

export default new ContactPage(); //new=initialize the class, HomePage is the class name
