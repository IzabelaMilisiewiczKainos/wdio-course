import NavComponent from "./components/nav-comp.js";

class BlogPage {
  open() {
    browser.url("/blog/"); //it will open home page from config file
  }

  get navComponent() {
    return NavComponent;
  }

  get recentPostsList() {
    return $$("#recent-posts-3 ul li");
  }
}

export default new BlogPage(); //new=initialize the class, HomePage is the class name
