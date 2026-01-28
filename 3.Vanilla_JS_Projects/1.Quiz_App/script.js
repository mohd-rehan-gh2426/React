const Questions = [
  "1. Which language is mainly used for web development",
  "2. What does HTML stand for?",
  "3. Which company developed Java?",
  "4. Which symbol is used for comments in JavaScript (single line)?",
  "5. Which of the following is NOT a programming language?",
];
const Answers = [
  ["Python", "JavaScript", "C++", "Java"],
  [
    "Hyper Trainer Marking Language",
    "Hyper Text Marketing Language",
    "Hyper Text Markup Language",
    "Hyper Tool Markup Language",
  ],
  ["Microsoft", "Google", "Sun Microsystems", "Apple"],
  ["<!-- -->", "#", "//", "**"],
  ["Python", "Java", "HTML", "C"],
];

const currentQuestion = document.getElementById("Question");
const currentOptions = document.getElementById("options");
const nextButton = document.getElementById("nextButton");

const UpdateQuestion = () => {
  const totalQuestion = Questions.length;
  if (currentQuestionNumber < totalQuestion - 1) {
    currentQuestionNumber += 1;
    currentQuestion.innerHTML = Questions[currentQuestionNumber];

    const optionOne = document.getElementById('option1');
    

    
  } else {

  }
};

let currentQuestionNumber = 0;

if (currentQuestion) {
  currentQuestion.innerHTML = Questions[currentQuestionNumber];
}

if (currentOptions) {
  Answers[currentQuestionNumber].forEach((itemText) => {
    const listItem = document.createElement("li");
    listItem.id = `option${currentQuestionNumber}`;
    listItem.textContent = itemText;
    currentOptions.appendChild(listItem);
    currentQuestionNumber += 1;
  });
}

currentQuestionNumber = 0;


if (nextButton) {
  nextButton.addEventListener("click", UpdateQuestion);
}
