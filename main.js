var inquirer = require("inquirer");
var fs = require("fs");
// var clozeCard = require("./ClozeCard");
// var basicCard = require("./BasicCard");

greetingPrompt();

function greetingPrompt() {
  inquirer.prompt([{
    type: "list",
    message: "Lets do some trivia! Would you like to play the basic game or the cloze game?",
    choices: ["basic", "cloze", "do not play"],
    name: "basicOrCloze"
  }]).then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.basicOrCloze === "basic") {
      console.log("Great, lets begin!");
      basicPrompt();
    } else if (inquirerResponse.basicOrCloze === "cloze") {
      // console.log("Great, lets begin!");
      // clozeCard();
    } else {
      console.log("I didn't want to play with you anyways!");
    }

  });
}

function basicPrompt() {
  inquirer.prompt([
      // Here we create a basic text prompt.
      {
        type: "input",
        message: "Type in your question without the answer, ie 2+2 = ...",
        name: "baiscQuestion"
      },
      {
        type: "input",
        message: "Enter the answer to your question",
        name: "baiscAnswer"
      },
      {
        type: "confirm",
        message: "Would you like to submit the question?",
        name: "questionConfirm",
        default: false
      },
      {
        type: "confirm",
        message: "Would you like to add another question?",
        name: "basicAddAnother",
        default: true
      }
    ])
    .then(function(inquirerResponse) {
        // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
        if (inquirerResponse.questionConfirm) {
          fs.writeFile("basic.txt", "Inception, Die Hard", function(err) {

              // If the code experiences any errors it will log the error to the console.
              if (err) {
                return console.log(err);
              }

              // Otherwise, it will print: "movies.txt was updated!"
              console.log("movies.txt was updated!");

            }
          }
        }









        // module.exports = BasicCard;
