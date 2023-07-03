const quizQuestions = [
    {
        question:"Find the average of numbers 87,84,86,90,82,88 and 78",
        options:["85", "84", "83", "82"],
        answerIndex: 0,
    },
    {
        question:"The average of 4 terms is 20 and the 1st term is 1/3 of the remaining terms. What will be the first number?",
        options:["30", "20", "60", "80"],
        answerIndex: 1,
    },
    {
        question:"The average of A,B and C was 25 years and that of B and C was 25 years. A's present age is?",
        options:["30 years", "25 years", "40 years", "42 years"],
        answerIndex: 1,
    },
    {
        question:"The average of 7 consecutive number is n.If the next two numbers are included,the average will?",
        options:["Increased by 2", "Remains the same", "Increased by 1", "Increased by 2"],
        answerIndex: 2,
    },
    {
        question:"For 9 innings,Boman has an average of 75 runs.In the tenth inning,he scores 100 runs,thus increasing his average.His new average is?",
        options:["75", "100", "72", "77.5"],
        answerIndex: 3,
    },
    {
        question:"The average of 5 terms is 250.If the first 4 terms are 45,42,119 and 84, what will be the last term?",
        options:["56", "-20", "-40", "-50"],
        answerIndex: 2,
    },
    {
        question:"If the average number of 8 terms is given to be 40 and the average of first 6 terms is given to be 35. What is the avrage of the remaining 2 terms?",
        options:["30", "55", "40", "42"],
        answerIndex: 1,
    },
    {
        question:"The average of first 10 natural number is?",
        options:["5", "5.5", "6", "6.5"],
        answerIndex: 1,
    },
    {
        question:"The average of 10 numbers is 23.If each number is increased by 4,what will be the new average be?",
        options:["23", "25", "26", "27"],
        answerIndex: 3,
    },
    {
        question:"In the first 10 overs of a cricket game,the run rate was only 3.2.What should be the run rate in the remaining 40 overs to reach the target of 282 runs?",
        options:["5.75", "6.25", "6.75", "7.25"],
        answerIndex: 1,
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
