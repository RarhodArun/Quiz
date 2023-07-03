const quizQuestions = [
    {
        question: "If two pipes function simultaneously, the reservoir will be filled in 12 hours. One Pipe fills the reservoir 10 hours faster than the other.How many hours does it take the second pipe to fill the reservoir?",
        options:["45hr","17hr","40hr","30hr"],
        answerIndex: 3,
    },
    {
        question: "A Cistern has 2 taps which fill it in 12 minutes and 15 minutes respectively,There is also a waste pipe in the cistern .When all three are opened, the empty cistern is full in 20 minutes. How long will the waste pipe take to empty the cistern?",
        options:["20min","40min","10min","5min"],
        answerIndex:2,
    },
    {
        question: "If two pipes function simultaneously, the reservoir will be filled in 12 hours. One Pipe fills the reservoir 10 hours faster than the other.How many hours does it take the second pipe to fill the reservoir?",
        options:["45hr","17hr","40hr","30hr"],
        answerIndex: 3,
    },
    {
        question:"Two pipes can fill the tank in 10hrs and 12hrs respectively while a third,pipe empties the full tank in 20hrs,If all the three pipes operate simultaneously, in how much time will the tank will be filled?",
        options:["10hrs","5hrs","8hrs","7hrs"],
        answerIndex:3,
    },
    {
        question:"An Electric pump can fill a tank in 3hrs.Because of a leak in,the tank took 3.30hrs to fill the tank.If the tank is full,how much time will the leak take to empty the tank?",
        options:["21hrs","12hrs","10hrs","32hrs"],
        answerIndex:0,
    },
    {
        question:"Two pipes A and B can fill the tank in 36 min and 45min Respectively.A water pipe C caan empty the tank in 30min.First A and B are opened ,after 7min, C is also is opened.In how much time the tank will be full",
        options:["39min","40min","45min","50min"],
        answerIndex:0,
    },
    {
        question:"Two pipes can fill the tank in 10hrs and 12hrs respectively while a third,pipe empties the full tank in 20hrs,If all the three pipes operate simultaneously, in how much time will the tank will be filled?",
        options:["10hrs","7hrs","8hrs","8hrs"],
        answerIndex:1,
    },
    {
        question: "A Cistern has 2 taps which fill it in 12 minutes and 15 minutes respectively,There is also a waste pipe in the cistern .When all three are opened, the empty cistern is full in 20 minutes. How long will the waste pipe take to empty the cistern?",
        options:["10min","40min","20min","5min"],
        answerIndex:0,
    },
    {
        question:"Two pipes A and B can fill the tank in 36 min and 45min Respectively.A water pipe C caan empty the tank in 30min.First A and B are opened ,after 7min, C is also is opened.In how much time the tank will be full",
        options:["42min","40min","39min","50min"],
        answerIndex:2,
    },
    {
        question:"An Electric pump can fill a tank in 3hrs.Because of a leak in,the tank took 3.30hrs to fill the tank.If the tank is full,how much time will the leak take to empty the tank?",
        options:["31hrs","12hrs","10hrs","21hrs"],
        answerIndex:3,
    },
];

const totalNumberofQuestions = quizQuestions.length;
let score = 0;
let currentQuestionIndex = 0;
 
const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const questionCountDiv = document.getElementById("question-count");
const scoreDiv = document.getElementById("score");

const contentDiv = document.getElementsByClassName("content-div")[0];

scoreDiv.style.visibility = "hidden";
nextButton.style.visibility = "hidden";
questionCountDiv.style.visibility = "hidden";

startButton.addEventListener("click",startQuiz)

nextButton.addEventListener("click",nextButtonHandler)

function nextButtonHandler(){
    

    const userAnswer = document.querySelectorAll("[name = 'ans']:checked");

    if(userAnswer.length===0){
        contentDiv.style.backgroundColor = "rgb(255 , 51, 51)";
        contentDiv.style.color = "rgb(0 , 0 , 0)";
        return
    }

    contentDiv.style.backgroundColor = "#78e08f";

    calculateScore(userAnswer);

    currentQuestionIndex++;


    if (currentQuestionIndex > totalNumberofQuestions - 1){
        // Last Question has been reached, No more question to display 
        //TODO
        questionCountDiv.style.visibility = "hidden";
        scoreDiv.style.visibility = "hidden";
        contentDiv.innerHTML = `<div style="color : Black ; text-align: center;">You Scored : ${score} out of ${totalNumberofQuestions}</div>`;
        nextButton.style.visibility = "hidden";
        return;
    }

    updateProgressBar()// to add question and update score

    showQuestion();
}

function calculateScore(userAnswer){
    quizQuestions[currentQuestionIndex].answerIndex
    if(parseInt(userAnswer[0].value)===quizQuestions
    [currentQuestionIndex].answerIndex){

        console.log("Correct Answer");
        score++
    }
}

function startQuiz(){
    //console.log("Start Quiz")
 scoreDiv.style.visibility = "visible";
nextButton.style.visibility = "visible";
questionCountDiv.style.visibility = "visible";
startButton.style.visibility = "hidden";

showQuestion();
}

function showQuestion(){
    let questionHTML = `<div>${currentQuestionIndex + 1}) ${quizQuestions[currentQuestionIndex].question}</div>`;

for (let index = 0; index < quizQuestions[currentQuestionIndex].options.length; index++) {
    const option = quizQuestions[currentQuestionIndex].options[index];
    
    questionHTML = questionHTML +
          `<div>
               <input type="radio" name= "ans" id="r${index}" value = "${index}" />
               <label for="r${index}">${option}</label>
          </div>`;
   }

   contentDiv.innerHTML = questionHTML;
}

function updateProgressBar(){
    questionCountDiv.innerText = `Question ${currentQuestionIndex + 1} / ${totalNumberofQuestions}`;
    scoreDiv.innerText = `Score ${score}`;
}

