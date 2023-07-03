const quizQuestions = [
    {
        question: "On offering an article for Rs.48, one loss 20%. With a specific end goal to pick up 20%, what might me the offering cost?",
        options:["52", "56", "68", "72"],
        answerIndex: 3,
    },
    {
        question:"The price of 6 pencils is Rs.30 and that of 12 pens is Rs.120. What is the average of 50 pencils and 50 pens?",
        options:["6.75", "7.5 ","5", "5.75"],
        answerIndex: 1,
    },
    {
        question:"A watch sold for Rs.1440 at 10% loss, at what price it should be sold so as to earn 15% profit?",
        options:["1820", "1830", "1840", "1850"],
        answerIndex: 2,
    },
    {
        question:"An article when sold at a gain of 5% yields Rs.15 more than when sold at a loss of 5%.What is the C.P.?",
        options:["64", "80", "150", "None of these"],
        answerIndex: 2,
    },
    {
        question:"The C.P. of an article is 40% of the S.P. The percent that the S.P. is of C.P. is.....",
        options:["250%", "240%", "60%", "40%"],
        answerIndex: 0,
    },
    {
        question:"There would be 10% loss if a toy is sold at Rs. 10.80 per piece.At what price should it be sold to earn a profit of 20%?",
        options:["Rs.12","Rs.12.96", "Rs.14.40", "None of these"],
        answerIndex: 2,
    },
    {
        question:"Cost price of 21 objects is equal to selling price of 15 objects.What is the profit?",
        options:["25%", "30%", "33%", "40%"],
        answerIndex: 3,
    },
    {
        question:"A fruit seller buys 2 lemons for Rs.1 and sells at 5 for Rs.3.Find the profit percent",
        options:["10", "15", "20", "25"],
        answerIndex: 2,
    },
    {
        question:"If a chair sold for Rs.600 at a profit of 20%, then the original price of the chair is?",
        options:["Rs.540", "Rs.500", "Rs.480", "Rs.580"],
        answerIndex: 1,
    },
    {
        question:"If an article is sold at 200% profit then the ratio of its cost price to selling price will be?",
        options:["1:2", "2:1", "3:1", "1:3"],
        answerIndex: 3,
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
        contentDiv.style.backgroundColor = "rgb(189 , 181, 164)";
        contentDiv.style.color = "rgb(0 , 0 , 0)";
        return
    }

    contentDiv.style.backgroundColor = "rgb(53, 142, 143)";

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
