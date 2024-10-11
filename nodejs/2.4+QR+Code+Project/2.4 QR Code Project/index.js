/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";
import { Console } from "console";


inquirer
  .prompt([
    {
      message: "type your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    var url = answers.URL;
    var qr_image = qr.image(url);
    qr_image.pipe(fs.createWriteStream("qr-image.png"));
    fs.writeFile("urll.txt", url, err => {
      if (err) throw err;
      console.log("file saved");

    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });