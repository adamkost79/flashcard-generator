var fs = require("fs");
var inquirer = require("inquirer");


// link to files


var Card = require("./clozeCard.js");
var questions = require("./cards.js");


//variables

var text = "";
var cloze = "";
var partial = "";

var cardArray = [];

var count = 0;


//functions

function questionPrompt() {
  inquirer
    .prompt([{
      type: "list",
      message: "Would you like to create or answer a question?",
      choices: ["Create", "Answer", "Exit"],
      name: "mainMenu"
    }])

    .then(function(inquirerResponse) {
      // If the user selects create we make a new question
      if (inquirerResponse.mainMenu === "Create") {
        console.log("Great, lets create a question!");
        createPrompt();
      }
      // If the user selects create we make a new question

      if (inquirerResponse.mainMenu === "Answer") {
        console.log("Cool, lets answer some questions");
        answerPrompt();
      }

      if (inquirerResponse.mainMenu === "Exit") {
        console.log("Goodbye");
        process.exit();
      }
    });
}

function createPrompt() {
  inquirer
  .prompt([
    // Here we create the answer prompt
    {
      type: "input",
      message: "Type in the quesiton you would like to add",
      name: "text"
    },
    {
      type: "input",
      message: "What text would you like to remove for the answer?",
      name: "cloze"
    }
  ]).then(function(inquirerResponse) {
    // push the inputs to the global variables
    text = inquirerResponse.text;
    //console.log(inquirerResponse.text)
    //console.log("text: " + text)
    cloze = inquirerResponse.cloze;
    console.log(inquirerResponse.cloze);
    // console.log("cloze: " + cloze);


    //take the content and creat a card object
    var newCard = new Card(inquirerResponse.text, inquirerResponse.cloze);
    partial = newCard.present;
    console.log("Your question will look like : " + partial);

    console.log("The answer to the question will look like: " + newCard.cloze);

    // Push new card to cards text file
    fs.appendFile("cards.txt", JSON.stringify(newCard, null, 2) + "\n", function(err) {
      if (err) {
        console.log(err);
      }
    });
    questionPrompt();

  });
}

function callQuestions() {
  fs.readFile("BasicCard.js", "tf8", function(err, data) {
    if (err) {
      return console.log(err);
    }
    console.log("data:" + data);
    console.log("data length:" + data.length);

    var newArray = [];

    cardArray = data.toString().split("{");
    var arrLength = cardArray.length;
    console.log("cardArray length: " + arrLength);

    cardArray.forEach(function(item) {
      newArray.push(item);
    });

    console.log(newArray);
    console.log(newArray.length);
  });
}

function answerPrompt() {
  inquirer.prompt([{
      type: "input",
      message: questions.cards[count].present,
      name: "userAnswer"
    }])
    .then(function(inquirerResponse) {
        //console.log("answer.useranswer: " + answer.userAnswer);
      if(inquirerResponse.userAnswer === questions.cards[count].cloze) {
        console.log("You got it right");
      } else {
        console.log("You got it wrong");
      }

      count++;

      if (count < 6) {
        answerPrompt();
      } else {
        console.log("Thats all there is");
        count = 0;
        questionPrompt();
      }
    });
}

questionPrompt();
