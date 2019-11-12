// quiz begins with a click button (addeventlistener) "start quiz"
// on either side of the screen is a navigation option for "view highscores" & "Time"
// Time value begins at 0
// after start quiz button is clicked the user is presented with a series of questions (6)
// The timer begins countdown as soon as start quiz button is clicked (90 seconds)
// each question gets 15 seconds to complete, if not completed or incorrect answer then a -15 second penalty
// Answering quickly and correctly results in a higher score
// When questions are answered/or when time runs out the user is presented with their final score & give initials
// final score & initials are then stored in localStorage

// 1) when start button is clicked first question begins (addeventlistener) 
// & timer starts countdown (90 seconds)


// 2) after first question is completed display correct/incorrect, next question in the array is presented


// 3) if question is correct then move to next question and add 5 points to score
//   if incorrect then deduct -15 seconds from time & move on to next question


// 4) run through all 6 questions, if time is left then add remaining seconds to score.
//    if time runs out then stop quiz and display final score
//    prompt user to enter initials & save to localStorage
