import path from "path";
import { fileURLToPath } from "url";
describe("Upload Test", () => {
  // const path = require('path'); //this (path) is a node.js module
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  before(async () => {
    await browser.url("https://the-internet.herokuapp.com/upload");
  });

  it("Simple upload test", async () => {
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
});
