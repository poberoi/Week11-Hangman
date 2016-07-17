var LetterCheck = require('./letter.js');

var WordCheck = function(word){
  
  this.word = word;
  this.letters = [];
  this.guessed = false;
  
  this.getLetters = function(){
    for(i=0;i<this.word.length;i++){
      this.letters.push(new LetterCheck(this.word[i]));
    }
  };
  
  this.checkLetter = function(guessLetter){
    var num = 0;
    for(i=0;i<this.letters.length;i++){
      if (this.letters[i].char == guessLetter){
        this.letters[i].show = true;
        num++;
      }
    }
    return num;
  };
  
  this.wordGuessed = function(){
    this.guessed = this.letters.every(function(letter){
      return letter.show;
    });
    return this.guessed;
  };
  
  this.showWord = function(){
    var wordHolder = '';
    for(i=0;i<this.letters.length;i++){
      wordHolder += this.letters[i].showLetter();
    }
    return wordHolder;
  };
}

module.exports = WordCheck;