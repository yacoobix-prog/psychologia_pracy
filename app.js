"use strict";

const DOM = {
  startScreen: document.getElementById("start-screen"),
  quizScreen: document.getElementById("quiz-screen"),
  resultScreen: document.getElementById("result-screen"),

  questionCountInput: document.getElementById("question-count"),
  poolInfo: document.getElementById("pool-info"),
  startError: document.getElementById("start-error"),

  startBtn: document.getElementById("start-btn"),
  maxBtn: document.getElementById("max-btn"),
  restartBtn: document.getElementById("restart-btn"),
  nextBtn: document.getElementById("next-btn"),
  tryAgainBtn: document.getElementById("try-again-btn"),

  questionCounter: document.getElementById("question-counter"),
  liveScore: document.getElementById("live-score"),
  progressFill: document.getElementById("progress-fill"),
  questionText: document.getElementById("question-text"),
  answers: document.getElementById("answers"),

  explanationBox: document.getElementById("explanation-box"),
  answerStatus: document.getElementById("answer-status"),
  explanationText: document.getElementById("explanation-text"),

  finalScoreValue: document.getElementById("final-score-value"),
  finalMessage: document.getElementById("final-message"),
  summaryList: document.getElementById("summary-list")
};

const state = {
  pool: [],
  quizQuestions: [],
  currentIndex: 0,
  score: 0,
  answersLog: [],
  isAnswered: false
};

init();

function init() {
  try {
    validateDom();
    validateQuestions();

    state.pool = normalizeQuestions(QUESTIONS);

    const poolSize = state.pool.length;
    DOM.poolInfo.textContent = `Dostępna pula pytań: ${poolSize}. Docelowo możesz mieć tutaj 150 pytań.`;

    DOM.questionCountInput.max = String(poolSize);

    if (poolSize < Number(DOM.questionCountInput.value)) {
      DOM.questionCountInput.value = String(poolSize);
    }

    DOM.startBtn.addEventListener("click", startQuiz);
    DOM.maxBtn.addEventListener("click", setMaxQuestions);
    DOM.restartBtn.addEventListener("click", resetToStart);
    DOM.nextBtn.addEventListener("click", goToNextQuestion);
    DOM.tryAgainBtn.addEventListener("click", resetToStart);

    DOM.questionCountInput.addEventListener("input", clearStartError);
  } catch (error) {
    showFatalError(error);
  }
}

function validateDom() {
  const missing = Object.entries(DOM)
    .filter(([, element]) => !element)
    .map(([key]) => key);

  if (missing.length > 0) {
    throw new Error(`Brakuje elementów HTML: ${missing.join(", ")}`);
  }
}

function validateQuestions() {
  if (!Array.isArray(window.QUESTIONS || QUESTIONS)) {
    throw new Error("Nie znaleziono tablicy QUESTIONS w pliku questions.js.");
  }

  if (!Array.isArray(QUESTIONS) || QUESTIONS.length === 0) {
    throw new Error("Tablica QUESTIONS jest pusta. Dodaj pytania w pliku questions.js.");
  }
}

function normalizeQuestions(questions) {
  return questions.map((item, index) => {
    const questionNumber = index + 1;

    if (!item || typeof item !== "object") {
      throw new Error(`Pytanie numer ${questionNumber} ma niepoprawny format.`);
    }

    if (!item.question || typeof item.question !== "string") {
      throw new Error(`Pytanie numer ${questionNumber} nie ma treści.`);
    }

    if (!Array.isArray(item.answers) || item.answers.length < 2) {
      throw new Error(`Pytanie numer ${questionNumber} musi mieć minimum 2 odpowiedzi.`);
    }

    if (
      typeof item.correctIndex !== "number" ||
      item.correctIndex < 0 ||
      item.correctIndex >= item.answers.length
    ) {
      throw new Error(`Pytanie numer ${questionNumber} ma błędny correctIndex.`);
    }

    if (!item.explanation || typeof item.explanation !== "string") {
      throw new Error(`Pytanie numer ${questionNumber} nie ma wyjaśnienia.`);
    }

    return {
      id: item.id ?? questionNumber,
      source: item.source ?? "Brak źródła",
      question: item.question.trim(),
      answers: item.answers.map(answer => String(answer).trim()),
      correctIndex: item.correctIndex,
      explanation: item.explanation.trim()
    };
  });
}

function setMaxQuestions() {
  DOM.questionCountInput.value = String(state.pool.length);
  clearStartError();
}

function clearStartError() {
  DOM.startError.textContent = "";
}

function startQuiz() {
  clearStartError();

  const selectedCount = Number(DOM.questionCountInput.value);
  const validationMessage = validateSelectedCount(selectedCount);

  if (validationMessage) {
    DOM.startError.textContent = validationMessage;
    return;
  }

  state.quizQuestions = shuffleArray(state.pool).slice(0, selectedCount);
  state.currentIndex = 0;
  state.score = 0;
  state.answersLog = [];
  state.isAnswered = false;

  showScreen("quiz");
  renderQuestion();
}

function validateSelectedCount(count) {
  if (!Number.isInteger(count)) {
    return "Podaj pełną liczbę pytań.";
  }

  if (count < 1) {
    return "Wybierz przynajmniej 1 pytanie.";
  }

  if (count > state.pool.length) {
    return `Nie możesz wybrać więcej niż ${state.pool.length} pytań, bo tyle jest aktualnie w puli.`;
  }

  return "";
}

function renderQuestion() {
  const currentQuestion = state.quizQuestions[state.currentIndex];

  if (!currentQuestion) {
    showResults();
    return;
  }

  state.isAnswered = false;

  DOM.nextBtn.classList.add("hidden");
  DOM.explanationBox.classList.add("hidden");
  DOM.answers.innerHTML = "";

  const questionNumber = state.currentIndex + 1;
  const totalQuestions = state.quizQuestions.length;

  DOM.questionCounter.textContent = `${questionNumber} / ${totalQuestions}`;
  DOM.liveScore.textContent = String(state.score);
  DOM.progressFill.style.width = `${((questionNumber - 1) / totalQuestions) * 100}%`;
  DOM.questionText.textContent = currentQuestion.question;

  currentQuestion.answers.forEach((answer, answerIndex) => {
    const button = document.createElement("button");

    button.className = "answer-btn";
    button.type = "button";
    button.textContent = answer;

    button.addEventListener("click", () => handleAnswer(answerIndex));

    DOM.answers.appendChild(button);
  });
}

function handleAnswer(selectedIndex) {
  if (state.isAnswered) return;

  state.isAnswered = true;

  const currentQuestion = state.quizQuestions[state.currentIndex];
  const isCorrect = selectedIndex === currentQuestion.correctIndex;

  if (isCorrect) {
    state.score += 1;
  }

  state.answersLog.push({
    questionId: currentQuestion.id,
    source: currentQuestion.source,
    question: currentQuestion.question,
    answers: currentQuestion.answers,
    selectedIndex,
    correctIndex: currentQuestion.correctIndex,
    explanation: currentQuestion.explanation,
    isCorrect
  });

  updateAnswerButtons(selectedIndex, currentQuestion.correctIndex);
  showExplanation(isCorrect, currentQuestion);
  updateLiveProgress();

  DOM.liveScore.textContent = String(state.score);
  DOM.nextBtn.classList.remove("hidden");

  if (state.currentIndex === state.quizQuestions.length - 1) {
    DOM.nextBtn.textContent = "Zobacz wynik";
  } else {
    DOM.nextBtn.textContent = "Następne pytanie";
  }
}

function updateAnswerButtons(selectedIndex, correctIndex) {
  const buttons = [...DOM.answers.querySelectorAll(".answer-btn")];

  buttons.forEach((button, index) => {
    button.disabled = true;

    if (index === correctIndex) {
      button.classList.add("correct");
    }

    if (index === selectedIndex && selectedIndex !== correctIndex) {
      button.classList.add("wrong");
    }
  });
}

function showExplanation(isCorrect, question) {
  DOM.explanationBox.classList.remove("hidden");

  DOM.answerStatus.textContent = isCorrect
    ? "Dobra odpowiedź"
    : "Błędna odpowiedź";

  DOM.answerStatus.classList.toggle("is-correct", isCorrect);
  DOM.answerStatus.classList.toggle("is-wrong", !isCorrect);

  const correctAnswer = question.answers[question.correctIndex];

  DOM.explanationText.textContent = `Poprawna odpowiedź: ${correctAnswer}. ${question.explanation}`;
}

function updateLiveProgress() {
  const answeredQuestions = state.currentIndex + 1;
  const totalQuestions = state.quizQuestions.length;

  DOM.progressFill.style.width = `${(answeredQuestions / totalQuestions) * 100}%`;
}

function goToNextQuestion() {
  if (!state.isAnswered) return;

  state.currentIndex += 1;

  if (state.currentIndex >= state.quizQuestions.length) {
    showResults();
    return;
  }

  renderQuestion();
}

function showResults() {
  showScreen("result");

  const total = state.quizQuestions.length;
  const score = state.score;
  const percentage = Math.round((score / total) * 100);

  DOM.finalScoreValue.textContent = `${score} / ${total}`;
  DOM.finalMessage.textContent = getFinalMessage(percentage);
  DOM.summaryList.innerHTML = "";

  state.answersLog.forEach((item, index) => {
    DOM.summaryList.appendChild(createSummaryItem(item, index));
  });

  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function getFinalMessage(percentage) {
  if (percentage === 100) {
    return "Perfekcyjny wynik. Wszystko siadło idealnie.";
  }

  if (percentage >= 80) {
    return "Bardzo dobry wynik. Widać, że temat jest dobrze opanowany.";
  }

  if (percentage >= 60) {
    return "Solidny wynik. Kilka rzeczy warto jeszcze powtórzyć.";
  }

  if (percentage >= 40) {
    return "Jest baza, ale przyda się spokojna powtórka materiału.";
  }

  return "Ten wynik pokazuje, że warto wrócić do tekstów i przejść quiz jeszcze raz.";
}

function createSummaryItem(item, index) {
  const wrapper = document.createElement("article");
  wrapper.className = `summary-item ${item.isCorrect ? "correct" : "wrong"}`;

  const status = item.isCorrect ? "Poprawnie" : "Błędnie";
  const selectedAnswer = item.answers[item.selectedIndex] ?? "Brak odpowiedzi";
  const correctAnswer = item.answers[item.correctIndex];

  wrapper.innerHTML = `
    <div class="summary-meta">
      <span>Pytanie ${index + 1}</span>
      <span>${escapeHtml(item.source)} · ${status}</span>
    </div>

    <div class="summary-question">
      ${escapeHtml(item.question)}
    </div>

    <p class="summary-answer">
      <strong>Twoja odpowiedź:</strong> ${escapeHtml(selectedAnswer)}
    </p>

    <p class="summary-answer">
      <strong>Poprawna odpowiedź:</strong> ${escapeHtml(correctAnswer)}
    </p>

    <div class="summary-explanation">
      ${escapeHtml(item.explanation)}
    </div>
  `;

  return wrapper;
}

function resetToStart() {
  state.quizQuestions = [];
  state.currentIndex = 0;
  state.score = 0;
  state.answersLog = [];
  state.isAnswered = false;

  DOM.nextBtn.textContent = "Następne pytanie";
  DOM.progressFill.style.width = "0%";

  showScreen("start");

  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function showScreen(screenName) {
  DOM.startScreen.classList.toggle("hidden", screenName !== "start");
  DOM.quizScreen.classList.toggle("hidden", screenName !== "quiz");
  DOM.resultScreen.classList.toggle("hidden", screenName !== "result");
}

function shuffleArray(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[randomIndex]] = [copy[randomIndex], copy[i]];
  }

  return copy;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function showFatalError(error) {
  console.error(error);

  document.body.innerHTML = `
    <main class="app-shell">
      <section class="glass-card">
        <div class="eyebrow">Błąd aplikacji</div>
        <h1>Coś poszło nie tak</h1>
        <p class="lead">
          ${escapeHtml(error.message || "Nieznany błąd. Sprawdź konsolę przeglądarki.")}
        </p>
      </section>
    </main>
  `;
}