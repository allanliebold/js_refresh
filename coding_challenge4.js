// Coding Challenge
function Question(question, answers, correct) {
  this.question = question;
  this.answers = answers;
  this.correct = correct;
}

Question.prototype.displayQuestion = function() {
  console.log(this.question);
  
  for (var i = 0; i < this.answers.length; i++) {
    console.log(i + ': ' + this.answers[i]);  
  }
}

var q1 = new Question('Are we having fun yet?', ['Yes', 'No'], 0); // index 0 is the correct answer
var q2 = new Question('What is the answer?', ['This', 'That', 'Other'], 2);
var q3 = new Question('This isn\'t not untrue.', ['True', 'False'], 1); 
var q4 = new Question();

var questions = [q1, q2, q3];

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();

var answer = parseInt(prompt('Please select the correct answer.'));
