const questions = [
    {
        question: " Where is India's first submarine tourism project set to be unveiled?",
        answers: [
            { text: "Mumbai", correcct: false },
            { text: "Kolkata", correcct: false },
            { text: "Gujrat", correcct: true },
            { text: "Kerala", correcct: false }
        ]
    },
    {
        question: " Which Indian state launched the 'AMA Bank' scheme to provide banking services in all Gram Panchayats?",
        answers: [
            { text: "Maharashtra", correcct: false },
            { text: "Odisha", correcct: true },
            { text: "Gujrat", correcct: false },
            { text: "Karnataka", correcct: false }
        ]
    },
    {
        question: " In which Indian state was the world's first 3D-printed temple unveiled?",
        answers: [
            { text: "Karnataka", correcct: false },
            { text: "Andhra Pradesh", correcct: false },
            { text: "Gujrat", correcct: false },
            { text: "Telangana", correcct: true }
        ]
    },
    {
        question: " Which state government launched the 'Jai Bhim Mukhyamantri Pratibha Vikas Yojna' in 2023?",
        answers: [
            { text: "Delhi", correcct: true },
            { text: "Rajasthan", correcct: false },
            { text: "Uttar Pradesh", correcct: false },
            { text: "Maharashtra", correcct: false }
        ]
    },
    {
        question: " Which state government has announced a free gas cylinder for Ujjwala scheme beneficiaries?",
        answers: [
            { text: "Bihar", correcct: false },
            { text: "Uttar Pradesh", correcct: true },
            { text: "Madhya Pradesh", correcct: false },
            { text: "Rajasthan", correcct: false }
        ]
    },
    {
        question: " Which state has approved the Mob Lynching Victim Compensation Scheme 2023?",
        answers: [
            { text: "Uttar Pradesh", correcct: false },
            { text: "Bihar", correcct: false },
            { text: "Madhya Pradesh", correcct: true },
            { text: "Rajasthan", correcct: false }
        ]
    },
    {
        question: " Which state government has announced that it will ban hookah and tobacco products for people below 21 years of age?",
        answers: [
            { text: "Mumbai", correcct: false },
            { text: "Karnataka", correcct: true },
            { text: "Andhra Pradesh", correcct: false },
            { text: "Gujarat", correcct: false }
        ]
    },
    {
        question: " Which state in India is known as the Spice Capital of India?",
        answers: [
            { text: "Mumbai", correcct: false },
            { text: "Tamil Nadu", correcct: false },
            { text: "Gujrat", correcct: false },
            { text: "Kerala", correcct: true }
        ]
    },
    {
        question: " Which state in India has the longest coastline?",
        answers: [
            { text: "Tamil Nadu", correcct: false },
            { text: "Gujrat", correcct: true },
            { text: "Andhra Pradesh", correcct: false },
            { text: "Maharashtra", correcct: false }
        ]
    },
    {
        question: " Which state is the first in India to take steps to ensure minimum wages for gig workers?",
        answers: [
            { text: "Rajasthan", correcct: false },
            { text: "Kerala", correcct: false },
            { text: "Jharkhand", correcct: true },
            { text: "Karnataka", correcct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correcct) {
            button.dataset.correcct = answer.correcct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);

    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correcct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;

    }
    else {
        selectedBtn.classList.add("inccorrerct");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correcct === "true") {
            button.classList.add("correct");

        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You score ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion()
    }
    else {
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
})
startQuiz()