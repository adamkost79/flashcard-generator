module.exports = ClozeCard;


// creates an object and sets it to "dogs"
var clozeCard = {
  // creates the property "text"
  text: "",
  // creates the property "cloze" and captures the deleted portion of text
  cloze: "",
  // creates the method "partial" and contains the remainder text minus the "cloze" text
  partial:"",
  // creates the objeject

  partial: function() {
  // the 'this' keyword refers to the object it's called from
  // i.e. this.raining refers to the raining property of 'this' particular object
    if (this.raining === true) {
      console.log(this.noise);
    }
  }
};

// * The constructor should accept two arguments: `text` and `cloze`.
//
// * The constructed object should have a `cloze` property that contains _only_ the cloze-deleted portion of the text.
//
// * The constructed object should have a `partial` property that contains _only_ the partial text.
//
// * The constructed object should have a `fullText` property that contains _only_ the full text.
//
// * The constructor should throw or log an error when the cloze deletion does _not_ appear in the input text.
//
// * Use prototypes to attach these methods, wherever possible.
