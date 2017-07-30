exports.cards = [
{
  "text": "The capital of Texas is Austin",
  "cloze": "Austin",
  "present": "The capital of Texas is  ___________________"
},
{
  "text": "George Washington was the first President of the US.",
  "cloze": "Washington",
  "present": "George ___________________ was the first President of the US."
},
{
  "text": "Ben Franklin is a member of the International Swimming Hall of Fame",
  "cloze": "Swimming",
  "present": "Ben Franklin is a member of the International ___________________ Hall of Fame"
},
{
  "text": "R. Nixon is the only president to resign.",
  "cloze": "Nixon",
  "present": "R. ___________________ is the only president to resign."
},
{
  "text": "Teddy Roosevelt fought in the Spanish-American War.",
  "cloze": "Roosevelt",
  "present": "Teddy ___________________ fought in the Spanish-American War."
},
{
  "text": "George Bush was a PT boat captain.",
  "cloze": "Bush",
  "present": "George ___________________ was a PT boat captain in WWII."
}
];

// fs is a core Node package for reading and writing files
var fs = require("fs");

fs.readFile("cards.txt", "utf8", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }

  // Break the string down by comma separation and store the contents into the output array.
  var output = data.split(",");

  // Loop Through the newly created output array
  for (var i = 0; i < output.length; i++) {

    // Print each element (item) of the array/
    // console.log(output[i]);
  }
});
