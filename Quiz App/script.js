// List of questions with answers and correct answer flags
const questions = [
    {
        question: "Which is the Capital of India?",
        answers: [
            { text: "New Delhi", correct: true },
            { text: "Mumbai", correct: false },
            { text: "Bangalore", correct: false },
            { text: "Chennai", correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Mars", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false },
            { text: "Mark Twain", correct: false },
            { text: "Jane Austen", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "O2", correct: false },
            { text: "H2O", correct: true },
            { text: "CO2", correct: false },
            { text: "NaCl", correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: [
            { text: "Gold", correct: false },
            { text: "Oxygen", correct: true },
            { text: "Osmium", correct: false },
            { text: "Oganesson", correct: false }
        ]
    },
    {
        question: "What is the smallest prime number?",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Pablo Picasso", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Claude Monet", correct: false }
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Great White Shark", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "What is the freezing point of water?",
        answers: [
            { text: "0 degrees Celsius", correct: true },
            { text: "100 degrees Celsius", correct: false },
            { text: "32 degrees Celsius", correct: false },
            { text: "0 degrees Fahrenheit", correct: false }
        ]
    }
    
];

// Get references to the DOM elements
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// Initialize variables to keep track of the current question index and score
let currentQuestionindex = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
    currentQuestionindex = 0; // Reset question index to the beginning
    score = 0; // Reset score to zero
    nextButton.innerHTML = "Next"; // Set the next button text to "Next"
    showQuestion(); // Show the first question
}

// Function to display a question
function showQuestion() {
    resetState(); // Reset the state to clear previous question and answers
    let currentQuestion = questions[currentQuestionindex]; // Get the current question
    let questionNo = currentQuestionindex + 1; // Calculate the question number
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // Display the question

    // Iterate over each answer in the current question
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button"); // Create a button element for each answer
        button.innerHTML = answer.text; // Set the button text to the answer text
        button.classList.add("btn"); // Add a class to the button for styling
        answerButtons.appendChild(button); // Append the button to the answer buttons container
        if (answer.correct) {
            button.dataset.correct = answer.correct; // Set a data attribute if the answer is correct
        }
        button.addEventListener("click", selectAnswer); // Add click event listener to the button
    });
}

// Function to reset the state for the next question
function resetState() {
    nextButton.style.display = "none"; // Hide the next button
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild); // Remove all previous answer buttons
    }
}

// Function to handle the answer selection
function selectAnswer(e) {
    const selectedBtn = e.target; // Get the selected button
    const isCorrect = selectedBtn.dataset.correct === "true"; // Check if the selected answer is correct
    if (isCorrect) {
        selectedBtn.classList.add("correct"); // Add correct class to the selected button
        score++; // Increment the score
    } else {
        selectedBtn.classList.add("incorrect"); // Add incorrect class to the selected button
    }
    // Highlight all correct answers
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct"); // Add correct class to the correct answers
        }
        button.disabled = true; // Disable all buttons to prevent further clicks
    });
    nextButton.style.display = "block"; // Show the next button
}

// Function to display the score at the end of the quiz
function showScore() {
    resetState(); // Reset the state to clear previous question and answers
    questionElement.innerHTML = `You have scored ${score} out of ${questions.length}!`; // Display the score
    nextButton.innerHTML = "Play Again"; // Set the next button text to "Play Again"
    nextButton.style.display = "block"; // Show the next button
}

// Function to handle the next button click
function handleNextButton() {
    currentQuestionindex++; // Move to the next question index
    if (currentQuestionindex < questions.length) {
        showQuestion(); // Show the next question if there are more questions
    } else {
        showScore(); // Show the score if all questions have been answered
    }
}

// Add event listener to the next button to handle click events
nextButton.addEventListener("click", () => {
    if (currentQuestionindex < questions.length) {
        handleNextButton(); // Handle next question if there are more questions
    } else {
        startQuiz(); // Restart the quiz if all questions have been answered
    }
});

// Start the quiz when the script is loaded
startQuiz();
