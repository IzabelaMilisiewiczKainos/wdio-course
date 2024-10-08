import path from "path";
import { fileURLToPath } from "url";
describe("Upload Test", () => {
  // const path = require('path'); //this (path) is a node.js module
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  before(async () => {
    await browser.url("https://the-internet.herokuapp.com/upload");
  });

  it.skip("Simple upload test", async () => {
    // Resolve the file path
    const filePath = path.join(__dirname, "../", "data", "workday-logo.svg"); //__dirname is the current directory, '../..' is the parent directory, 'data' is the directory where the file is located,

    // Upload the file
    const remoteFilePath = await browser.uploadFile(filePath); //uploadFile is a WebdriverIO method that uploads a file to the browser

    //set file path value in the input field
    await $("#file-upload").setValue(remoteFilePath); //setValue is a WebdriverIO method that sets the value of an input field, it will add file to inpyt field
    await $("#file-submit").click(); //click on the submit button

    //assertion
    await expect($("h3")).toHaveText("File Uploaded!"); //assertion to check if the file is uploaded successfully
  });

  it("Upload on a hidden input field", async () => {
    //open url
    await browser.url("/cart");

    // Resolve the file path
    const filePath = path.join(__dirname, "../", "data", "picture.jpg");

    // Upload the file
    const remoteFilePath = await browser.uploadFile(filePath);

    // Check the element in the browser context
    await browser.execute(() => {
      // This function allows you to run code inside the browser context, where the document object is available (HTML DOM). By using browser.execute(), we ensure that our JavaScript code (which interacts with the DOM) is running in the browser, and hence can safely interact with the DOM.
      const element = document.querySelector("#upfile_1");
      console.log(element);
      if (element) {
        //if condition is used to ensure that the element exists on the page before attempting to manipulate it. This is a common defensive programming technique to avoid errors like undefined or null references.
        element.className = ""; // Remove hidden class
      }
    });

    //set file path value in the input field
    await $("#upfile_1").setValue(remoteFilePath);
    await $("#upload_1").click();

    //assertion
    await expect($("#wfu_messageblock_header_1_1")).toHaveText(
      "File picture.jpg uploaded successfully",
    );

    //sometimes class have style display:none, so we can remove that class and make it visible we can also set display:block, the easiest way is to remove the class
  });
});
