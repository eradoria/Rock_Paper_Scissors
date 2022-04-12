# JS211_CurrentDateTimeProject[![CircleCI](https://circleci.com/gh/AustinCodingAcademy/javascript-workbook/tree/gh-pages.svg?style=svg)](https://circleci.com/gh/AustinCodingAcademy/javascript-workbook/tree/gh-pages)

![](http://en.gravatar.com/userimage/107370100/a08594145564536138dfaaf072c7b241.png)

# Austin Coding Academy

## JavaScript 211 Project: Rock, Paper, Scissors

## Project Checklist

1. Fork and Clone [Rock, Paper, Scissors Repo](https://github.com/AustinCodingAcademy/JS211_RockPaperScissorsProject.git)
1. Ensure you have installed all dependencies/packages: `npm i`
1. Practice running the unit tests for the program:
    * `npm test main.js`
1. Use a whiteboard to find a solution to the Rock, Paper, Scissors program
1. Translate the broad ideas to pseudo code
1. Convert the pseudo code to real JavaScript Code
1. Type into your text editor the JavaScript code you've come up with one step at a time
1. Work through your bugs.
1. Play the game with the command: `node main.js`
1. Achieve green checks for each of your unit tests.

******
******

# Rock, Paper, Scissors (R.P.S) Overview

Build a function that will take in an input from a user then another input from another user and compare them against one another to determine the winner of the game!

## Project Objective - R.P.S.

1. Build a rock, paper, scissors game.
1. Use the code plan below to get started.
1. Start out by white boarding—which means writing in English (no code)—each step that needs to be coded.

#### Code Planning R.P.S.

1. User1 input of rock, paper, or scissors.
1. User2 input of rock, paper, or scissors.
1. Compare User1 input to User2 input.
1. If User1 input is 'rock' and User2 input is 'scissors', User1 wins.
1. If User1 input is 'rock' and User2 input is 'paper', User2 wins.
1. If User1 input is 'rock' and User2 input is 'rock', it's a tie.
1. If User1 input is 'paper' and User2 input is 'rock', User1 wins.
1. If User1 input is 'paper' and User2 input is 'scissors', User2 wins.
1. If User1 input is 'paper' and User2 input is 'paper', it's a tie.
1. If User1 input is 'scissors' and User2 input is 'paper', User1 wins.
1. If User1 input is 'scissors' and User2 input is 'rock', User2 wins.
1. If User1 input is 'scissors' and User2 input is 'scissors', it's a tie.

*Can you think of a simpler way?*

### Follow-Up Video - R.P.S.

### [Repo Overview](https://player.vimeo.com/video/377156267)

******

#### Push Yourself Further

1. What should the program return if the user inputs something that isn't "rock", "paper", or "scissors"?
1. Can you use `.trim()` to solve the problem if a user types in a space with their input?
1. Minimize redundancy: D.R.Y. up your code. Are there ways to not type as much as you've typed? Can you make the code smaller?
1. Compartmentalize your code into individual functions. This game doesn't have to run just one function, can you pull code blocks out and put them into other functions that can be called from `rockPaperScissors`?

### Hints

1. Read ALL of the comments in `main.js`
1. Read the Objective and Code Planning section above.
1. Use the [JS Docs at MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) to convert long if/else statements to switch case statements.
1. Push yourself further
1. **Clone, setup, testing, and running instructions for all projects is below**

******

## Cloning Your Project

1. Click the 'Fork' button (choose your account if prompted).
1. Copy HTTPS URL from your forked repository
1. In your terminal/gitBash/CommandPrompt navigate (using `cd`) into a directory where you want to start keeping your repositories. (`/jsDevFolder`)
1. Clone your new repository by typing `git clone <forked clone URL>` (the HTTPS
URL you copied above)
  ![Forking a repository](https://docs.google.com/drawings/d/1tYsLHaLo8JRdp0xC1EZrAo0o9Wvv4S5AD937cokVOBk/pub?w=960&h=720)
1. Now go into the new directory by using `cd project-repo`

1. Add the base repository as an upstream
    `git remote add upstream https://github.com/AustinCodingAcademy/<PROJECT-REPO>.git`

1. Check the configuration of your remotes with `git remote -v`, it should look
very similar to this (except it'll be YOUR username)

```bash
$ git remote -v

origin  git@github.com:username/javascript-workbook.git (fetch)
origin  git@github.com:username/javascript-workbook.git (push)
upstream    git@github.com:AustinCodingAcademy/javascript-workbook.git (fetch)
upstream    git@github.com:AustinCodingAcademy/javascript-workbook.git (push)
```

### Setup

1. From your project directory, run `npm i` to tell NPM to install all the
node modules we use in this class (see `package.json`)
1. Use your textEditor (VS Code) to change your files.
1. When you're finished `git status`, stage your file `git add .`, commit your changes `git commit -m "functions working"`, and push to
GitHub `git push`
    ```bash
    git status
    git add .
    git commit -m "Initial Commit"
    git push origin gh-pages
    ```


1. Now go to your forked repository on GitHub (at
  https://github.com/your-username/javascript-workbook). A little yellow box
  should have popped up asking you to make a Pull Request. Click to review.

1. Click "Create Pull Request"

1. Every time you make a change *and push to GitHub*, this PR will automatically
update. No need to do it more than once.

### Running the apps

Simply run `node path/to/file.js`

example `node 01week/rockPaperScissors.js`

### Running Tests

Tests are a great way to make sure your code works the way you planned it would,
and to make sure you don't break something in the future. We will be using them
to test our understanding of the lesson. It's also our main way to assign grades
for an assignment.

To run a the tests on a file run `npm test path/to/file.js`, etc.

### Running the Linter

Simply run `npm run lint`

#### Running the Server

1. Run `npm start`
1. To break out of the server, press `ctrl` + `c`

#### Get latest workbook updates

1. To get the latest code/homework/test updates, be sure to have a "clean
working directory" by committing or removing all of your changes. You check for
a "clean working environment" by running `git status` and making sure no files
show up.

1. Run `git pull upstream gh-pages`

![Contributing workflow](https://docs.google.com/drawings/d/1WeKQxOHgPKfwjy_eKtlJO62Fu4XTCWFeqkAh1oIqICM/pub?w=960&h=720)


