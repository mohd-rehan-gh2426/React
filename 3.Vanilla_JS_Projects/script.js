const home = document.getElementById("home");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");

function hideAll() {
  home.classList.add("hidden");
  quiz.classList.add("hidden");
  result.classList.add("hidden");
}

function showHome() {
  hideAll();
  home.classList.remove("hidden");
}

function showQuiz() {
  hideAll();
  quiz.classList.remove("hidden");
}

function showResult() {
  hideAll();
  result.classList.remove("hidden");
}
