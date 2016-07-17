var inquirer = require('inquirer');
var WordCheck = require('./word.js');
var Game = require('./game.js');

var guessesRemaining = 6;
var currentWord = '';
var letterGuessed = [],

initialReset = function (){
  console.log('*HINT* Words are generated thru a list of car makers');
  resetGuessesRemaining();
  currentWord = new WordCheck(Game.words.wordList[Math.floor(Math.random()* Game.words.wordList.length)]);
  currentWord.getLetters();
  askForLetter();
};

var resetGuessesRemaining = function(){
  guessRemaining = 6;
};

var askForLetter = function(){
  inquirer.prompt([{
      name: "guess",
      message: "Enter a letter (LOWERCASE ONLY): "
    }
  ]).then(function(answer){
    letterGuessed.push(answer.guess);
    var tempNum = currentWord.checkLetter(answer.guess);
    if (tempNum == 0){
      console.log('That letter is not in the word');
      guessesRemaining--;
    } else { 
      console.log('Awesome!  You guessed a letter in the word');
      if(currentWord.wordGuessed()){
        console.log('You guessed the word: ' + currentWord.showWord());
        return;
      }
    }
    console.log('Guesses remaining: ' + guessesRemaining);
    console.log(currentWord.showWord());
    console.log('Letters already guessed: ' + letterGuessed);
    if ((guessesRemaining > 0) && (currentWord.guessed == false)){
      askForLetter();
    } else if(guessesRemaining == 0){
      console.log('Sorry, out of guesses. The word is: ' + currentWord.showWord());
    } else {
      console.log(currentWord.showWord());
    }
  });
}

initialReset();