
var basicQuestion = function(basicQuestion, basicAnswer) {
  // this.cast will hold all of our question objects
  this.basicQ = [];
  //front
  this.basicQuestion = basicQuestion;
  this.basicAnswer = basicAnswer;
  // This method that creates a object object from the constructor function we required and pushes it to the `this.basicQ` array
  this.addBasicQuestion = function(x, y, z) {
    this.basicQ.push(new BasicQuestion(x, y, z));
    this.numBasicQ = this.basicQ.length;
  };
};



module.exports = basicQuestion;

// var basicCard = function bais {
// * The constructor should accept two arguments: `front` and `back`.
//
// * The constructed object should have a `front` property that contains the text on the front of the card.
//
// * The constructed object should have a `back` property that contains the text on the back of the card.
