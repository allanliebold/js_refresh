function Question(question, answer, correct) {
  this.question = question;
  this.answers = answer;
  this.correct = correct;
}

var q1 = new Question('Are we having fun yet? 0 - Yes, 1 - No', ['Yes', 'No'], 0); // index 0 is the correct answer
var q2 = 
