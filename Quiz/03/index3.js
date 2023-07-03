const quizQuestions =[
    {
        question:"50% of a number when added to 50,is equal to a number the number is",
        options:["100", "125", "140", "150"],
        answerIndex: 0,
    },
    {
        question:"?% 0f 64 = 8",
        options:["10.5", "11.5", "12.5", "13.5"],
        answerIndex: 2,
    },
    {
        question:"The sum of two numbers is 28/25 of the first number. The second number is what percent of the first?",
        options:["25%", "11%", "12%", "None of these"],
        answerIndex: 2,
    },
    {
        question:"A fruit seller had some apples.He sells 40% apples and still has 420 apples.Originally,he had?",
        options:["588 apples", "600 apples", "672 apples", "700 apples"],
        answerIndex: 3,
    },
    {
        question:"What percentage of numbers from 1 to 70 have 1 or 9 in the unit's digit?",
        options:["1", "14", "20", "21"],
        answerIndex: 2,
    },
    {
        question:"If the income of B is 60% more than the income of A and the income of C is 20% more than income of B.Then, income of C is how much % more than income of A?",
        options:["92%", "95%", "90%", "96%"],
        answerIndex: 0,
    },
    {
        question:"The income of A is 10% more than B. The income of B is 10% less than C.The sum of income of all 3 persons is Rs. 1,30,050.Find the income of C",
        options:["Rs.40,000", "Rs.43,200", "Rs.51,500", "Rs.45,000"],
        answerIndex: 3,
    },
    {
        question:"If 20% of a=b,then b% of 20 is the same as:",
        options:["6% of a", "4% of a", "8% of a", "10% of a"],
        answerIndex: 1,
    },
    {
        question:"A Student has to obtain 33% of the total marks to pass.He got 125 marks and failed by 40 marks.The maximum marks are?",
        options:["500", "600", "800", "1000"],
        answerIndex: 0,
    },
    {
        question:"If the price of a book is decreased by 25% and then increased by 20%,then the net change in the price will be?",
        options:["10", "20", "30", "40"],
        answerIndex: 0,
    }
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