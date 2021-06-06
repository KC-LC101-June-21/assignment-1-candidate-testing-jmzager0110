const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ();
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ("Who was the first American woman in space? ");
let correctAnswer = ("Sally Ride");
let candidateAnswer = ();
let questions;
let correctAnswers;
let candidateAnswers;


function askForName(let candidateName = input.question("What is your name?")); {
  // TODO 1.1b: Ask for candidate's name //

}
let candidateName = input.question("What is your name?");
function askQuestion(let candidateAnswer = input.question(question)); {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //


}
let candidateAnswer = input.question(question);

//Future Steps
function gradeQuiz(candidateAnswers) {

  let grade;
  
  return grade;
}
// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
if candidateAnswer === correctAnswer {
  console.log("That is correct!");
} else {
  console.log("That is not correct!");
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  //Shouldn't 1.1.c Be the greeting response to the candidate entering their name?
console.log("Hello " + candidateName + "1");

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};