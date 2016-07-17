var LetterCheck = function(letter) {
  this.char = letter;
  this.show = false;
  this.showLetter = function() {
    return !(this.show) ? "  -  " : this.char;
  };
};  

module.exports = LetterCheck;