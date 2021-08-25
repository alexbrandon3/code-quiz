// Timer
var timeDisplay = document.querySelector("#timer");
var secondsLeft = 0;
timeDisplay.textContent = "Time: " + secondsLeft;
var currentIndex = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;
//Start button
var startButton = document.querySelector("#start");
function startTimer(){
    var secondsLeft = 75;
    setInterval(function(){
        secondsLeft--;
        timeDisplay.textContent = "Time: " + secondsLeft;
        if (secondsLeft === 0){
            alert('Sorry, you are out of time!');
          clearInterval(secondsLeft);
        }
    }, 1000);
};
startButton.addEventListener("click", startTimer);

//Sets questions into an array
var questions = [
    {
        questionText: "Commonly used data types DO NOT include:",
        answer1:"strings",
        answer2: "booleans",
        answer3: "alerts",
        answer4: "numbers",
        correctAnswer: "alerts"
    },
    {
        questionText: "The condition in an if / else statement is enclosed within ______.",
        answer1:"quotes",
        answer2: "curly brackets",
        answer3: "parentheses",
        answer4: "square brackets",
        correctAnswer: "parentheses"
    },
    {
        questionText: "Arrays in JavaScript can be used to store ______.",
        answer1:"numbers and strings",
        answer2: "other arrays",
        answer3: "booleans",
        answer4: "all of the above",
        correctAnswer: "all of the above"
    },
    {
        questionText: "String values must be enclosed within ______ when being assigned to variables.",
        answer1:"commas",
        answer2: "curly brackets",
        answer3: "quotes",
        answer4: "parentheses",
        correctAnswer: "quotes"
    },
    {
        questionText: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer1:"JavaScript",
        answer2: "terminal/bash",
        answer3: "for loops",
        answer4: "console.log",
        correctAnswer: "console.log"
    }
];

//Displays questions dynamically
var questionContainer = document.querySelector(".questions");
var question = document.createElement("h2");
question.textContent = questions[currentIndex].questionText;

var answer1 = document.createElement('button');
answer1.textContent = questions[currentIndex].answer1;
answer1.setAttribute("data-value", questions[currentIndex].answer1);

var answer2 = document.createElement('button');
answer2.textContent = questions[currentIndex].answer2;
answer2.setAttribute("data-value", questions[currentIndex].answer2);

var answer3 = document.createElement('button');
answer3.textContent = questions[currentIndex].answer3;
answer3.setAttribute("data-value", questions[currentIndex].answer3);

var answer4 = document.createElement('button');
answer4.textContent = questions[currentIndex].answer4;
answer4.setAttribute("data-value", questions[currentIndex].answer4);

questionContainer.append(question);
questionContainer.append(answer1);
questionContainer.append(answer2);
questionContainer.append(answer3);
questionContainer.append(answer4);

//Checks value against questions current index
function checkAnswer1(){
    var response = answer1.getAttribute("data-value");
    var rightAnswer = questions[currentIndex].correctAnswer;
    if(response === rightAnswer){
        currentIndex++;
        correctAnswers++;
        question.textContent = questions[currentIndex].questionText;
        answer1.textContent = questions[currentIndex].answer1;
        answer2.textContent = questions[currentIndex].answer2;
        answer3.textContent = questions[currentIndex].answer3;
        answer4.textContent = questions[currentIndex].answer4;
    }
    else{
        secondsLeft -= 10;
        timeDisplay.textContent = "Time: " + secondsLeft;
        currentIndex++;
        incorrectAnswers++;
        question.textContent = questions[currentIndex].questionText;
        answer1.textContent = questions[currentIndex].answer1;
        answer2.textContent = questions[currentIndex].answer2;
        answer3.textContent = questions[currentIndex].answer3;
        answer4.textContent = questions[currentIndex].answer4; 
    }
}
function checkAnswer2(){
    var response = answer2.getAttribute("data-value");
    var rightAnswer = questions[currentIndex].correctAnswer;
    if(response === rightAnswer){
        currentIndex++;
        correctAnswers++;
        question.textContent = questions[currentIndex].questionText;
        answer1.textContent = questions[currentIndex].answer1;
        answer2.textContent = questions[currentIndex].answer2;
        answer3.textContent = questions[currentIndex].answer3;
        answer4.textContent = questions[currentIndex].answer4;
    }
    else{
        secondsLeft -= 10;
        timeDisplay.textContent = "Time: " + secondsLeft;
        currentIndex++;
        incorrectAnswers++;
        question.textContent = questions[currentIndex].questionText;
        answer1.textContent = questions[currentIndex].answer1;
        answer2.textContent = questions[currentIndex].answer2;
        answer3.textContent = questions[currentIndex].answer3;
        answer4.textContent = questions[currentIndex].answer4;
    }
}
function checkAnswer3(){
    var response = answer3.getAttribute("data-value");
    var rightAnswer = questions[currentIndex].correctAnswer;
    if(response === rightAnswer){
        currentIndex++;
        correctAnswers++;
        question.textContent = questions[currentIndex].questionText;
        answer1.textContent = questions[currentIndex].answer1;
        answer2.textContent = questions[currentIndex].answer2;
        answer3.textContent = questions[currentIndex].answer3;
        answer4.textContent = questions[currentIndex].answer4;
    }
    else{
        secondsLeft -= 10;
        timeDisplay.textContent = "Time: " + secondsLeft;
        currentIndex++;
        incorrectAnswers++;
        question.textContent = questions[currentIndex].questionText;
        answer1.textContent = questions[currentIndex].answer1;
        answer2.textContent = questions[currentIndex].answer2;
        answer3.textContent = questions[currentIndex].answer3;
        answer4.textContent = questions[currentIndex].answer4;;
    }
}
function checkAnswer4(){
    var response = answer4.getAttribute("data-value");
    var rightAnswer = questions[currentIndex].correctAnswer;
    if(response === rightAnswer){
        currentIndex++;
        correctAnswers++;
        question.textContent = questions[currentIndex].questionText;
        answer1.textContent = questions[currentIndex].answer1;
        answer2.textContent = questions[currentIndex].answer2;
        answer3.textContent = questions[currentIndex].answer3;
        answer4.textContent = questions[currentIndex].answer4;
    }
    else{
        secondsLeft -= 10;
        timeDisplay.textContent = "Time: " + secondsLeft;
        currentIndex++;
        incorrectAnswers++;
        question.textContent = questions[currentIndex].questionText;
        answer1.textContent = questions[currentIndex].answer1;
        answer2.textContent = questions[currentIndex].answer2;
        answer3.textContent = questions[currentIndex].answer3;
        answer4.textContent = questions[currentIndex].answer4;;
    }
}
answer1.addEventListener("click", checkAnswer1);
answer2.addEventListener("click", checkAnswer2);
answer3.addEventListener("click", checkAnswer3);
answer4.addEventListener("click", checkAnswer4);
