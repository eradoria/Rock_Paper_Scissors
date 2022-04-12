// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
const { get } = require('eslint/lib/config/environments');
const { resetDefaultConfig } = require('eslint/lib/testers/rule-tester');
// brings in the readline module to access the command line
const readline = require('readline');
const { resourceLimits } = require('worker_threads');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// the function that will be called by the unit test below
const rockPaperScissors = (hand1, hand2) => {

  // Write code here
  const PlayGame = () => {
     if (hand1 === "paper" && hand2 === "rock"){
      return ("Hand1 Wins!")
    } else if (hand1 === "paper" && hand2 === "scissors"){
      return ("Hand2 Wins!")
    } else if (hand1 === "rock" && hand2 === "scissors"){
      return ("Hand1 Wins!")
    } else if (hand1 === "rock" && hand2 === "paper"){
      return ("Hand2 Wins!")
    } else if (hand1 === "scissors" && hand2 === "paper"){
      return ("Hand1 Wins!")
    } else if (hand1 === "scissors" && hand2 === "rock"){
      return ("Hand2 Wins!")
    } 
      else{
        return ("It's a tie!")
    }
    // Use the unit test to see what is expected
  }

  if (hand1 !== hand1.toLowerCase() || hand2 !== hand2.toLowerCase() 
  || hand1 !== hand1.replace(/\s+/g, '') || hand2 !== hand2.replace(/\s+/g, '')){
    return ("Try Again")
  }else{
    return PlayGame()
  }
}


// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}


// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built returns the expected output.
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  // always returns ask the user for another input
  getPrompt();

}
