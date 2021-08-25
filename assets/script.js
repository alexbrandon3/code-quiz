// Timer
var timeDisplay = document.querySelector("#timer");
let secondsLeft = 0;
timeDisplay.textContent = "Time: " + secondsLeft;
var currentIndex = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;
var startScreen = document.querySelector("#window");
//Start button
var startButton = document.querySelector("#start");
function startTimer(){
    secondsLeft = 75;
    startScreen.setAttribute('class', 'hide');
    var countDown = setInterval(function(){
        secondsLeft--;
        timeDisplay.textContent = "Time: " + secondsLeft;
        if (secondsLeft === 0){
            alert('Sorry, you are out of time!');
          clearInterval(countDown);
        }
    }, 1000);
    questionContainer.removeAttribute('class', 'hide');
    questionContainer.setAttribute('class', 'questions')
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

questionContainer.setAttribute('class', 'hide');
//Checks value against questions current index
function checkAnswer(answerNum){
    var response = answerNum.getAttribute("data-value");
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
answer1.addEventListener("click", function(){
    return checkAnswer(answer1);
});
answer2.addEventListener("click", function(){
    return checkAnswer(answer2);
});
answer3.addEventListener("click", function(){
    return checkAnswer(answer3);
});
answer4.addEventListener("click", function(){
    return checkAnswer(answer4);
});