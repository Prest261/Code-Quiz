// quiz begins with a click button (addeventlistener) "start quiz"
// on either side of the screen is a navigation option for "view highscores" & "Time"
// Time value begins at 0
// after start quiz button is clicked the user is presented with a series of questions (6)
// The timer begins countdown as soon as start quiz button is clicked (90 seconds)
// each question gets 15 seconds to complete, if not completed or incorrect answer then a -15 second penalty
// Answering quickly and correctly results in a higher score
// When questions are answered/or when time runs out the user is presented with their final score & give initials
// final score & initials are then stored in localStorage

console.log(questions);

var areagame = document.querySelector("#game");
var showTimer = document.querySelector("#Timer");
var showHighScore = document.querySelector("#High-Score");
var startButton = document.querySelector("#startButton");
var inputArea = document.querySelector("#input");
var nameArea = document.querySelector("#nameButton");
var secondsLeft = 90;
var currentQ = 0;
var timer;
var score = 0;

// 1) when start button is clicked first question begins (addeventlistener)
startButton.addEventListener("click", quizQuestions);

// & timer starts countdown (90 seconds)

function Countdown() {
  secondsLeft--;
  console.log("secondsLeft", secondsLeft);
  // show  secondsleft on the DOM
  showTimer.textContent = secondsLeft;
  console.log(showTimer);

  if (secondsLeft < 1) {
    // then end quiz
    gameEnd();
  }
}

// function to loop through the array of questions

function quizQuestions() {
  console.log("start");
  timer = setInterval(Countdown, 1000);

  nextQuestion();
}

function nextQuestion() {
  console.log("next question", currentQ, questions.length);

  areagame.innerHTML = "";
  if (currentQ >= questions.length) {
    console.log("game end");
    gameEnd();
  } else {
    console.log("ELSE");
    var questionEl = document.createElement("p");
    questionEl.textContent = questions[currentQ].title;
    areagame.appendChild(questionEl);

    for (var i = 0; i < questions[currentQ].choices.length; i++) {
      console.log("i", i);
      var choice = document.createElement("button");
      choice.textContent = questions[currentQ].choices[i];
      choice.setAttribute("class", "choices");
      choice.setAttribute("value", questions[currentQ].choices[i]);
      choice.onclick = verify;
      areagame.appendChild(choice);
    }

    // show question  questions[currentQ]
    // show responses
    // onclick to the responses
  }
}
function verify() {
  console.log(this);
  console.log(this.value);

  var answer = questions[currentQ].answer;
  console.log(answer);
  if (this.value === answer) {
    this.setAttribute("style", "color:white; background-color:green");
  } else {
    this.setAttribute("style", "color:white; background-color:red");
    secondsLeft = secondsLeft - 15;
    // show the seconds
  }

  currentQ++;
  setTimeout(nextQuestion, 1000);

  // if correct
  // show color
  // next question
  // incorrect
  // show color
  // reduce seconsleft
  // next question
}
function gameEnd() {
  // clear the timer
  clearInterval(timer);
  // show the results
  // ask for name
  var input = document.createElement("input");
    input.textContent = inputField;
    var inputField = input.setAttribute("id", "inputField");
    inputArea.appendChild(input);
  var nameBtn = document.createElement("button");
    nameBtn.textContent = "Submit Name";
    nameArea.appendChild(nameBtn);
  nameBtn.addEventListener("click", function() {
    // save in local storage
    var scoreToSave = [{"initial": inputField, "score": secondsLeft}];
    scoreToSave.push();
    var scoreToSaveStringified = JSON.stringify(scoreToSave);
    localStorage.setItem("name", scoreToSaveStringified);
    console.log(scoreToSave);
    localStorage.setItem("score", secondsLeft);
    console.log(secondsLeft);
    localStorage.getItem("name", inputField);
    console.log(inputArea)
    localStorage.getItem("secondsleft", secondsLeft);
    console.log(secondsLeft);

  })
    
}

// function to show the user if their answer is correct or not

// 2) after first question is completed display correct/incorrect, next question in the array is presented

// 3) if question is correct then move to next question and add 5 points to score
//   if incorrect then deduct -15 seconds from time & move on to next question

// 4) run through all 6 questions, if time is left then add remaining seconds to score.
//    if time runs out then stop quiz and display final score
//    prompt user to enter initials & save to localStorage
