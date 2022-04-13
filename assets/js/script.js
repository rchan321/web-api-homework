var time = 100; 
var startButton = document.getElementById("start");
var questionsEl = document.getElementById('questions');
var timerEl = document.getElementById('timer');
var questionH2 = document.getElementById('question'); 

var questionIndex = 0 ;
var timerTick;
const questionsArr = [
    {
        question: "Which of these is NOT a programming language?",
        answers: [ 'Ruby', 'Python' , 'Java' , 'Apple' ] ,
        correct: 'Apple'
    } 
]


function startQuiz(){

    timerEl.textContent = time 

    timerTick = setInterval(timer(), 1000);
    getQuestion()
}

function timer(){
    --time 
    timerEl.textContent = time
    if(time<=0){
        // "Time ran out. The quiz is now over."
        clearInterval(timerTick)
    }
 }

function questionClick(){
    var currentAnswer = questionsArr[questionIndex].correct;
    if( this.textContent != currentAnswer){
     time - 10;
     timerEl.textContent = time
    }
    ++questionIndex
    console.log(questionIndex) 
    getQuestion()
}
function getQuestion(){
    if(questionIndex > questionsArr.length){
        // end game
        questionsEl.innerHTML = '';
    }
    var currentQuestion = questionsArr[questionIndex].question;
    questionH2.textContent = currentQuestion;
    var currentAnswers = questionsArr[questionIndex].answers;
    currentAnswers.forEach(answer => {
        var answerBtn = document.createElement('button');
        answerBtn.textContent = answer;
        answerBtn.onclick = questionClick;
        questionsEl.appendChild(answerBtn)
    });
}

startButton.addEventListener("click", function(e){
    e.preventDefault()
    startQuiz()
})