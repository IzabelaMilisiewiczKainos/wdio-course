class HomePage {
  open() {
    browser.url("/"); //it will open home page from config file
  }

  get btnGetStarted() {
    return $("#get-started");
  } //this is getter so we dont need to call it with () = invoke the function

  get logo() {
    return $("img.custom-logo");
  }

  get txtHeading() {
    return $(".elementor-widget-container h1");
  }
}

export default new HomePage();  //new=initialize the class, HomePage is the class name
